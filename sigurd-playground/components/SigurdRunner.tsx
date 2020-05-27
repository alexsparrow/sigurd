import dynamic from 'next/dynamic';
import { useState } from 'react';
import ReactJson from 'react-json-view';

export default dynamic({
  loader: async () => {
    // Import the wasm module
    const rustModule = await import('../../sigurd-wasm/pkg')
    return (props) => <SigurdRunner rustModule={rustModule} />
  },
  ssr: false
});

const SigurdRunner = ({ rustModule }) => {
  const [code, setCode] = useState(`
fn foo(x: int) {
  if x == 42 {
    "Cool number"
  } else {
    "Uncool number"
  }
}
fn main(args: string) {
  foo(42)
}
`);

  const [output, setOutput] = useState("");
  const [ast, setAst] = useState({});

  return <>
  <textarea cols={80} rows={15} value={code} onChange={v => setCode(v.currentTarget.value)} />
  <pre>{output}</pre>
  <button onClick={e => {
    setAst(rustModule.parse(code))
    setOutput(rustModule.run(code))
  }}>Go</button>
  <ReactJson src={ast} />
  </>
}

