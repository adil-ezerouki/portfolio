import { useState } from 'react'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import './App.css'
import Services from './components/Services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <AboutMe />
      <Services />
    </>
  )
}

export default App
