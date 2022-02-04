import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    // 今はFragment使わずに空タグでもよくなった
    // <React.Fragment></React.Fragment>
    <>
      <h1>こんにちわ！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
