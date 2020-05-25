use crate::ast::AstNode;
use std::{collections::HashMap, ops::Add};

#[derive(Clone)]
enum Value {
    Null,
    Function { node: AstNode },
    StdLibStub { func: StdLibFunc },
    Int { val: i64 },
    String { val: String },
}

impl Add for Value {
    fn add(self, other: Self) -> Self {
        match self {
            Value::Int { val: valA } => match other {
                Value::Int { val: valB } => Value::Int { val: valA + valB },
                _ => unimplemented!(),
            },
            _ => unimplemented!(),
        }
    }
    type Output = Value;
}

type StdLibFunc = fn(&Vec<Value>) -> Value;

fn _print(args: &Vec<Value>) -> Value {
    args.iter().for_each(|a| match a {
        Value::Int { val } => print!("{}", val),
        Value::String { val } => print!("{}", val),
        _ => unimplemented!(),
    });
    return Value::Null;
}

fn register_stdlib(globals: &mut HashMap<String, Value>) {
    globals.insert("print".into(), Value::StdLibStub { func: _print });
}

pub fn execute(ast: Vec<AstNode>) {
    let mut functions: HashMap<String, Value> = HashMap::new();
    for node in ast.iter() {
        match node {
            AstNode::Function {
                name,
                arg_names,
                body: _,
            } => {
                functions.insert(name.clone(), Value::Function { node: node.clone() });
            }
            _ => (),
        }
    }

    register_stdlib(&mut functions);

    run_function(&functions, "main", &vec![]);
}

fn run_function(globals: &HashMap<String, Value>, name: &str, args: &Vec<Value>) -> Value {
    match globals.get(name) {
        Some(Value::Function { node }) => {
            let mut new_scope = create_scope(node, args);
            interpret(node, &mut new_scope, globals)
        }
        Some(Value::StdLibStub { func }) => func(args),
        _ => panic!(format!("No function named {:?}", name)),
    }
}

fn unwrap_ident(node: &AstNode) -> &str {
    match node {
        AstNode::Ident { name } => name,
        _ => unreachable!(),
    }
}

fn interpret(
    ast_node: &AstNode,
    locals: &mut std::collections::HashMap<std::string::String, Value>,
    globals: &HashMap<String, Value>,
) -> Value {
    // println!("AST Node: {:?}", ast_node);
    match ast_node {
        AstNode::Function {
            name: _,
            arg_names: _,
            body,
        } => {
            let mut ret_val: Value = Value::Null;

            for expr in body {
                ret_val = interpret(expr, locals, globals);
            }
            ret_val
        }
        AstNode::FunctionCall {
            name,
            args,
            left: _,
        } => {
            let arg_values = args
                .iter()
                .map(|a| interpret(a, locals, globals))
                .collect::<Vec<Value>>();
            run_function(&globals, name, &arg_values)
        }
        AstNode::BinaryExpr {
            left,
            operator,
            right,
        } => {
            let left_value = interpret(left, locals, globals);
            let right_value = interpret(right, locals, globals);
            match operator.as_str() {
                "+" => left_value.add(right_value),
                _ => unreachable!(),
            }
        }
        AstNode::Ident { name } => match locals.get(name) {
            Some(x) => x.clone(),
            _ => panic!(format!("Undefined variable: {}", name)),
        },
        AstNode::LetBinding { name, expr } => {
            let result = interpret(expr, locals, globals);
            locals.insert(unwrap_ident(name.as_ref()).clone().into(), result);
            Value::Null
        }
        AstNode::IntLiteral { val } => Value::Int { val: *val },
        AstNode::StringLiteral { val } => Value::String { val: val.clone() },
        _ => unreachable!(format!("Not implemented: {:?}", ast_node)),
    }
}

fn create_scope(node: &AstNode, args: &Vec<Value>) -> std::collections::HashMap<String, Value> {
    if let AstNode::Function {
        name,
        arg_names,
        body,
    } = node
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
