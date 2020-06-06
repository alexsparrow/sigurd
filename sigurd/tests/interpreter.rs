use sigurd::interp::interp::execute;
use sigurd::interp::value::Value;
use sigurd::parser::parser::parse_program;

#[test]
fn basic_program() {
    let program: &str = r#"fn foo(x: int) {
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

    let ast = parse_program(program).unwrap();
    let ret_val = execute(ast, "main", &vec![]).unwrap();
    assert_eq!(ret_val, Value::Int { val: 1 });
}

#[test]
fn fibonacci() {
    let program = r#"

fn fib(n: int) -> int {

    if n <= 1 {
        n
    } else {
        fib(n - 1) + fib(n-2)
    }
}
    "#;

    let ast = parse_program(program).unwrap();
    let fib10 = execute(ast, "fib", &vec![Value::Int { val: 10 }]).unwrap();
    assert_eq!(fib10, Value::Int { val: 55 })
}

#[test]
fn assignment() {
    let program = r#"
    fn foo() {
      let x = 1
      x = x + 1
    }
  "#;

    let ast = parse_program(program).unwrap();
    let val = execute(ast, "foo", &vec![]).unwrap();

    assert_eq!(val, Value::Int { val: 2 })
}
