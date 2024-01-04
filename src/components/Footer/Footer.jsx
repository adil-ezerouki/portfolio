import React from 'react'
import aboutMe from '../../data/aboutMe.json'


export default function Footer() {
  const currentYear = (new Date).getFullYear();
  return (
    <footer className='shadow-lg text-center py-4 flex flex-col gap-10'>
      <div id='contactMe' className='flex justify-center items-center flex-col gap-4'>
        <h2 className='text-4xl text-center'> Contact Me </h2>
        <p className='text-xl lg:w-[60%] text-center'>Let's Talk and bring Your ideas to the digital world</p>
        <div className='lg:flex gap-28 justify-center block w-full'>

          <div className=' items-center lg:flex hidden flex-col gap-6'>

            <div className='flex justify-start items-center gap-16  w-full'>
              <div className='flex items-center'>
                <a target='blank' className='flex justify-center items-center bg-[#177771] text-4xl text-white w-20 h-20 rounded-full hover:scale-125 duration-150' href={`mailto:${aboutMe[0].email}`}><i className="fa-regular fa-envelope"></i></a>
                <div className='bg-slate-300 w-20 h-[2px]'></div>
              </div>
              <div className='flex items-start flex-col w-1/2'>
                <h1 className='font-medium text-2xl'>Email Adresss</h1>
                <p className='text-gray-600'>adil.ezerouki@gmail.com</p>
              </div>
            </div>

            <div className='flex justify-start items-center gap-16 w-full'>
              <div className='flex justify-center items-center'>
                <a target='blank' className='flex justify-center items-center bg-[#177771] text-4xl text-white w-20 h-20 rounded-full hover:scale-125 duration-150' href={`mailto:${aboutMe[0].email}`}><i className="fa-brands fa-whatsapp"></i></a>
                <div className='bg-slate-300 w-20 h-[2px]'></div>
              </div>
              <div className='flex items-start flex-col w-1/2'>
                <h1 className='font-medium text-2xl'>Phone Number</h1>
                <p className='text-gray-600'>+212 6 33 29 96 24</p>
              </div>
            </div>

            <div className='flex justify-center items-center gap-16 w-full'>
              <div className='flex justify-center items-center'>
                <a target='blank' className='flex justify-center items-center bg-[#177771] text-4xl text-white w-20 h-20 rounded-full hover:scale-125 duration-150' href={`mailto:${aboutMe[0].email}`}><i className="fa-brands fa-linkedin"></i></a>
                <div className='bg-slate-300 w-20 h-[2px]'></div>
              </div>
              <div className='flex items-start flex-col w-1/2'>
                <h1 className='font-medium text-2xl'>LinkedIn Account</h1>
                <p className='text-gray-600'>Adil Ezerouki</p>
              </div>
            </div>


            <div className='flex justify-center items-center gap-16 w-full'>
              <div className='flex justify-center items-center'>
                <a target='blank' className='flex justify-center items-center bg-[#177771] text-4xl text-white w-20 h-20 rounded-full hover:scale-125 duration-150' href={`mailto:${aboutMe[0].email}`}><i className="fa-brands fa-github"></i></a>
                <div className='bg-slate-300 w-20 h-[2px]'></div>
              </div>
              <div className='flex items-start flex-col w-1/2'>
                <h1 className='font-medium text-2xl'>Github Account</h1>
                <p className='text-gray-600'>adil-ezerouki</p>
              </div>
            </div>

          </div>

          <form action="" className=' flex gap-4 flex-col justify-center items-center'>
            <div className='flex justify-center gap-4 lg:flex-row flex-col w-full'>
              <input className='p-3 rounded-md border border-[#FF7F40]' type="text" name="" placeholder='your first name' />
              <input className='p-3 rounded-md border border-[#FF7F40]' type="text" name="" placeholder='your last name' />
            </div>
            <input className='p-3 rounded-md w-full border border-[#FF7F40]' type="email" name="email" placeholder='your email address' />

            <textarea className='p-3 rounded-md w-full text-black border border-[#FF7F40] h-44' name="" id="" placeholder='your message'>

            </textarea>


            <button type='submit' className=' w-24 border bg-[#177771] text-white border-none hover: hover:text-[#fff] hover:transition-all px-6 py-3 rounded-full'>Submit</button>


          </form>

        </div>
      </div>
      <div>
        copyright <i className="fa-solid fa-copyright"></i> {currentYear}, created with passion and love <i className="fa-solid fa-heart"></i> by Adil Ezerouki
      </div>
    </footer>
  )
}
