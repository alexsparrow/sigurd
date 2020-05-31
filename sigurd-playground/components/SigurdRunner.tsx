import dynamic from "next/dynamic";
import { useState } from "react";
import ReactJson from "react-json-view";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/theme-github";

export default dynamic({
  loader: async () => {
    // Import the wasm module
    const rustModule = await import("../../sigurd-wasm/pkg");
    return (props) => <SigurdRunner rustModule={rustModule} />;
  },
  ssr: false,
});

const INITIAL_CODE = `
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
`;

const SigurdRunner = ({ rustModule }) => {
  const [code, setCode] = useState(INITIAL_CODE);
  const [output, setOutput] = useState("");
  const [ast, setAst] = useState({});

  return (
    <div style={{ width: "80vw", display: "flex", height: "80vh", maxHeight: "80vh" }}>
      <div style={{ flex: 1 }}>
        <AceEditor
          mode="rust"
          theme="github"
          onChange={setCode}
          value={code}
          fontSize={18}
          name="example"
          style={{ height: "100%", width: "100%" }}
          editorProps={{ $blockScrolling: true }}
        />
      </div>

      <div style={{ flex: 1, overflow: "auto" }}>
        <pre>{output}</pre>
        <button
          onClick={(e) => {
            setAst(rustModule.parse(code));
            setOutput(rustModule.run(code));
          }}
        >
          Go
        </button>
        <ReactJson src={ast} />
      </div>
    </div>
  );
};
