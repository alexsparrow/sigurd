use sigurd::ast::parse_program;
use sigurd::interp::interp::execute;
use sigurd::interp::value::Value;

#[test]
fn basic_program() {
    const program: &str = r#"fn foo(x: int) {
  let y = x + 1

  if y == 42 {
    println("Hello")
  } else {
    println("Sad times")
  }

  if y == 1 {
    println("But it's ok cause y is 1")
  }

  while y != 42 {
    let y = y + 1
    println("Looping ", y)
  }
  
  y
}

fn main(args: string) {
  let x = 1
  println("foo returns ", foo(0))
  1
}"#;

    let ast = parse_program(program);
    let ret_val = execute(ast);
    assert_eq!(ret_val, Value::Int { val: 1 });
}
