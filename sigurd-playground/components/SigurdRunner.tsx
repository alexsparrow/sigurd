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
  println("Hello World")
  foo(42)
}
`;

const SigurdRunner = ({ rustModule }) => {
  const [visibleTab, setVisibleTab] = useState("code");
  const [code, setCode] = useState(INITIAL_CODE);
  const [result, setResult] = useState("");
  const [ast, setAst] = useState({});

  const [output, setOutput] = useState("");

  const print = (s) => {
    setOutput((x) => x + s);
  };

  return (
    <div
      style={{
        width: "100%",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        height: "70vh",
        maxHeight: "70vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="level is-mobile"
        style={{ flexGrow: 0, marginBottom: "5px" }}
      >
        <div className="level-left tabs">
          <ul>
            <li className={visibleTab == "code" ? "is-active" : ""}>
              <a onClick={() => setVisibleTab("code")}>Code</a>
            </li>
            <li className={visibleTab == "ast" ? "is-active" : ""}>
              <a onClick={() => setVisibleTab("ast")}>AST</a>
            </li>
            <li className={visibleTab == "output" ? "is-active" : ""}>
              <a onClick={() => setVisibleTab("output")}>Output</a>
            </li>
          </ul>
        </div>
        <div className="level-right">
          <button
            className="button is-primary is-small"
            onClick={(e) => {
              setOutput("");
              setAst(rustModule.parse(code));
              setResult(rustModule.run(code, print));
            }}
            onMouseDown={(e) => e.preventDefault()}
          >
            Run
          </button>
        </div>
      </div>
      <div style={{ flex: 1, maxHeight: "calc(100% - 41px)" }}>
        {visibleTab == "code" ? (
          <>
            <AceEditor
              mode="rust"
              theme="github"
              onChange={setCode}
              value={code}
              fontSize={18}
              name="example"
              style={{ height: "100%", width: "100%", overflow: "auto" }}
              editorProps={{ $blockScrolling: true }}
            />
            <div>
              <pre>{result}</pre>
            </div>
          </>
        ) : null}

        {visibleTab == "ast" ? (
          <>
            <ReactJson
              style={{
                width: "100%",
                height: "100%",
                overflow: "auto",
                maxHeight: "100%",
              }}
              src={ast}
            />
          </>
        ) : null}

        {visibleTab == "output" ? <pre>{output}</pre> : null}
      </div>
    </div>
  );
};
