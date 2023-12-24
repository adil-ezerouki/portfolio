import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import navLinks from '../data/navLinks.json'

export default function Header() {
  const [isOpen, setOpen] = useState(false)
  
  return (
    <header className='w-full h-20 flex justify-between items-center shadow-md '>
      <div id='logo' className='md:pl-10 pl-5'>
        <h1>LOGO</h1>
      </div>
      <nav className={`md:shadow-none shadow-md md:pr-10 flex justify-center items-center p-6 md:bg-white bg-gray-200 md:static absolute md:w-auto md:z-auto z-[1] w-full  transition-all duration-500 ease-in top-[83px] ${isOpen ? 'left-0 ' : 'md:left-0 left-[-790px]'}`}>
        <ul className='flex md:flex-row flex-col justify-center items-center gap-10'>
          {
            navLinks.map((navlink) => (
              <li key={navlink.name}><a href='#'>{navlink.name}</a></li>
            ))
          }
          <li><a className='border border-[#177771] text-[#177771] px-4 py-2 rounded-full' href="#">contact</a></li>
        </ul>
      </nav>

      <div className='md:hidden block pr-3'>
        <Hamburger onToggle={() => {
          setOpen(!isOpen)
        }} />
      </div>
    </header>
  )
}


// ${isOpen ? 'top-20 ':'top-[-490px]'}