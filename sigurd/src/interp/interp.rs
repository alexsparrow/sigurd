use super::value::{as_bool, unary_minus};
use crate::interp::stdlib::{register_stdlib, STDLIB};
use crate::interp::value::Value;
use crate::parser::ast::{AstElement, AstNode, Position};
use std::{collections::HashMap, fmt};

#[derive(Debug)]
pub struct InterpreterError {
    message: String,
    position: Option<Position>
}

impl fmt::Display for InterpreterError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        if let Some(Position((line_a, col_a), (line_b, col_b))) = self.position {
            write!(f, "Interpreter error (line {}, column {}): {}", line_a, col_a, self.message)
        } else {
            write!(f, "Interpreter error: {}", self.message)
        }
    }
}

impl InterpreterError {
    pub fn new(message: &str, x: Option<&AstNode>) -> InterpreterError {
        InterpreterError {
            message: message.into(),
            position: x.map(|n| n.position.clone())
        }
    }
}

pub fn execute(
    ast: Vec<AstNode>,
    func_name: &str,
    args: &Vec<Value>,
) -> Result<Value, InterpreterError> {
    let mut functions: HashMap<String, Value> = HashMap::new();
    for node in ast.iter() {
        match &node.element {
            AstElement::Function {
                name,
                arg_names: _,
                body: _,
            } => {
                functions.insert(name.clone(), Value::Function { node: node.clone() });
            }
            x => Err(InterpreterError::new(&format!(
                "Invalid AST element at top level: {:?}",
                x
            ), node.into()))?,
        }
    }

    register_stdlib(&mut functions);

    run_function(&functions, func_name, args, None)
}

fn run_function(
    globals: &HashMap<String, Value>,
    name: &str,
    args: &Vec<Value>,
    source_node: Option<&AstNode>
) -> Result<Value, InterpreterError> {
    Ok(match globals.get(name) {
        Some(Value::Function { node }) => {
            let mut new_scope = create_scope(node, args);
            interpret(node, &mut new_scope, globals)?
        }
        Some(Value::StdLibStub { func }) => {
            let f = STDLIB
                .get(func)
                .ok_or_else(|| InterpreterError::new(&format!("Function not found: {:?}", func), source_node))?;
            f(args)
        }
        _ => Err(InterpreterError::new(&format!(
            "No function named {:?}",
            name
        ), source_node))?,
    })
}

fn unwrap_ident(node: &AstNode) -> &str {
    match &node.element {
        AstElement::Ident { name } => name,
        _ => unreachable!(),
    }
}

fn run_body(
    body: &Vec<AstNode>,
    locals: &mut HashMap<String, Value>,
    globals: &HashMap<String, Value>,
) -> Result<Value, InterpreterError> {
    let mut ret_val: Value = Value::Null;

    for expr in body {
        ret_val = interpret(expr, locals, globals)?;
    }
    Ok(ret_val)
}

fn interpret(
    ast_node: &AstNode,
    locals: &mut std::collections::HashMap<std::string::String, Value>,
    globals: &HashMap<String, Value>,
) -> Result<Value, InterpreterError> {
    match &ast_node.element {
        AstElement::Function {
            name: _,
            arg_names: _,
            body,
        } => run_body(&body, locals, globals),
        AstElement::FunctionCall {
            name,
            args,
            left: _,
        } => {
            let arg_values = args
                .iter()
                .map(|a| interpret(a, locals, globals))
                .collect::<Result<Vec<Value>, InterpreterError>>()?;
            run_function(&globals, &name, &arg_values, ast_node.into())
        }
        AstElement::BinaryExpr {
            left,
            operator,
            right,
        } => {
            let left_value = interpret(&left, locals, globals)?;
            let right_value = interpret(&right, locals, globals)?;
            let result = match operator.as_str() {
                "+" => left_value.clone() + right_value.clone(),
                "-" => left_value.clone() - right_value.clone(),
                "==" => Value::Bool {
                    val: left_value.eq(&right_value),
                },
                "!=" => Value::Bool {
                    val: !left_value.eq(&right_value),
                },
                "<=" => Value::Bool {
                    val: left_value <= right_value,
                },
                "<" => Value::Bool {
                    val: left_value < right_value,
                },
                ">=" => Value::Bool {
                    val: left_value >= right_value,
                },
                ">" => Value::Bool {
                    val: left_value > right_value,
                },

                s => Err(InterpreterError::new(&format!(
                    "Operator not implemented: {}",
                    s
                ), ast_node.into()))?,
            };

            if let Value::Error = result {
                Err(InterpreterError::new(&format!(
                    "Binary expression invalid: {:?} {:} {:?}",
                    left_value.clone(),
                    operator,
                    right_value
                ), ast_node.into()))
            } else {
                Ok(result)
            }
        }
        AstElement::If {
            condition,
            body,
            else_body,
        } => {
            if as_bool(interpret(&condition, locals, globals)?, ast_node)? {
                run_body(&body, locals, globals)
            } else {
                run_body(&else_body, locals, globals)
            }
        }
        AstElement::While { condition, body } => {
            while as_bool(interpret(&condition, locals, globals)?, ast_node)? {
                run_body(&body, locals, globals)?;
            }
            Ok(Value::Null)
        }
        AstElement::Ident { name } => match locals.get(name) {
            Some(x) => Ok(x.clone()),
            _ => Err(InterpreterError::new(&format!(
                "Undefined variable: {}",
                name
            ), ast_node.into())),
        },
        AstElement::LetBinding { name, expr } => {
            let result = interpret(&expr, locals, globals)?;
            locals.insert(unwrap_ident(name.as_ref()).clone().into(), result);
            Ok(Value::Null)
        }
        AstElement::IntLiteral { val } => Ok(Value::Int { val: *val }),
        AstElement::StringLiteral { val } => Ok(Value::String { val: val.clone() }),
        AstElement::BoolLiteral { val } => Ok(Value::Bool { val: *val }),
        AstElement::FloatLiteral { val } => Ok(Value::Float { val: *val }),
        AstElement::UnaryExpr { expr, operator } => Ok(match operator {
            '!' => Value::Bool {
                val: !as_bool(interpret(&expr, locals, globals)?, ast_node)?,
            },
            '-' => unary_minus(interpret(&expr, locals, globals)?, ast_node)?,
            c => Err(InterpreterError::new(&format!(
                "Unrecognised unary operator: {}",
                c
            ), ast_node.into()))?,
        }),
    }
}

fn create_scope(node: &AstNode, args: &Vec<Value>) -> std::collections::HashMap<String, Value> {
    if let AstElement::Function {
        name: _,
        arg_names,
        body: _,
    } = &node.element
    {
        let mut scope: HashMap<String, Value> = HashMap::new();

        arg_names.iter().zip(args).for_each(|(name, value)| {
            scope.insert(name.into(), value.clone());
        });

        return scope;
    } else {
        unreachable!()
    }
}
