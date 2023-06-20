import { useState } from 'react'
import Home from './pages/Home';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
