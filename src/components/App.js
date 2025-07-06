import React, { useState, useEffect } from "react";
import { marked } from "marked";

function App() {
  const [markdown, setMarkdown] = useState(`# Hello Markdown!

Start typing your *Markdown* here.`);

  const [html, setHtml] = useState("");

  useEffect(() => {
    setHtml(marked.parse(markdown));
  }, [markdown]);

  return (
    <div className="app" style={{ display: "flex", height: "100vh" }}>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{
          flex: 1,
          padding: "1rem",
          fontFamily: "monospace",
          fontSize: "16px",
          borderRight: "1px solid #ddd",
          resize: "none",
        }}
        aria-label="Markdown input area"
      />
      <div
        className="preview"
        style={{
          flex: 1,
          padding: "1rem",
          overflowY: "auto",
          backgroundColor: "#f9f9f9",
        }}
        dangerouslySetInnerHTML={{ __html: html }}
        aria-label="Markdown preview area"
      />
    </div>
  );
}

export default App;
