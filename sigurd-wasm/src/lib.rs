#![feature(set_stdio)]
use sigurd::interp::interp::execute;
use sigurd::parser::parser::parse_program;
use wasm_bindgen::prelude::*;
use std::sync::{Mutex, Arc};

extern crate js_sys;

mod print;


extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;

#[wasm_bindgen]
pub fn run(code: &str, f: &js_sys::Function) -> JsValue {
    let ast_result = parse_program(code);

    let printer = print::JSPrintFn { js_func: Arc::new(Mutex::new(f.clone()))};
    print::set_stdout(printer);

    match ast_result {
        Ok(ast) => {
            let result = execute(ast, "main", &vec![]);
            match result {
                Ok(value) =>  JsValue::from_str(format!("Result: {:?}", value).as_ref()),
                Err(e) => JsValue::from_str(&e.to_string())
            }
        }
        Err(e) => return JsValue::from_str(&e.to_string()),
    }
}

#[wasm_bindgen]
pub fn parse(code: &str) -> JsValue {
    let ast_result = parse_program(code);

    match ast_result {
        Ok(ast) => {
            return JsValue::from_serde(&ast).unwrap();
        }
        Err(e) => return JsValue::from_str(format!("Parse error:\n{}", e).as_ref()),
    }
}

#[wasm_bindgen_test]
fn it_works() {
    run(r#"
    fn main(args: string) {
        print("Hello")
    }
    "#,  &js_sys::Function::new_no_args("{}"));
}
