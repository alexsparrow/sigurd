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
  const [visibleTab, setVisibleTab] = useState("code");
  const [code, setCode] = useState(INITIAL_CODE);
  const [output, setOutput] = useState("");
  const [ast, setAst] = useState({});

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
      <div className="level is-mobile" style={{ flexGrow: 0, marginBottom: "5px" }}>
        <div className="level-left tabs">
          <ul>
            <li className={visibleTab == "code" ? "is-active" : ""}>
              <a onClick={() => setVisibleTab("code")}>Code</a>
            </li>
            <li className={visibleTab == "ast" ? "is-active" : ""}>
              <a onClick={() => setVisibleTab("ast")}>AST</a>
            </li>
          </ul>
        </div>
        <div className="level-right">
          <button
            className="button is-primary is-small"
            onClick={(e) => {
              setAst(rustModule.parse(code));
              setOutput(rustModule.run(code));
            }}
          >
            Run
          </button>
        </div>
      </div>
      <div style={{ flex: 1, maxHeight: "calc(100% - 41px)"}}>
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
            <div><pre>
              {output}
              </pre></div>
          </>
        ) : (
          <>
            <ReactJson
              style={{
                width: "100%",
                height: "100%",
                overflow: "scroll",
                maxHeight: "100%",
              }}
              src={ast}
            />
          </>
        )}
      </div>
    </div>
  );
};
