import React, { useState, useEffect } from "react";
import marked from "marked";

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("<p class='loading'>Loading...</p>");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreview(marked(markdown));
    }, 100); // debounce for smoother typing
    return () => clearTimeout(timeout);
  }, [markdown]);

  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type Markdown here..."
      ></textarea>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: preview }}
      ></div>
    </>
  );
}
