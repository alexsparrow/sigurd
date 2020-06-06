use std::{io, sync::{Mutex, Arc}};
use wasm_bindgen::JsValue;

// type PrintFn = fn(&str) -> io::Result<()>;

pub trait PrintFn: Sized {
    fn print(&self, s: &str) -> io::Result<()>;
}

pub struct JSPrintFn {
    pub js_func: Arc<Mutex<js_sys::Function>>
}

unsafe impl Send for JSPrintFn {

}

impl PrintFn for JSPrintFn {
    fn print(&self, buf: &str) -> io::Result<()> {

        self.js_func.lock().unwrap().call1(&JsValue::NULL, &JsValue::from_str(buf)).unwrap();

    Ok(())
    }

}


pub struct Printer<T:PrintFn> {
    printfn: T,
    buffer: String,
    is_buffered: bool,
}

impl <T:PrintFn> Printer<T> {
    pub fn new(printfn: T, is_buffered: bool) -> Printer<T> {
        Printer {
            buffer: String::new(),
            printfn,
            is_buffered,
        }
    }
}

impl <T:PrintFn> io::Write for Printer<T> {
    fn write(&mut self, buf: &[u8]) -> io::Result<usize> {
        self.buffer.push_str(&String::from_utf8_lossy(buf));

        if !self.is_buffered {
            self.printfn.print(&self.buffer)?;
            self.buffer.clear();

            return Ok(buf.len());
        }

        if let Some(i) = self.buffer.rfind('\n') {
            let buffered = {
                let (first, last) = self.buffer.split_at(i);
                self.printfn.print(first)?;

                String::from(&last[1..])
            };

            self.buffer.clear();
            self.buffer.push_str(&buffered);
        }

        Ok(buf.len())
    }

    fn flush(&mut self) -> io::Result<()> {
        self.printfn.print(&self.buffer)?;
        self.buffer.clear();

        Ok(())
    }
}


/// Sets a line-buffered stdout, uses your JavaScript `print` function
pub fn set_stdout<T:'static + PrintFn + Send >(printfn: T) {
    let printer = Printer::new(printfn, false);
    io::set_print(Some(Box::new(printer)));
}
