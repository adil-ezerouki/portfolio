import React, { useEffect, useRef } from 'react'
import img from '../../assets/adil1.png'
import Typed from 'react-typed'
import aboutMe from '../../data/aboutMe.json'

export default function Hero() {
  const body = document.querySelector('body')

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  const toBottom = () => {
    window.scrollTo({
      top: body.clientHeight,
      behavior: "smooth"
    });
  }


  useEffect(()=> {
    const upANDdownBtns = document.querySelectorAll(' .directionBtn ')
    window.addEventListener('scroll',()=> {
      let scrollPosition = document.documentElement.scrollTop;
      let bodyHeight = body.scrollHeight - 200;

      scrollPosition <= 200  ? upANDdownBtns[0].className = 'hidden' : upANDdownBtns[0].className = 'directionBtn w-14 h-14 bg-[#177771] rounded-full flex justify-center items-center text-white fixed lg:right-4 right-3 bottom-6 cursor-pointer active:scale-110 transition-all';
      scrollPosition >= (body.clientHeight - 200) ? upANDdownBtns[1].className = 'hidden' : upANDdownBtns[1].className = 'directionBtn w-14 h-14 bg-[#177771] rounded-full flex justify-center items-center text-white fixed lg:left-4 left-3 bottom-6 cursor-pointer active:scale-110 transition-all'
      scrollPosition >= 6325 ? console.log('MZYAN') : console.log([bodyHeight,scrollPosition])

    })
  })

  useEffect(() => {
    const upANDdownBtns = document.querySelectorAll(' .directionBtn ')

    window.addEventListener('scroll', () => {
      upANDdownBtns.forEach(btn => {
        btn.style.display = 'none';
      })
    })

    let scrollingTimer;

    function handleScroll() {
      
      clearTimeout(scrollingTimer);

      
      scrollingTimer = setTimeout(function () {
        upANDdownBtns.forEach(btn => {
          btn.style.display = 'flex';
        })
      }, 200);
    }

    
    window.addEventListener("scroll", handleScroll);


  })


  return (
    <div id='heroSection' className='transition-all duration-500 ease-in lg:mt-0 mt-[67px] lg:p-20'>
      <div className='flex lg:flex-row flex-col-reverse justify-between items-center'>
        <div id='leftPart' className=' lg:w-[50%] lg:text-left text-center flex flex-col gap-7 lg:items-start items-center'>
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
          <p className='lg:text-2xl text-xl w-[350px]'>{aboutMe[0].slogan}</p>
          <div id='btns' className='flex lg:flex-row flex-col gap-4'>
            <button className='bg-[#177771] text-white px-6 py-3 rounded-full hover:scale-[1.1]  duration-500 ease-in-out' type='button'>DOWNLOAD CV</button>
            <button className='border border-[#FF7F40] text-[#FF7F40] hover:bg-[#FF7F40] hover:text-[#fff]  px-6 py-3 rounded-full hover:scale-[1.1] transition-all duration-500 ease-in-out' type='button'>VIEW PORTFOLIO</button>
          </div>
        </div>
        <div id='rightPart' className=''>
          <img src={img} alt="adil picture" className='' />
        </div>
      </div>
      <div onClick={toTop} className='directionBtn w-14 h-14 bg-[#177771] rounded-full flex justify-center items-center text-white fixed lg:right-4 right-3 bottom-6 cursor-pointer active:scale-110 transition-all'>
        <i className="fa-solid fa-arrow-up text-2xl"></i>
      </div>
      <div onClick={toBottom} className=' directionBtn w-14 h-14 bg-[#177771] rounded-full flex justify-center items-center text-white fixed lg:left-4 left-3 bottom-6 cursor-pointer active:scale-110 transition-all'>
        <i className="fa-solid fa-arrow-down text-2xl"></i>
      </div>
    </div>
  )
}
