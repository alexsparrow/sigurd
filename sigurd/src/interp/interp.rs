use super::value::{as_bool, unary_minus};
use crate::parser::ast::{AstElement, AstNode};
use crate::interp::stdlib::{register_stdlib, STDLIB};
use crate::interp::value::Value;
use std::{collections::HashMap, ops::Add, cmp::Ordering};

pub fn execute(ast: Vec<AstNode>, func_name: &str, args: &Vec<Value>) -> Value {
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
            _ => (),
        }
    }

    register_stdlib(&mut functions);

    run_function(&functions, func_name, args)
}

fn run_function(globals: &HashMap<String, Value>, name: &str, args: &Vec<Value>) -> Value {
    match globals.get(name) {
        Some(Value::Function { node }) => {
            let mut new_scope = create_scope(node, args);
            interpret(node, &mut new_scope, globals)
        }
        Some(Value::StdLibStub { func }) => {
            STDLIB
                .get(func)
                .expect(format!("Function not found: {:?}", func).as_ref())(args)
        }
        _ => panic!(format!("No function named {:?}", name)),
    }
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
) -> Value {
    let mut ret_val: Value = Value::Null;

    for expr in body {
        ret_val = interpret(expr, locals, globals);
    }
    ret_val
}

fn interpret(
    ast_node: &AstNode,
    locals: &mut std::collections::HashMap<std::string::String, Value>,
    globals: &HashMap<String, Value>,
) -> Value {
    // println!("AST Node: {:?}", ast_node);
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
                .collect::<Vec<Value>>();
            run_function(&globals, &name, &arg_values)
        }
        AstElement::BinaryExpr {
            left,
            operator,
            right,
        } => {
            let left_value = interpret(&left, locals, globals);
            let right_value = interpret(&right, locals, globals);
            match operator.as_str() {
                "+" => left_value + right_value,
                "-" => left_value - right_value,
                "==" => Value::Bool {
                    val: left_value.eq(&right_value),
                },
                "!=" => Value::Bool {
                    val: !left_value.eq(&right_value),
                },
                "<=" => Value::Bool {
                    val: left_value <= right_value
                },
                _ => unreachable!(),
            }
        }
        AstElement::If {
            condition,
            body,
            else_body,
        } => {
            if as_bool(interpret(&condition, locals, globals)) {
                run_body(&body, locals, globals)
            } else {
                run_body(&else_body, locals, globals)
            }
        }
        AstElement::While { condition, body } => {
            while as_bool(interpret(&condition, locals, globals)) {
                run_body(&body, locals, globals);
            }
            Value::Null
        }
        AstElement::Ident { name } => match locals.get(name) {
            Some(x) => x.clone(),
            _ => panic!(format!("Undefined variable: {}", name)),
        },
        AstElement::LetBinding { name, expr } => {
            let result = interpret(&expr, locals, globals);
            locals.insert(unwrap_ident(name.as_ref()).clone().into(), result);
            // println!("Binding {:?} -> {:?}", locals.get(unwrap_ident(name.as_ref())), name);
            Value::Null
        }
        AstElement::IntLiteral { val } => Value::Int { val: *val },
        AstElement::StringLiteral { val } => Value::String { val: val.clone() },
        AstElement::BoolLiteral { val } => Value::Bool { val: *val },
        AstElement::FloatLiteral { val } => Value::Float { val: *val },
        AstElement::UnaryExpr { expr, operator } => match operator {
            '!' => Value::Bool {
                val: !as_bool(interpret(&expr, locals, globals)),
            },
            '-' => unary_minus(interpret(&expr, locals, globals)),
            _ => unreachable!(),
        },
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
        panic!("OH NO");
    }
}
