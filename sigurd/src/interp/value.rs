use super::interp::InterpreterError;
use crate::parser::ast::AstNode;
use std::ops::{Add, Sub};

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
    Error,
}

impl Add for Value {
    fn add(self, other: Self) -> Self {
        match self {
            Value::Int { val: val_a } => match other {
                Value::Int { val: val_b } => Value::Int { val: val_a + val_b },
                _ => Value::Error,
            },
            _ => Value::Error,
        }
    }
    type Output = Value;
}

impl Sub for Value {
    fn sub(self, other: Self) -> Self {
        match self {
            Value::Int { val: val_a } => match other {
                Value::Int { val: val_b } => Value::Int { val: val_a - val_b },
                _ => Value::Error,
            },
            _ => Value::Error,
        }
    }
    type Output = Value;
}

pub fn as_bool(x: Value, ast_node: &AstNode) -> Result<bool, InterpreterError> {
    if let Value::Bool { val } = x {
        Ok(val)
    } else {
        Err(InterpreterError::new(&format!(
            "Expected boolean value, found {:?}",
            x
        ), ast_node.into()))
    }
}

pub fn unary_minus(x: Value, ast_node: &AstNode) -> Result<Value, InterpreterError> {
    match x {
        Value::Float { val } => Ok(Value::Float { val: -val }),
        Value::Int { val } => Ok(Value::Int { val: -val }),
        _ => Err(InterpreterError::new(&format!(
            "Expected numberic value, found {:?}",
            x
        ), ast_node.into())),
    }
}
