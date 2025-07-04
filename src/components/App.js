// <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>


import React from "react";
import ReactDOM from "react-dom";
import MarkdownEditor from "./MarkdownEditor";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <MarkdownEditor />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


