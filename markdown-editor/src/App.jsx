import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MarkdownEditor from './components/MarkdownEditor'
import PreviewPane from './components/PreviewPane'

function App() {

  const [markdownContent, setMarkdownContent] = useState("**Hello There**");

  return (
    <>
      <Header />
      <MarkdownEditor onChange={setMarkdownContent} />
      <PreviewPane content={markdownContent} />
    </>
  )
}

export default App
