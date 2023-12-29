import React, { useEffect, useRef, useState } from 'react'
import aboutMe from '../../data/aboutMe.json'
import adilpic from '../../assets/adil3.png'
// import htmlIcon from '../../assets/html.png'
// import cssIcon from '../../assets/css.png'
// import jsIcon from '../../assets/javascript.png'
// import bootstrapIcon from '../../assets/bootstrap.png'
// import tailwindIcon from '../../assets/tailwind.png'
// import reactIcon from '../../assets/react.png'
// import phpIcon from '../../assets/php.png'
// import laravelIcon from '../../assets/laravel.png'
// import mysqlIcon from '../../assets/mysql.png'
// import mongoDBIcon from '../../assets/mongoDB.png'
import devPic from '../../assets/devPic.png'

export default function AboutMe() {

    return (
        <section id='aboutMe' className=' lg:pl-[40px] flex flex-col justify-center items-center gap-10'>
            <div id='' className='flex flex-col justify-center items-center text-center gap-5'>
                <q className='text-4xl'> Decoding My Digital Story </q>
                <p className='text-xl lg:w-[60%]'>{aboutMe[0].description}</p>
            </div>
            <div id="infoAboutMe" className='w-full flex justify-center items-center gap-12 lg:px-48 flex-col'>

                <div className='flex gap-16 lg:flex-row flex-col'>

                    <div id='about-me' className={`lg:w-1/2 bg-[#243439]  text-white p-6 rounded-2xl flex flex-col justify-center items-center text-center gap-4`}>
                        <img className='w-44 object-contain' src={adilpic} alt="adil pic" />
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-2xl'>{aboutMe[0].firstName} {aboutMe[0].lastName}</h1>

                            <div className='bg-[#177771] w-28 h-1 rounded'></div>

                            <h2 className='text-xl'>Full Stack Dev</h2>
                        </div>

                        <div id="social-Media" className='flex gap-6 '>
                            <a target='blank' href={aboutMe[0].social_media.linkedIn}><i class="fa-brands fa-linkedin-in bg-[#177771]  text-2xl   text-white p-2 w-12 h-12 rounded-full hover:scale-125 duration-150"></i></a>
                            <a target='blank' href={aboutMe[0].social_media.whatsapp}><i class="fa-brands fa-whatsapp bg-[#177771] text-2xl  text-white p-2 w-12 h-12 rounded-full hover:scale-125 duration-150"></i></a>
                            <a target='blank' href={aboutMe[0].social_media.github}><i class="fa-brands fa-github bg-[#177771] text-2xl text-white p-2 w-12 h-12 rounded-full hover:scale-125 duration-150"></i></a>
                            <a target='blank' href={`mailto:${aboutMe[0].email}`}><i class="fa-regular fa-envelope bg-[#177771] text-2xl text-white p-2 w-12 h-12 rounded-full hover:scale-125 duration-150"></i></a>

                        </div>
                    </div>

                    <div id='about-me' className='lg:w-1/2 flex-grow-0 bg-[#243439]  text-white p-6 rounded-2xl flex flex-col items-center text-center gap-6'>
                        <h2 className='text-4xl font-bold'>HELLO <span className='text-[#FF7F40]'>!</span> </h2>
                        <span className='text-xl'>thrilled to be part of you project !</span>
                        <div className='flex gap-6 h-auto'>
                            <button className='hover:scale-110 hover:transition-all  px-4 py-3 bg-[#FF7F40] text-white rounded-full'><a className='' href={aboutMe[0].social_media.whatsapp}>Download Cv</a></button>
                            <button className='hover:scale-110 hover:transition-all border border-[#FF7F40] text-[#FF7F40] px-4 py-3 rounded-full'><a className='' href={aboutMe[0].social_media.whatsapp}>View Portfolio</a></button>
                        </div>

                        <p className='text-lg'>
                            Excited to team up! I love making websites,
                            and I'm ready to bring your ideas to life.
                            Let's create something awesome together.
                            Thrilled to start working on your project
                            and make it stand out online!
                        </p>
                    </div>

                </div>

                <div id='technologies' className=' flex-grow w-full bg-[#243439]  text-white h-96  rounded-2xl p-6 pb-0 flex flex-col justify-center gap-10'>
                    <h2 className='text-4xl font-bold text-center'> <span className='text-[#FF7F40]'>Technologies</span> I use </h2>
                    {/* <div id='technologies-logos' className='flex justify-center items-center gap-14'>

                        <div className='flex flex-col items-center justify-center gap-6'>
                            <h1 className='text-2xl'>Back-End</h1>
                            <div className='flex flex-wrap justify-center gap-6'>

                                <img src={phpIcon} alt="css icon" className='w-24 ' />
                                <img src={laravelIcon} alt="css icon" className='w-24 ' />
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-6'>
                            <h1 className='text-2xl'>Front-End</h1>
                            <div className='flex flex-wrap justify-center gap-6'>

                                <div className='flex'>
                                    <img src={htmlIcon} alt="html icon" className='w-24 ' />
                                    <img src={cssIcon} alt="css icon" className='w-24 ' />
                                    <img src={jsIcon} alt="css icon" className='w-24 ' />
                                </div>

                                <div className='flex'>
                                    <img src={bootstrapIcon} alt="css icon" className='w-24 ' />
                                    <img src={tailwindIcon} alt="css icon" className='w-24 ' />
                                    <img src={reactIcon} alt="react icon" className='w-24 ' />
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-6'>

                            <h1 className='text-2xl'>Database</h1>
                            <div className='flex flex-wrap justify-center gap-6'>
                                <img src={mysqlIcon} alt="css icon" className='w-24 ' />
                                <img src={mongoDBIcon} alt="css icon" className='w-24 ' />
                            </div>
                        </div>
                    </div> */}

                    <div className='flex justify-center items-end h-full'>
                            <img className='w-full' src={devPic} alt=""  />
                    </div>

                </div>


            </div>
        </section>
    )
}
