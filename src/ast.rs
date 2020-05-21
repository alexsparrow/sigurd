use pest::Parser;

use pest::{
    iterators::{Pair, Pairs},
    prec_climber::{Assoc, Operator, PrecClimber},
};
use std::{fmt::Debug, str::FromStr};

#[derive(Parser)]
#[grammar = "sigurd.pest"]
pub struct SigurdParser;

lazy_static! {
    static ref PREC_CLIMBER: PrecClimber<Rule> = {
        use Assoc::*;
        use Rule::*;

        PrecClimber::new(vec![
            Operator::new(op_plus, Assoc::Left) | Operator::new(op_minus, Left),
            Operator::new(op_times, Left) | Operator::new(op_divide, Left),
            Operator::new(op_power, Right),
        ])
    };
}

#[derive(Debug, PartialEq, Clone)]
pub enum AstNode {
    IntLiteral {
        val: i64,
    },
    FloatLiteral {
        val: f64,
    },
    StringLiteral {
        val: String,
    },
    BoolLiteral {
        val: bool,
    },
    Ident {
        name: String,
    },
    UnaryExpr {
        expr: Box<AstNode>,
        operator: char,
    },
    BinaryExpr {
        left: Box<AstNode>,
        right: Box<AstNode>,
        operator: char,
    },
    FunctionCall {
        left: Option<Box<AstNode>>,
        name: String,
        args: Vec<AstNode>,
    },
}

fn parse_literal<T: FromStr>(x: &Pair<Rule>) -> T
where
    <T as FromStr>::Err: Debug,
{
    x.as_str()
        .trim()
        .parse::<T>()
        .expect(format!("Can't parse literal: {}", x.as_str()).as_ref())
}

fn parse_func_call(x: Pair<Rule>) -> AstNode {
    let pairs = x.into_inner().collect::<Vec<Pair<Rule>>>();
    let ident = pairs.iter().find(|p| p.as_rule() == Rule::ident).unwrap();
    let args = pairs
        .iter()
        .find(|p| p.as_rule() == Rule::args)
        .unwrap()
        .clone();

    return AstNode::FunctionCall {
        left: None,
        args: args.into_inner().map(|p| ast(p)).collect(),
        name: ident.as_str().into(),
    };
}

fn parse_term(x: Pairs<Rule>) -> AstNode {
    let pairs = x.collect::<Vec<Pair<Rule>>>();
    let call = pairs.iter().filter(|p| p.as_rule() == Rule::call).next();
    let value = pairs
        .iter()
        .filter(|p| p.as_rule() == Rule::value)
        .next()
        .unwrap();

    let base_node = if call.is_some() {
        match parse_func_call(call.unwrap().clone()) {
            AstNode::FunctionCall {
                name,
                args,
                left: _,
            } => AstNode::FunctionCall {
                name,
                left: Some(Box::new(ast(value.clone()))),
                args: args,
            },
            _ => unreachable!("OH NO"),
        }
    } else {
        ast(value.clone())
    };

    let y = pairs
        .iter()
        .filter(|p| p.as_rule() == Rule::op_unary)
        .fold(base_node, |accum, p| match p.as_rule() {
            Rule::op_unary_minus => AstNode::UnaryExpr {
                expr: Box::new(accum),
                operator: '-',
            },
            _ => unreachable!("Boo hoo"),
        });
    y
}

fn eval(expression: Pairs<Rule>) -> AstNode {
    PREC_CLIMBER.climb(
        expression,
        |pair: Pair<Rule>| match pair.as_rule() {
            Rule::int => AstNode::IntLiteral {
                val: parse_literal::<i64>(&pair),
            },
            Rule::float => AstNode::FloatLiteral {
                val: parse_literal::<f64>(&pair),
            },
            Rule::ident => AstNode::Ident {
                name: pair.as_str().trim().into(),
            },
            Rule::term => parse_term(pair.into_inner()),
            _ => {
                println!("Unhandled: {:?}", pair);
                unreachable!()
            }
        },
        |lhs: AstNode, op: Pair<Rule>, rhs: AstNode| match op.as_rule() {
            Rule::op_plus | Rule::op_minus | Rule::op_times | Rule::op_divide => {
                AstNode::BinaryExpr {
                    left: lhs.into(),
                    right: rhs.into(),
                    operator: op.as_str().chars().next().unwrap(),
                }
            }
            _ => unreachable!(format!("{:?}", op.as_rule())),
        },
    )
}

fn ast(x: Pair<Rule>) -> AstNode {
    let z = x.clone();
    let y = match x.as_rule() {
        Rule::expr => eval(x.into_inner()),
        Rule::value => ast(x.into_inner().next().unwrap()),
        Rule::int => AstNode::IntLiteral {
            val: parse_literal::<i64>(&x),
        },
        Rule::float => AstNode::FloatLiteral {
            val: parse_literal::<f64>(&x),
        },
        Rule::ident => AstNode::Ident {
            name: x.as_str().trim().into(),
        },
        Rule::call => parse_func_call(x),
        _ => {
            println!("Unhandled {:#?}", x);
            unreachable!("OO")
        }
    };
    println!("{:?} -> {:?}", z, y);
    y
}

pub fn parse(s: &str) -> Vec<AstNode> {
    let parsed: Vec<Pair<Rule>> = SigurdParser::parse(Rule::expr, &s.trim_end())
        .expect("unsuccessful parse")
        .collect();

    println!("{:#?}", parsed);

    return parsed
        .iter()
        .map(|x| ast(x.clone()))
        .collect::<Vec<AstNode>>();
}
