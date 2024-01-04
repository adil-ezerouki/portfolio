import React from 'react'
import project1 from '../../assets/project1.png'

export default function Portfolio() {
    return (
        <section id='portfolio' className='flex justify-center items-center flex-col gap-4'>
            <h2 className='text-4xl text-center'> My Portfolio </h2>
            <p className='text-xl lg:w-[60%] text-center'>a showcase of web development projects
                where design meets functionality seamlessly. Each piece reflects my dedication to crafting engaging digital
                experiences, bringing ideas to life with a touch of innovation.</p>
            <div className='flex justify-center gap-10 lg:flex-row flex-col'>
                <div className='lg:w-1/2 w-full flex-grow-0 bg-[#243439]  text-white p-6 rounded-2xl flex flex-col items-center text-center gap-4'>
                {/* <span className='text-3xl'><span className='text-[#FF7F40] font-bold'>Photographer</span> Portfolio</span> */}

                    <img className='w-[900px] rounded-2xl' src={project1} alt="porject1 pic" />
                    <div id='rolesInProject' className='flex gap-2'>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#FEC975] rounded-xl text-black'># Front-end Developer</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#FEC975]  rounded-xl text-black'># Website Design</span>
                    </div>

                    <div id='techsUsedInProject' className='flex gap-2 flex-wrap justify-center'>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># Html</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># Css</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># Javascript</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># bootstrapp</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># tailwind</span>
                    </div>

                    <div className='flex gap-10'>
                    <button className='hover:scale-110 hover:transition-all  '><a className='' href='#'><i className="fa-brands fa-github bg-[#FF7F40] text-2xl text-white p-2 w-12 h-12 rounded-full hover:scale-125 duration-150"></i></a></button>
                    <button className='hover:scale-110 hover:transition-all   '><a className='' href='#'><i className="fa-solid fa-link bg-[#FF7F40] text-2xl text-white p-2 w-12 h-12 rounded-full hover:scale-125 duration-150"></i></a></button>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full flex-grow-0 bg-[#243439]  text-white p-6 rounded-2xl flex flex-col items-center text-center gap-4'>
                {/* <span className='text-3xl'><span className='text-[#FF7F40] font-bold'>Photographer</span> Portfolio</span> */}

                    <img className='w-[900px] rounded-2xl' src={project1} alt="porject1 pic" />
                    <div id='rolesInProject' className='flex gap-2'>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#FF7F40] text-white rounded-xl'># Front-end Developer</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#FF7F40] text-white rounded-xl'># Website Design</span>
                    </div>

                    <div id='techsUsedInProject' className='flex gap-2 flex-wrap justify-center'>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># Html</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># Css</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># Javascript</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># bootstrapp</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># tailwind</span>
                    </div>

                    <div className='flex gap-10'>
                    <button className='hover:scale-110 hover:transition-all  '><a className='' href='#'><i className="fa-brands fa-github bg-[#FF7F40] text-2xl text-white p-2 w-12 h-12 rounded-full hover:scale-125 duration-150"></i></a></button>
                    <button className='hover:scale-110 hover:transition-all   '><a className='' href='#'><i className="fa-solid fa-link bg-[#FF7F40] text-2xl text-white p-2 w-12 h-12 rounded-full hover:scale-125 duration-150"></i></a></button>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full flex-grow-0 bg-[#243439]  text-white p-6 rounded-2xl flex flex-col items-center text-center gap-4'>
                {/* <span className='text-3xl'><span className='text-[#FF7F40] font-bold'>Photographer</span> Portfolio</span> */}

                    <img className='w-[900px] rounded-2xl' src={project1} alt="porject1 pic" />
                    <div id='rolesInProject' className='flex gap-2'>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#FF7F40] text-white rounded-xl'># Front-end Developer</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#FF7F40] text-white rounded-xl'># Website Design</span>
                    </div>

                    <div id='techsUsedInProject' className='flex gap-2 flex-wrap justify-center'>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># Html</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># Css</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># Javascript</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># bootstrapp</span>
                        <span className='text-sm hover:scale-110 hover:transition-all  px-4 py-3 bg-[#177771] text-white rounded-xl'># tailwind</span>
                    </div>

                    <div className='flex gap-10'>
                    <button className='hover:scale-110 hover:transition-all  '><a className='' href='#'><i className="fa-brands fa-github bg-[#FF7F40] text-2xl text-white p-2 w-12 h-12 rounded-full hover:scale-125 duration-150"></i></a></button>
                    <button className='hover:scale-110 hover:transition-all   '><a className='' href='#'><i className="fa-solid fa-link bg-[#FF7F40] text-2xl text-white p-2 w-12 h-12 rounded-full hover:scale-125 duration-150"></i></a></button>
                    </div>
                </div>


            </div>
        </section>
    )
}
