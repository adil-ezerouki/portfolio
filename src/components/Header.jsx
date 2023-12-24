import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import navLinks from '../data/navLinks.json'

export default function Header() {
  const [isOpen, setOpen] = useState(false)
  
  return (
    <header className='w-full h-20 flex justify-between items-center shadow-lg '>
      <div id='logo' className='lg:pl-10 pl-5'>
        <h1>LOGO</h1>
      </div>
      <nav className={`lg:shadow-none shadow-lg lg:pr-10 flex justify-center items-center p-6 lg:bg-white bg-gray-200 lg:static absolute lg:w-auto lg:z-auto z-[1] w-full  transition-all duration-500 ease-in top-[83px] ${isOpen ? 'left-0 ' : 'lg:left-0 left-[-790px]'}`}>
        <ul className='flex lg:flex-row flex-col justify-center items-center gap-10'>
          {
            navLinks.map((navlink) => (
              <li key={navlink.name}><a href='#'>{navlink.name}</a></li>
            ))
          }
          <li><a className='border border-[#177771] text-[#177771] px-4 py-2 rounded-full' href="#">contact</a></li>
        </ul>
      </nav>

      <div className='lg:hidden block pr-3'>
        <Hamburger onToggle={() => {
          setOpen(!isOpen)
        }} />
      </div>
    </header>
  )
}
