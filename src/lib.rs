use ast::{parse_expr, parse_program, AstNode};

extern crate pest;
#[macro_use]
extern crate pest_derive;

#[macro_use]
extern crate lazy_static;

pub mod ast;
pub mod interp;

const program: &str = r#"
    let x = 1

    fn foo(x: int) -> int {
        println("Hello")
    }
"#;

#[test]
fn basic_expression() {
    let x = parse_expr("x + 1.3 + 2.0 / 5.0");
    assert_eq!(
        x,
        vec![AstNode::BinaryExpr {
            left: Box::new(AstNode::BinaryExpr {
                left: Box::new(AstNode::Ident { name: "x".into() }),
                right: Box::new(AstNode::FloatLiteral { val: 1.3 }),
                operator: "+".into()
            }),
            right: Box::new(AstNode::BinaryExpr {
                left: Box::new(AstNode::FloatLiteral { val: 2.0 }),
                right: Box::new(AstNode::FloatLiteral { val: 5.0 }),
                operator: "/".into()
            }),
            operator: "+".into()
        }]
    );
}

#[test]
fn function_call() {
    let x = parse_expr("f(2, true) + 5");
    assert_eq!(
        x,
        vec![AstNode::BinaryExpr {
            left: Box::new(AstNode::FunctionCall {
                left: None,
                name: "f".to_string(),
                args: vec![
                    AstNode::IntLiteral { val: 2 },
                    AstNode::BoolLiteral { val: true }
                ]
            }),
            right: Box::new(AstNode::IntLiteral { val: 5 }),
            operator: "+".into()
        }]
    );
}

#[test]
fn function_def() {
    let x = parse_program(
        r#"
    fn f(x: int, y: bool) { 
        let x = 1;
        f(2, true) + 5;
        2 + 3
    }
    "#,
    );
    assert_eq!(
        x,
        vec![AstNode::Function {
            name: "f".into(),
            body: vec![
                AstNode::LetBinding {
                    name: Box::new(AstNode::Ident { name: "x".into() }),
                    expr: Box::new(AstNode::IntLiteral { val: 1 })
                },
                AstNode::BinaryExpr {
                    left: Box::new(AstNode::FunctionCall {
                        left: None,
                        name: "f".to_string(),
                        args: vec![
                            AstNode::IntLiteral { val: 2 },
                            AstNode::BoolLiteral { val: true }
                        ]
                    }),
                    right: Box::new(AstNode::IntLiteral { val: 5 }),
                    operator: "+".into()
                },
                AstNode::BinaryExpr {
                    left: Box::new(AstNode::IntLiteral { val: 2 }),
                    right: Box::new(AstNode::IntLiteral { val: 3 }),
                    operator: "+".into()
                }
            ]
        }]
    );
}

#[test]
fn if_statement() {
    let x = parse_program(
        r#"
    fn f(x: int, y: bool) { 
        if x == 1 {
            print("Hello");
        }

        if x == 2 {
            print("NOO");
        }
    }
    "#,
    );
    assert_eq!(
        x,
        vec![AstNode::Function {
            name: "f".into(),
            body: vec![AstNode::If {
                condition: Box::new(AstNode::BinaryExpr {
                    left: Box::new(AstNode::Ident { name: "x".into() }),
                    right: Box::new(AstNode::IntLiteral { val: 1 }),
                    operator: "==".into()
                }),
                body: vec![AstNode::FunctionCall {
                    left: None,
                    name: "print".into(),
                    args: vec![AstNode::StringLiteral {
                        val: "\"Hello\"".into()
                    }]
                }]
            },
AstNode::If {
                condition: Box::new(AstNode::BinaryExpr {
                    left: Box::new(AstNode::Ident { name: "x".into() }),
                    right: Box::new(AstNode::IntLiteral { val: 2 }),
                    operator: "==".into()
                }),
                body: vec![AstNode::FunctionCall {
                    left: None,
                    name: "print".into(),
                    args: vec![AstNode::StringLiteral {
                        val: "\"NOO\"".into()
                    }]
                }]
            }
            ]
        }]
    );
}
