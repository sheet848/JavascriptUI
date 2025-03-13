import React from 'react'
import MDEditor from '@uiw/react-md-editor'

const PreviewPane = ({ content }) => {
  return (
    <>
    <div className="preview-container w-full">
        <MDEditor.Markdown source={content} />
    </div>
    </>
  )
}

export default PreviewPane