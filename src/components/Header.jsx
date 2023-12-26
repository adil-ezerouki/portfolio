import React, { useEffect, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import navLinks from '../data/navLinks.json'
import logo from '../assets/logo.png'
import darkMode from '../assets/dark-mode.png'
import lightMode from '../assets/light-mode.png'
// import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Header() {
  
  const [isOpen, setOpen] = useState(false)
  const [isDarkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === "true");
  const body = document.querySelector('body')

  if(!(localStorage.getItem('darkMode'))) {
    localStorage.setItem('darkMode',isDarkMode);
  } 
  

  useEffect(() => {
    localStorage.setItem('darkMode',isDarkMode);
    if((localStorage.getItem('darkMode')) == "true") {
      body.style.backgroundColor = '#243439';
      body.style.color = 'white';
    } else {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
    }
  }, [isDarkMode])





  return (
    <header className='w-full h-20 flex justify-between items-center shadow-lg '>
      <div id='logo' className='lg:pl-10 pl-5'>
        <img src={logo} alt="website logo" className='lg:w-32 w-24' />
      </div>
      <nav className={`lg:shadow-none shadow-lg lg:pr-10 flex justify-center items-center p-6 lg:bg-transparent ${isDarkMode ? "bg-gray-600" : 'bg-gray-200' }  lg:static absolute lg:w-auto lg:z-auto z-[1] w-full  transition-all duration-500 ease-in top-[83px] ${isOpen ? 'left-0 ' : 'lg:left-0 left-[-790px]'}`}>
        <ul className='flex lg:flex-row flex-col justify-center items-center gap-10'>
          {
            navLinks.map((navlink) => (
              <li key={navlink.name}><a href='#'>{navlink.name}</a></li>
            ))
          }
          <li><a className='border border-[#FF7F40] text-[#FF7F40] hover:bg-[#FF7F40] hover:text-[#fff] hover:transition-all px-4 py-2 rounded-full' href="#">contact</a></li>
          <div className='lg:block hidden' id='darkMode'>
            <img onClick={() => setDarkMode(!isDarkMode)} className='w-10 cursor-pointer active:scale-[2] transition-all duration-500 ease-in' src={!isDarkMode ? lightMode : darkMode} alt="dark_light_mode" />
          </div>
        </ul>
      </nav>

      <div className='lg:hidden block' id='darkMode'>
            <img onClick={() => setDarkMode(!isDarkMode)} className='w-10 cursor-pointer active:scale-[2] transition-all duration-500 ease-in' src={!isDarkMode  ? lightMode : darkMode} alt="dark_light_mode" />
          </div>

      <div className='lg:hidden block pr-3'>
        <Hamburger onToggle={() => {
          setOpen(!isOpen)
        }} />
      </div>
    </header>
  )
}
