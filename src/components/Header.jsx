import React, { useEffect, useRef, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import navLinks from '../data/navLinks.json'
import logo from '../assets/logo.png'
import darkMode from '../assets/dark-mode.png'
import lightMode from '../assets/light-mode.png'

export default function Header() {

  const [isOpen, setOpen] = useState(false)
  const [isDarkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === "true");
  const body = document.querySelector('body')

  console.log()

  if (!(localStorage.getItem('darkMode'))) {
    localStorage.setItem('darkMode', isDarkMode);
  }


  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    if ((localStorage.getItem('darkMode')) == "true") {
      body.style.backgroundColor = '#243439';
      body.style.color = 'white';
    } else {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
    }
  }, [isDarkMode])


  // lg:pl-10 pl-5


  return (
    <header className={`w-full h-20 flex justify-between items-center shadow-lg lg:px-[40px]  px-3 fixed top-0 ${isDarkMode ? "bg-[#243439]" : 'bg-[#fff]'}`}>
      <div id='logo' className=''>
        <img src={logo} alt="website logo" className='lg:w-32 w-20' />
      </div>
      <nav className={`lg:shadow-none shadow-lg  flex justify-center items-center lg:h-full h-[50vh] lg:bg-transparent ${isDarkMode ? "bg-gray-600" : 'bg-gray-200'}  lg:static absolute lg:w-auto lg:z-auto z-[1] w-full  transition-all duration-500 ease-in top-[83px] ${isOpen ? 'left-0 ' : 'lg:left-0 left-[-1010px]'}`}>
        <ul className='flex lg:flex-row flex-col justify-center items-center gap-10'>
          {
            navLinks.map((navlink) => (
              <li className='hover:bg-[#FF7F40] hover:text-white hover:py-2 hover:px-3 rounded-md transition-all duration-100 ease-in' key={navlink.name}><a href='#'>{navlink.name}</a></li>
            ))
          }
          <li><a className='border border-[#FF7F40] text-[#FF7F40] hover:bg-[#FF7F40] hover:text-[#fff] hover:transition-all px-4 py-2 rounded-full' href="#">contact me</a></li>
          <div className='lg:block hidden' id='darkMode'>
            <img onClick={() => setDarkMode(!isDarkMode)} className='w-10 cursor-pointer active:scale-[1.4] hover:scale-[1.2] hover:duration-100 transition-all duration-500 ease-in' src={!isDarkMode ? lightMode : darkMode} alt="dark_light_mode" />
          </div>
        </ul>
      </nav>

      <div className='lg:hidden block' id='darkMode'>
        <img onClick={() => setDarkMode(!isDarkMode)} className='w-10 cursor-pointer active:scale-[1.4] hover:scale-[1.2] hover:duration-100 transition-all duration-500 ease-in' src={!isDarkMode ? lightMode : darkMode} alt="dark_light_mode" />
      </div>

      <div className='lg:hidden block'>
        <Hamburger onToggle={() => {
          setOpen(!isOpen)
        }} />
      </div>
    </header>
  )
}
