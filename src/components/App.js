// <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>


import React from 'react';
import MarkdownEditor from './MarkdownEditor';
import './styles.css';

function App() {
  return (
    <div className="app">
      <MarkdownEditor />
    </div>
  );
}

export default App;
