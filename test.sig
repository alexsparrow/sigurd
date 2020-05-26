fn foo(x: int) {
  let y = x + 1

  if y == 42 {
    println("Hello")
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
}

