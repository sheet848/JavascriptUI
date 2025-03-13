import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'

const MarkdownEditor = ({ onChange }) => {

    const [content, setContent] = useState("");

    const handleEditorChange = ({ text }) => {
        setContent(text);
        onChange(text);
    }

  return (
    <>
    <div className="container w-full">
        <MDEditor value={content} onChange={handleEditorChange}/>      
    </div>
    </>
  )
}

export default MarkdownEditor