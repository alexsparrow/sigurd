
use crate::ast::AstNode;
use std::collections::HashMap;

enum Value<'a> {
    Null,
    Function { node: &'a AstNode },
    Int { val: i64 }
}

pub fn execute(ast: Vec<AstNode>) {
    let mut functions : HashMap<String, Value> = HashMap::new();
    for node in ast.iter() {
        match node {
            AstNode::Function { name, body:_ } => {
                functions.insert(name.clone(), Value::Function { node: node });
            }
            _ => ()
        }
        println!("{:?}", node);
    }

    let mut locals : HashMap<String, Value> = HashMap::new();

    interpret(&lookup_function(&functions, "main"), &mut locals, &functions);
}

fn lookup_function<'a>(scope: &'a HashMap<String, Value>, name: &str) -> &'a AstNode {
    match scope.get(name) {
                Some(Value::Function { node }) => node,
                _ => panic!(format!("No function named {:?}", name)),
            }
}

fn unwrap_ident(node: &AstNode) -> &str {
    match node {
        AstNode::Ident { name} => name,
        _ => unreachable!()
    }
}

fn interpret<'a>(ast_node: &AstNode, locals: &mut std::collections::HashMap<std::string::String, Value<'_>>, globals: &HashMap<String, Value>) -> Value<'a> {
    println!("AST Node: {:?}", ast_node);
    match ast_node {
        AstNode::Function { name:_, body } => {
            let mut ret_val: Value = Value::Null;

            for expr in body {
                ret_val = interpret(expr, locals, globals);
            }
            ret_val
        },
        AstNode::FunctionCall { name, args, left:_ } => {
            let f = lookup_function(globals, name);
            let mut new_scope = create_scope(args);
            interpret(&f, &mut new_scope, globals)
        },
        AstNode::LetBinding { name, expr } => {
            let result = interpret(expr, locals, globals);
            locals.insert(unwrap_ident(name.as_ref()).into(), result);
            Value::Null
        },
        AstNode::IntLiteral { val } => Value::Int { val: *val },
        _ => unreachable!(format!("Not implemented: {:?}", ast_node))
    }
}

fn create_scope(args: &Vec<AstNode>) -> std::collections::HashMap<String, Value> {
    return HashMap::new();
}