use crate::ast::AstNode;
use std::ops::Add;

#[derive(Clone, Debug, PartialEq)]
pub enum Value {
    Null,
    Function { node: AstNode },
    // This refers to a key in the STDLIB table
    // The indirection allows us to automatically derive Debug and PartialEq
    StdLibStub { func: &'static str },
    Int { val: i64 },
    String { val: String },
    Bool { val: bool },
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
