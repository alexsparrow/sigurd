fn foo(x: int) {
  let y = x + 1

  if y == 42 {
    println("Hello")
  }
  
  y
}

fn main(args: string) {
  let x = 1
  println("foo returns ", foo(41))
}

