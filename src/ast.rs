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
            Operator::new(op_equal, Assoc::Left),
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
        operator: String,
    },
    FunctionCall {
        left: Option<Box<AstNode>>,
        name: String,
        args: Vec<AstNode>,
    },
    If {
        condition: Box<AstNode>,
        body: Vec<AstNode>,
    },
    While {
        condition: Box<AstNode>,
        body: Vec<AstNode>,
    },
    LetBinding {
        name: Box<AstNode>,
        expr: Box<AstNode>,
    },
    Function {
        name: String,
        arg_names: Vec<String>,
        body: Vec<AstNode>,
    },
}

fn parse_literal<T: FromStr>(x: &Pair<Rule>) -> T
where
    <T as FromStr>::Err: Debug,
{
    x.as_str()
        .trim()
        .parse::<T>()
        .expect(format!("Can't parse literal: \"{}\"", x.as_str()).as_ref())
}

fn parse_function(x: Pair<Rule>) -> AstNode {
    let pairs = x.into_inner().collect::<Vec<Pair<Rule>>>();

    let def_inner = pairs
        .iter()
        .find(|p| p.as_rule() == Rule::fn_def)
        .unwrap()
        .clone()
        .into_inner()
        .collect::<Vec<Pair<Rule>>>();

    let fn_name = def_inner
        .iter()
        .find(|p| p.as_rule() == Rule::ident)
        .unwrap()
        .as_str()
        .trim();

    let args = def_inner
        .iter()
        .find(|p| p.as_rule() == Rule::arg_list)
        .unwrap()
        .clone();

    let arg_names = args
        .into_inner()
        .map(|p| p.into_inner().next().unwrap().as_str().into())
        .collect::<Vec<String>>();

    let body = pairs
        .iter()
        .find(|p| p.as_rule() == Rule::fn_body)
        .unwrap()
        .clone();

    return AstNode::Function {
        name: fn_name.to_string(),
        arg_names,
        body: body.into_inner().map(|p| ast(p)).collect(),
    };
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

fn parse_let_binding(x: Pair<Rule>) -> AstNode {
    let inner = x.into_inner().collect::<Vec<Pair<Rule>>>();
    let ident = ast(inner
        .iter()
        .find(|p| p.as_rule() == Rule::ident)
        .unwrap()
        .clone());
    let expr = ast(inner
        .iter()
        .find(|p| p.as_rule() == Rule::expr)
        .unwrap()
        .clone());

    return AstNode::LetBinding {
        name: ident.into(),
        expr: Box::new(expr),
    };
}

fn parse_body(x: Pair<Rule>) -> Vec<AstNode> {
    return x.into_inner().map(|p| ast(p)).collect::<Vec<AstNode>>();
}

fn parse_if_statement(x: Pair<Rule>) -> AstNode {
    let inner = x.clone().into_inner().collect::<Vec<Pair<Rule>>>();
    let expr = ast(inner
        .iter()
        .find(|p| p.as_rule() == Rule::expr)
        .unwrap()
        .clone());

    let body = inner.iter().find(|p| p.as_rule() == Rule::fn_body).unwrap();

    return AstNode::If {
        condition: Box::new(expr),
        body: parse_body(body.clone()),
    };
}

fn parse_while_statement(x: Pair<Rule>) -> AstNode {
    let inner = x.clone().into_inner().collect::<Vec<Pair<Rule>>>();
    let expr = ast(inner
        .iter()
        .find(|p| p.as_rule() == Rule::expr)
        .unwrap()
        .clone());

    let body = inner.iter().find(|p| p.as_rule() == Rule::fn_body).unwrap();

    return AstNode::While {
        condition: Box::new(expr),
        body: parse_body(body.clone()),
    };
}

fn eval(expression: Pairs<Rule>) -> AstNode {
    PREC_CLIMBER.climb(
        expression,
        |pair: Pair<Rule>| ast(pair),
        |lhs: AstNode, op: Pair<Rule>, rhs: AstNode| match op.as_rule() {
            Rule::op_plus | Rule::op_minus | Rule::op_times | Rule::op_divide | Rule::op_equal => {
                AstNode::BinaryExpr {
                    left: lhs.into(),
                    right: rhs.into(),
                    operator: op.as_str().into(),
                }
            }
            _ => unreachable!(format!("{:?}", op.as_rule())),
        },
    )
}

fn parse_value(x: Pair<Rule>) -> AstNode {
    let inner = x.into_inner().collect::<Vec<Pair<Rule>>>();

    match inner.first().unwrap().as_rule() {
        Rule::paren_open => ast(inner.get(1).unwrap().clone()),
        _ => ast(inner.first().unwrap().clone()),
    }
}

fn ast(x: Pair<Rule>) -> AstNode {
    let z = x.clone();
    let y = match x.as_rule() {
        Rule::expr => eval(x.into_inner()),
        Rule::value => parse_value(x),
        Rule::int => AstNode::IntLiteral {
            val: parse_literal::<i64>(&x),
        },
        Rule::float => AstNode::FloatLiteral {
            val: parse_literal::<f64>(&x),
        },
        Rule::bool => AstNode::BoolLiteral {
            val: parse_literal::<bool>(&x),
        },
        Rule::ident => AstNode::Ident {
            name: x.as_str().trim().into(),
        },

        Rule::term => parse_term(x.into_inner()),
        Rule::string => AstNode::StringLiteral {
            val: x.as_str().trim().trim_matches('"').into(),
        },
        Rule::call => parse_func_call(x),
        Rule::let_binding => parse_let_binding(x),
        Rule::if_statement => parse_if_statement(x),
        Rule::while_statement => parse_while_statement(x),
        Rule::function => parse_function(x),
        _ => {
            panic!(format!("Unhandled {:#?}", x));
        }
    };
    y
}

pub fn parse(s: &str, rule: Rule) -> Vec<AstNode> {
    let parsed: Vec<Pair<Rule>> = SigurdParser::parse(rule, &s.trim_end())
        .expect("unsuccessful parse")
        .collect();

    // println!("{:#?}", parsed);

    return parsed
        .iter()
        .map(|x| ast(x.clone()))
        .collect::<Vec<AstNode>>();
}

pub fn parse_program(s: &str) -> std::vec::Vec<AstNode> {
    return parse(s, Rule::program);
}

pub fn parse_expr(s: &str) -> std::vec::Vec<AstNode> {
    return parse(s, Rule::expr);
}
