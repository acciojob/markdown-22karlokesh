import React from 'react';
import MarkdownEditor from './MarkdownEditor';
import '../styles.css';  // ✅ up one folder

function App() {
  return (
    <div className="app"> {/* must be EXACTLY this */}
      <MarkdownEditor />
    </div>
  );
}

export default App;
