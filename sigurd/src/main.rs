use sigurd::interp::value::Value;
use sigurd::{parser::parser::parse_program, interp::interp::execute};
use std::{convert::TryInto, env, fs};

fn main() {
    let args: Vec<String> = env::args().collect();
    let fname = args.get(1).expect("Supply source file");

    let contents = fs::read_to_string(fname).expect("Something went wrong reading the file");

    let ast_result = parse_program(&contents);

    match ast_result {
        Ok(ast) => match execute(ast, "main", &vec![]) {
            Ok(Value::Int { val }) => std::process::exit(val.try_into().unwrap()),
            Ok(_) => std::process::exit(1),
            Err(e) => eprintln!("Interpreter error\n{:?}", e)
        },
        Err(e) => 
            eprintln!("Parsing error\n{}", e)
        }
    }
