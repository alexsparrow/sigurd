use crate::ast::AstNode;
use std::ops::{Sub, Add};

#[derive(Clone, Debug, PartialEq, PartialOrd)]
pub enum Value {
    Null,
    Function { node: AstNode },
    // This refers to a key in the STDLIB table
    // The indirection allows us to automatically derive Debug and PartialEq
    StdLibStub { func: &'static str },
    Int { val: i64 },
    Float { val: f64 },
    String { val: String },
    Bool { val: bool },
}

impl Add for Value {
    fn add(self, other: Self) -> Self {
        match self {
            Value::Int { val: val_a } => match other {
                Value::Int { val: val_b } => Value::Int { val: val_a + val_b },
                _ => unimplemented!(),
            },
            _ => unimplemented!(),
        }
    }
    type Output = Value;
}

impl Sub for Value {
    fn sub(self, other: Self) -> Self {
        match self {
            Value::Int { val: val_a } => match other {
                Value::Int { val: val_b } => Value::Int { val: val_a - val_b },
                _ => unimplemented!(),
            },
            _ => unimplemented!(),
        }
    }
    type Output = Value;
}


pub fn as_bool(x: Value) -> bool {
    if let Value::Bool { val } = x {
        val
    } else {
        panic!(format!("Expression is not boolean valued: {:?}", x))
    }
}

pub fn unary_minus(x: Value) -> Value {
    match x {
        Value::Float { val } => Value::Float { val: -val },
        Value::Int { val } => Value::Int { val: -val },
        _ => panic!(format!("Non-numeric: {:?}", x)),
    }
}
