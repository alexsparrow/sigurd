fn foo(x: int) {
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
}

