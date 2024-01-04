import { useState } from 'react'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import './App.css'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Home />
      <AboutMe />
      <Services />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
