import React, { useRef } from 'react'
import img from '../../assets/adil1.png'
import Typed from 'react-typed'
import aboutMe from '../../data/aboutMe.json'

export default function Hero() {
  const typeTarget = useRef(null);


  console.log()

  return (
    <div ref={typeTarget} id='heroSection' className='transition-all duration-500 ease-in lg:mt-24 lg:py-20 mt-[67px]'>
      <div className='flex lg:flex-row flex-col-reverse justify-between items-center'>
        <div id='leftPart' className=' lg:w-[50%] lg:text-left text-center flex flex-col gap-4 lg:items-start items-center'>
          <div className='flex gap-2'>
            <div className='bg-[#177771] w-20 h-3 rounded-lg'></div>
            <div className='bg-[#FF7F40] w-8 h-3 rounded-lg'></div>
          </div>
          <div id='nameANDprofession'>
            <div className='lg:text-5xl text-4xl'>
              I'm <span className='text-[#FF7F40]'>{aboutMe[0].firstName}</span> <span className='text-[#177771]'>{aboutMe[0].lastName}</span>
            </div>


            <h1 className='lg:text-5xl text-4xl' >
              <Typed
                strings={aboutMe[0].profession}

                typeSpeed={100}
                backSpeed={100}
                loop

              />
            </h1>
          </div>
          <p className='lg:text-xl'>{aboutMe[0].description}</p>
          <div id='btns' className='flex lg:flex-row flex-col gap-4'>
            <button className='bg-[#177771] text-white px-6 py-3 rounded-full hover:scale-[1.1]  duration-500 ease-in-out' type='button'>DOWNLOAD CV</button>
            <button className='border border-[#FF7F40] text-[#FF7F40] hover:bg-[#FF7F40] hover:text-[#fff]  px-6 py-3 rounded-full hover:scale-[1.1] transition-all duration-500 ease-in-out' type='button'>VIEW PORTFOLIO</button>
          </div>
        </div>
        <div id='rightPart' className=''>
          <img src={img} alt="adil picture" className='' />
        </div>
      </div>
    </div>
  )
}
