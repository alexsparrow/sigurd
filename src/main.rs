use sigard::{ast, interp::execute};
use std::{env, fs};

fn main() {
    let args: Vec<String> = env::args().collect();
    let fname = args.get(1).expect("Supply source file");

    let contents = fs::read_to_string(fname).expect("Something went wrong reading the file");

    let ast = ast::parse_program(&contents);
    execute(ast);
}
