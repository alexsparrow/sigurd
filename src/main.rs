use sigurd::interp::value::Value;
use sigurd::{ast, interp::interp::execute};
use std::{convert::TryInto, env, fs};

fn main() {
    let args: Vec<String> = env::args().collect();
    let fname = args.get(1).expect("Supply source file");

    let contents = fs::read_to_string(fname).expect("Something went wrong reading the file");

    let ast = ast::parse_program(&contents);
    match execute(ast, "main", &vec![]) {
        Value::Int { val } => std::process::exit(val.try_into().unwrap()),
        _ => std::process::exit(1),
    }
}
