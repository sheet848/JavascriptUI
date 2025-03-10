import './App.css'
import Features from './components/Features'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/features' element={<Features />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
