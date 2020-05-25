# Sigurd
See [Sigurd](https://en.wikipedia.org/wiki/Sigurd).

An experimental programming language written in Rust. The goal is to learn
about compilers as much as building anything useful.


WIP syntax example:

```
fn foo(x: int) -> {
  let y = x + 1

  if (y == 42) {
    print("Good choice")
  }

  y;
}

fn main(args: string[]) {
  print("foo returns {}", foo(41))
}

```
