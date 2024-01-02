import React from 'react'
import filter from "../assets/filter.png"
import tour from "../assets/tour.png"
import bgChanger from "../assets/bgChanger.png"

const Projects = () => {
  return (
    <div className=''>

      <section className='py-10'>
        <ul className=' grid grid-cols-2   justify-items-center  md:max-w-7xl  text-center md:flex text-sm font-medium md:justify-center gap-5 '>
          <li className='bg-slate-200 py-2 px-3 rounded-sm'>FRONTEND </li>
          <li className='bg-slate-200 py-2 px-3 rounded-sm'> BACKEND</li>
          <li className='bg-slate-200 py-2 px-3 rounded-sm'> HTML / CSS </li>
          <li className='bg-slate-200 py-2 px-3 rounded-sm'>  JAVACRIPT </li>
          <li className='bg-slate-200 py-2 px-3 rounded-sm'>  FULLSTACK </li>
          <li className='bg-slate-200 py-2 px-3 rounded-sm px-9'>  JAVA </li>
        </ul>
      </section>
      <section>
        <div className='grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-5 w-full  max-w-7xl mx-auto'>
          <div className='border w-full max-w-80 bg-emerald-50  '>
            <img className='' src={filter} alt="" />
            <div className='relative p-2 space-y-2 '>
                  <h1 className='text-base font-medium '>Filter Course  App </h1>
                  <p className='text-xs  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maxime?</p>
            </div>
            <div className='flex justify-center items-center   text-sm'>
              <a target='_blank' href='https://aniketrangari87.github.io/FilterCourses-App-React/' className='bg-emerald-200 text-center w-full p-3  ' > Go Live</a>
              <a  target='_blank'href='https://github.com/aniketrangari87/FilterCourses-App-React/tree/master' className='w-full text-center bg-slate-50 p-3'> Get Code </a>
            </div>
          </div>
          <div className='border w-full max-w-80 bg-emerald-50 '>
            <img src={bgChanger} alt="" />
            <div className='relative p-2 space-y-2 '>
                  <h1 className='text-base font-medium '>Background Changer App </h1>
                  <p className='text-xs  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maxime?</p>
            </div>
            <div className='flex justify-center items-center  text-sm'>
              <a target='_blank' href="https://aniketrangari87.github.io/bgchanger/"   className='bg-emerald-200 w-full p-3  text-center ' > Go Live</a>
              <a target='_blank'  href='https://github.com/aniketrangari87/bgchanger' className='w-full bg-slate-50 p-3 text-center'> Get Code </a>
            </div>
          </div>
          <div className='border w-full max-w-80  shadow-sm bg-emerald-50  '>
            <img className='' src={tour} alt="" />
            <div className='relative p-2 space-y-2 '>
                  <h1 className='text-base font-medium '>Tour   App </h1>
                  <p className='text-xs  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maxime?</p>
            </div>
            <div className='flex justify-center items-center  text-sm'>
              <a target='_blank' href='https://aniketrangari87.github.io/Tour-App-React/' className='bg-emerald-200 w-full p-3 text-center  ' > Go Live</a>
              <a target='_blank' href="https://github.com/aniketrangari87/Tour-App-React" className='w-full bg-slate-50 p-3 text-center'> Get Code </a>
            </div>
          </div>
          
          
    
        </div>
      </section>
      
    </div>
  )
}

export default Projects
