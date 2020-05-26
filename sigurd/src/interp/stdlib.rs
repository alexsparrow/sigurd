use crate::interp::value::Value;
use std::collections::HashMap;

type StdLibFunc = fn(&Vec<Value>) -> Value;

fn _print(args: &Vec<Value>) -> Value {
    args.iter().for_each(|a| match a {
        Value::Int { val } => print!("{}", val),
        Value::String { val } => print!("{}", val),
        _ => unimplemented!(),
    });
    return Value::Null;
}

fn _println(args: &Vec<Value>) -> Value {
    _print(args);
    print!("\n");
    Value::Null
}

lazy_static! {
    pub static ref STDLIB: HashMap<&'static str, StdLibFunc> = {
        let mut map: HashMap<&'static str, StdLibFunc> = HashMap::new();
        map.insert("print", _print);
        map.insert("println", _println);
        map
    };
}

pub fn register_stdlib(globals: &mut HashMap<String, Value>) {
    STDLIB.iter().for_each(|(name, _func)| {
        globals.insert(name.clone().into(), Value::StdLibStub { func: name });
    });
}
