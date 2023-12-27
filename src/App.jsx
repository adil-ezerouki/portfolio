import { useState } from 'react'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <AboutMe />
    </>
  )
}

export default App
