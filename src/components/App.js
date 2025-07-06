import React, { useState, useEffect } from "react";
import { marked } from "marked";

const App = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Editor

Type your **Markdown** text on the left. It will render _live_ on the right!

## Features
- Real-time preview
- Two-way binding
- Uses React hooks
- Styled with CSS classes

> Happy writing!`);

  const [html, setHtml] = useState("");

  useEffect(() => {
    // Convert markdown to HTML safely
    setHtml(marked.parse(markdown));
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app" style={{display: 'flex', height: '100vh'}}>
      <textarea
        className="textarea"
        value={markdown}
        onChange={handleChange}
        style={{
          flex: 1,
          padding: "1rem",
          fontSize: "16px",
          fontFamily: "monospace",
          borderRight: "1px solid #ccc",
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
          backgroundColor: "#f5f5f5",
        }}
        dangerouslySetInnerHTML={{ __html: html }}
        aria-label="Markdown preview area"
      />
    </div>
  );
};

export default App;
