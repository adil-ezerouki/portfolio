import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

export default function Header() {
  const [isOpen, setOpen] = useState(false)
  return (
    <header className='bg-black w-full h-20 text-white flex justify-between items-center'>
      <div id='logo' className='md:pl-10 pl-5'>
        <h1>LOGO</h1>
      </div>
      <nav className={`md:pr-10 flex justify-center items-center p-6 bg-yellow-400 md:static absolute md:w-auto md:z-auto z-[1] w-full  transition-all duration-500 ease-in top-20 ${isOpen ? 'left-0 ':'md:left-0 left-[-790px]'}`}>
        <ul className='flex md:flex-row flex-col justify-center items-center gap-10'>
          <li><a href="">Home</a></li>
          <li><a href="">About me</a></li>
          <li><a href="">services</a></li>
          <li><a href="">portfolio</a></li>
          <li><a href="">contact</a></li>
        </ul>
      </nav>

      <div className='md:hidden block pr-3'>
        <Hamburger onToggle={toggled => {
          setOpen(!isOpen)
        }} />
      </div>
    </header>
  )
}


// ${isOpen ? 'top-20 ':'top-[-490px]'}