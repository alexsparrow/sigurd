use wasm_bindgen::prelude::*;
use sigurd::ast::parse_program;
use sigurd::interp::interp::execute;

// Export a `greet` function from Rust to JavaScript, that alerts a
// hello message.
#[wasm_bindgen]
pub fn run(code: &str) -> JsValue {
    let ast = parse_program(code);
    let result = execute(ast, "main", &vec![]);

    return JsValue::from_str(format!("{:?}", result).as_ref());
}


#[test]
fn it_works() {
    run(r#"
    fn main(args: string) {
        print("Hello")
    }
    "#);
}
