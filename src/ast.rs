use pest::Parser;

use pest::{
    iterators::{Pair, Pairs},
    prec_climber::{Assoc, Operator, PrecClimber},
};
use std::{fmt::Debug, str::FromStr};

#[derive(Parser)]
#[grammar = "sigurd.pest"]
pub struct SigardParser;

lazy_static! {
    static ref PREC_CLIMBER: PrecClimber<Rule> = {
        use Assoc::*;
        use Rule::*;

        PrecClimber::new(vec![
            Operator::new(add, Assoc::Left) | Operator::new(subtract, Left),
            Operator::new(multiply, Left) | Operator::new(divide, Left),
            Operator::new(power, Right),
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
    BinaryExpr {
        left: Box<AstNode>,
        right: Box<AstNode>,
        operator: char,
    },
}

fn ast(x: Pair<Rule>) -> Option<AstNode> {
    match x.as_rule() {
        Rule::operator_expr => Some(eval(x.into_inner())),
        _ => {
            println!("Unhandled {:?}", x);
            None
        }
    }
}

pub fn parse(s: &str) -> Vec<Option<AstNode>> {
    let parsed: Vec<Pair<Rule>> = SigardParser::parse(Rule::expr, &s.trim_end())
        .expect("unsuccessful parse")
        .collect();

    println!("{:?}", parsed);

    return parsed
        .into_iter()
        .map(|x| ast(x))
        .collect::<Vec<Option<AstNode>>>();
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
            _ => {
                println!("Unhandled: {:?}", pair);
                unreachable!()
            }
        },
        |lhs: AstNode, op: Pair<Rule>, rhs: AstNode| match op.as_rule() {
            Rule::add | Rule::subtract | Rule::multiply | Rule::divide | Rule::power => {
                AstNode::BinaryExpr {
                    left: lhs.into(),
                    right: rhs.into(),
                    operator: op.as_str().chars().next().unwrap(),
                }
            }
            _ => unreachable!(),
        },
    )
}
