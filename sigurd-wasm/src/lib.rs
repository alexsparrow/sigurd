use sigurd::interp::interp::execute;
use sigurd::parser::parser::parse_program;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn run(code: &str) -> JsValue {
    let ast_result = parse_program(code);

    match ast_result {
        Ok(ast) => {
            let result = execute(ast, "main", &vec![]);
            return JsValue::from_str(format!("WAT: {:?}", result).as_ref());
        }
        Err(e) => return JsValue::from_str(format!("Parse error:\n{}", e).as_ref()),
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

#[test]
fn it_works() {
    run(r#"
    fn main(args: string) {
        print("Hello")
    }
    "#);
}
