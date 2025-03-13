import './App.css'
import Header from './components/Header'
import ImageRecognition from './components/ImageRecognition'

function App() {

  return (
    <>
      <div className="App">
      <Header />
      <div className="container mx-auto p-4">
        <div className="bg-gray-200 p-6 rounded-md">
          <h1 className="text-2xl font-bold mb-4">
            Upload an Image for Recognition
          </h1>
          <ImageRecognition />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
