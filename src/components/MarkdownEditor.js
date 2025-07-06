import React, { useState, useEffect } from 'react';
import marked from 'marked';

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState('');
  const [previewHtml, setPreviewHtml] = useState('<p>Start typing Markdown...</p>');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setPreviewHtml(marked(markdownText || 'Start typing Markdown...'));
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [markdownText]);

  return (
    <div className="editor-container">
      <textarea
        className="textarea" // REQUIRED for Cypress
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
        placeholder="Enter your Markdown here..."
      ></textarea>
      <div className="preview"> {/* REQUIRED for Cypress */}
        {loading ? (
          <div className="loading">Loading...</div> // REQUIRED for Cypress
        ) : (
          <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
