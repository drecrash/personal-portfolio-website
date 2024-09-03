import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import ReactDOM from 'react-dom';

interface Props {
  filePath: string;
}

const MarkdownViewer: React.FC<Props> = ({ filePath }) => {
    const [text, setText] = useState('')
    useEffect(()=>{
    const firstPath = require(filePath);
    
      fetch(firstPath)
        .then(response => {
          return response.text()
        })
        .then(text => setText(text))
    },[])

    

  return (
    <div className="">
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;