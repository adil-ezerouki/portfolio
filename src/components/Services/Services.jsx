import React from 'react'
import front_end_icon from '../../assets/front-end.png'
import website_design_icon from '../../assets/website-design.png'
import back_end_icon from '../../assets/back-end.png'

export default function Services() {
    return (
        <section id='services' className='flex justify-center items-center flex-col gap-4'>
            <h2 className='text-4xl text-center'> My Awsome Services </h2>
            <p className='text-xl lg:w-[60%] text-center'>Hey there! I'm a web developer who's passionate about creating user-friendly and visually appealing websites. Let's collaborate to turn your ideas into a standout online experience!</p>
            <div className='flex justify-center gap-10 lg:flex-row flex-col'>
                <div className='lg:w-1/2 w-full flex-grow-0 bg-[#243439]  text-white p-6 rounded-2xl flex flex-col items-center text-center gap-4'>
                    <h2 className='text-4xl font-bold'><span className='text-[#FF7F40]'>Front End</span> Development </h2>
                    <img className='w-24' src={front_end_icon} alt="front_end_icon" />
                    <span className='text-2xl'><span className='text-[#FEC975] font-bold'>Shaping</span> Digital <br /> Dreams !</span>

                    <p className='text-lg'>
                        Crafting seamless interfaces and transforming
                        designs into engaging digital realities
                    </p>

                    <button className='hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-full'><a className='' href='#'>Hire Me</a></button>
                </div>
                <div className='lg:w-1/2 w-full flex-grow-0 bg-[#243439]  text-white p-6 rounded-2xl flex flex-col items-center text-center gap-4'>
                    <h2 className='text-4xl font-bold'><span className='text-[#FF7F40]'>Website</span> <br /> Design </h2>
                    <img className='w-24' src={website_design_icon} alt="front_end_icon" />
                    <span className='text-2xl'><span className='text-[#FEC975] font-bold'>Transforming </span> Visions <br /> into Pixels !</span>

                    <p className='text-lg'>
                        Creating eye-catching designs that make websites look great, work smoothly, and get surfed comfortably
                    </p>

                    <button className='hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-full'><a className='' href='#'>Hire Me</a></button>

                </div>
                <div className='lg:w-1/2 w-full flex-grow-0 bg-[#243439]  text-white p-6 rounded-2xl flex flex-col items-center text-center gap-4'>
                    <h2 className='text-4xl font-bold'><span className='text-[#FF7F40]'>Back-End</span> Development </h2>
                    <img className='w-24' src={back_end_icon} alt="front_end_icon" />
                    <span className='text-2xl'> <span className='text-[#FEC975] font-bold'>Crafting </span> Scalable Infrastructures !</span>

                    <p className='text-lg'>
                        Crafting resilient and scalable back-end solutions to empower robust digital operations.
                    </p>

                    <button className='hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-full'><a className='' href='#'>Hire Me</a></button>

                </div>

            </div>
        </section>
    )
}
