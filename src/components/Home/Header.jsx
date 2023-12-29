import React, { useEffect, useRef, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import navLinks from '../../data/navLinks.json'
import logo from '../../assets/logo.png'
import darkMode from '../../assets/dark-mode.png'
import lightMode from '../../assets/light-mode.png'
import aboutMe from '../../data/aboutMe.json'

export default function Header() {

  const [isOpen, setOpen] = useState(false)
  const [isDarkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === "true");
  const [visitedSection, isVisitedSection] = useState('Home')
  const body = document.querySelector('body')

  useEffect(() => {
    const ul = document.querySelectorAll("ul li")

    ul[0].className = 'bg-[#FF7F40] text-white py-2 px-3 rounded-md transition-all duration-100 ease-in'

    window.onscroll = function () {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

      for (let i = 0; i < navLinks.length; i++) {
        if (scrollPosition >= (navLinks[i].viewport.from) && scrollPosition <= (navLinks[i].viewport.to)) {
          isVisitedSection(navLinks[i].name)
          ul.forEach((li) => {
            li.className = "hover:bg-[#FF7F40] hover:text-white hover:py-2 hover:px-3 rounded-md transition-all duration-100 ease-in"
          })

          ul[i].className = 'bg-[#FF7F40] text-white py-2 px-3 rounded-md transition-all duration-100 ease-in'
        }
      }


    };
  })




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




  return (
    <>
      <header className={`w-full h-20 flex justify-between items-center shadow-lg lg:px-[40px]  px-3 fixed top-0 ${isDarkMode ? "bg-[#243439]" : 'bg-[#fff]'}`}>
        <div id='logo' className='lg:w-32 w-20'>
          <img src={logo} alt="website logo" className='lg:w-32 w-20' />
        </div>
        <nav className={`lg:shadow-none shadow-lg  flex justify-center items-center lg:h-full h-auto py-10 lg:bg-transparent ${isDarkMode ? "bg-gray-600" : 'bg-gray-200'}  lg:static absolute lg:w-auto w-full  transition-all duration-500 ease-in top-[80px]  ${isOpen ? 'left-0 ' : 'lg:left-0 left-[-1010px]'}`}>
          <ul className='flex lg:flex-row flex-col justify-center items-center gap-10'>
            {
              navLinks.map((navlink) => (
                <li className='hover:bg-[#FF7F40] hover:text-white hover:py-2 hover:px-3 rounded-md transition-all duration-100 ease-in' key={navlink.name}><a href={navlink.link}>{navlink.name}</a></li>
              ))
            }
            <button><a className='border bg-[#177771] text-white border-none hover: hover:text-[#fff] hover:transition-all px-6 py-3 rounded-full' href={aboutMe[0].social_media.whatsapp}>CONTACT ME</a></button>
            <div className='lg:block hidden' id='darkMode'>
              <img onClick={() => setDarkMode(!isDarkMode)} className='w-10 cursor-pointer active:scale-[1.4] hover:scale-[1.2] hover:duration-100 transition-all duration-500 ease-in' src={!isDarkMode ? lightMode : darkMode} alt="dark_light_mode" />

            </div>
          </ul>
        </nav>

        <div className='lg:hidden flex  flex-col justify-center items-center lg:w-32 w-20' id='darkMode'>
          <img onClick={() => setDarkMode(!isDarkMode)} className='w-10 cursor-pointer active:scale-[1.4] hover:scale-[1.2] hover:duration-100 transition-all duration-500 ease-in' src={!isDarkMode ? lightMode : darkMode} alt="dark_light_mode" />

          <div className={`${isOpen ? "hidden" : 'flex'} lg:hidden  justify-center  text-[#177771]  rounded-lg items-center `}>
            {visitedSection}
          </div>

        </div>

        <div className='lg:hidden lg:w-32 w-20 flex justify-end items-center'>
          <Hamburger onToggle={() => {
            setOpen(!isOpen)
          }} />
        </div>
      </header>
    </>
  )
}
