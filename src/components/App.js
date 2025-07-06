import React, { useState } from "react";
import { marked } from "marked";

export default function App() {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!");

  // Convert markdown to HTML using marked
  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true });
    return { __html: rawMarkup };
  };

  // Inline styles as JS objects
  const styles = {
    container: {
      display: "flex",
      gap: "10px",
      padding: "10px",
      height: "350px",
      fontFamily: "Arial, sans-serif",
    },
    textarea: {
      flex: 1,
      padding: "10px",
      fontSize: "16px",
      resize: "none",
      borderRadius: "4px",
      border: "1px solid #ccc",
      height: "100%",
      boxSizing: "border-box",
    },
    preview: {
      flex: 1,
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      height: "100%",
      overflowY: "auto",
      backgroundColor: "#f9f9f9",
    },
  };

  return (
    <div style={styles.container} className="app">
      <textarea
        style={styles.textarea}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter markdown here"
      />
      <div
        style={styles.preview}
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
}
