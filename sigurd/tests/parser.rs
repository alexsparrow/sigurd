use sigurd::parser::{
    ast::{AstElement::*, AstNode, Position},
    parser::{parse_expr, parse_program},
};

#[test]
fn basic_expression() {
    let x = parse_expr("x + 1.3 + 2.0 / 5.0").unwrap();
    assert_eq!(
        x,
        vec![AstNode {
            element: BinaryExpr {
                left: AstNode {
                    element: BinaryExpr {
                        left: AstNode {
                            element: Ident { name: "x".into() },
                            position: Position((1, 1), (1, 2))
                        }
                        .into(),
                        right: AstNode {
                            element: FloatLiteral { val: 1.3 },
                            position: Position((1, 5), (1, 9))
                        }
                        .into(),
                        operator: "+".into()
                    },
                    position: Position((1, 3), (1, 4))
                }
                .into(),
                right: AstNode {
                    element: BinaryExpr {
                        left: AstNode {
                            element: FloatLiteral { val: 2.0 },
                            position: Position((1, 11), (1, 15))
                        }
                        .into(),
                        right: AstNode {
                            element: FloatLiteral { val: 5.0 },
                            position: Position((1, 17), (1, 20))
                        }
                        .into(),
                        operator: "/".into()
                    },
                    position: Position((1, 15), (1, 16))
                }
                .into(),
                operator: "+".into()
            },
            position: Position((1, 9), (1, 10))
        }]
    );
}

#[test]
fn function_call() {
    let x = parse_expr("f(2, true) + 5").unwrap();
    assert_eq!(
        x,
        vec![AstNode {
            element: BinaryExpr {
                left: AstNode {
                    element: FunctionCall {
                        left: None,
                        name: "f".into(),
                        args: vec![
                            AstNode {
                                element: IntLiteral { val: 2 },
                                position: Position((1, 3), (1, 4))
                            },
                            AstNode {
                                element: BoolLiteral { val: true },
                                position: Position((1, 6), (1, 10))
                            }
                        ]
                    }
                    .into(),
                    position: Position((1, 1), (1, 11))
                }
                .into(),
                right: AstNode {
                    element: IntLiteral { val: 5 },
                    position: Position((1, 14), (1, 15))
                }
                .into(),
                operator: "+".into()
            },
            position: Position((1, 12), (1, 13))
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
    )
    .unwrap();
    assert_eq!(
        x,
        vec![AstNode {
            element: Function {
                name: "f".into(),
                arg_names: vec!["x".into(), "y".into()],
                body: vec![
                    AstNode {
                        element: LetBinding {
                            name: AstNode {
                                element: Ident { name: "x".into() },
                                position: Position((3, 13), (3, 14))
                            }
                            .into(),
                            expr: AstNode {
                                element: IntLiteral { val: 1 },
                                position: Position((3, 17), (3, 18))
                            }
                            .into()
                        },
                        position: Position((3, 9), (3, 18))
                    },
                    AstNode {
                        element: BinaryExpr {
                            left: AstNode {
                                element: FunctionCall {
                                    left: None,
                                    name: "f".into(),
                                    args: vec![
                                        AstNode {
                                            element: IntLiteral { val: 2 },
                                            position: Position((4, 11), (4, 12))
                                        },
                                        AstNode {
                                            element: BoolLiteral { val: true },
                                            position: Position((4, 14), (4, 18))
                                        }
                                    ]
                                },
                                position: Position((4, 9), (4, 19))
                            }
                            .into(),
                            right: AstNode {
                                element: IntLiteral { val: 5 },
                                position: Position((4, 22), (4, 23))
                            }
                            .into(),
                            operator: "+".into()
                        },
                        position: Position((4, 20), (4, 21))
                    },
                    AstNode {
                        element: BinaryExpr {
                            left: AstNode {
                                element: IntLiteral { val: 2 },
                                position: Position((5, 9), (5, 11))
                            }
                            .into(),
                            right: AstNode {
                                element: IntLiteral { val: 3 },
                                position: Position((5, 13), (6, 5))
                            }
                            .into(),
                            operator: "+".into()
                        },
                        position: Position((5, 11), (5, 12))
                    }
                ]
            },
            position: Position((2, 5), (6, 6))
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
    )
    .unwrap();
    assert_eq!(
        x,
        vec![AstNode {
            element: Function {
                name: "f".into(),
                arg_names: vec!["x".into(), "y".into()],
                body: vec![
                    AstNode {
                        element: If {
                            condition: AstNode {
                                element: BinaryExpr {
                                    left: AstNode {
                                        element: Ident { name: "x".into() },
                                        position: Position((3, 12), (3, 13))
                                    }.into(),
                                    right: AstNode {
                                        element: IntLiteral { val: 1 },
                                        position: Position((3, 17), (3, 19))
                                    }.into(),
                                    operator: "==".into()
                                },
                                position: Position((3, 14), (3, 16))
                            }.into(),
                            body: vec![AstNode {
                                element: FunctionCall {
                                    left: None,
                                    name: "print".into(),
                                    args: vec![AstNode {
                                        element: StringLiteral { val: "Hello".into() },
                                        position: Position((4, 19), (4, 26))
                                    }]
                                },
                                position: Position((4, 13), (4, 27))
                            }],
                            else_body: vec![]
                        },
                        position: Position((3, 9), (7, 9))
                    },
                    AstNode {
                        element: If {
                            condition: AstNode {
                                element: BinaryExpr {
                                    left: AstNode {
                                        element: Ident { name: "x".into() },
                                        position: Position((7, 12), (7, 13))
                                    }.into(),
                                    right: AstNode {
                                        element: IntLiteral { val: 2 },
                                        position: Position((7, 17), (7, 19))
                                    }.into(),
                                    operator: "==".into()
                                },
                                position: Position((7, 14), (7, 16))
                            }.into(),
                            body: vec![AstNode {
                                element: FunctionCall {
                                    left: None,
                                    name: "print".into(),
                                    args: vec![AstNode {
                                        element: StringLiteral { val: "NOO".into() },
                                        position: Position((8, 19), (8, 24))
                                    }]
                                },
                                position: Position((8, 13), (8, 25))
                            }],
                            else_body: vec![]
                        },
                        position: Position((7, 9), (10, 5))
                    }
                ]
            },
            position: Position((2, 5), (10, 6))
        }]
    );
}
