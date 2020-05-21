use ast::parse;

extern crate pest;
#[macro_use]
extern crate pest_derive;

#[macro_use]
extern crate lazy_static;

pub mod ast;

const program: &str = r#"
    let x = 1

    fn foo(x: int) -> int {
        println("Hello")
    }
"#;

#[test]
fn does_stuff() {
    let x = parse("x + 1.3 + 2.0 / 5.0");
    assert_eq!(x, vec![]);
}
