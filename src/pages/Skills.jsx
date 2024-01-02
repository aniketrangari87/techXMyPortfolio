import React from 'react'
import { FaJava , FaServer , FaReact , FaDatabase , FaNode } from "react-icons/fa6";
import { SiMicrosoftsharepoint , SiExpress} from "react-icons/si";
import { BiLogoMongodb  } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";


const Skills = () => {
  return (
    <div className='space-y-10 '>
      <section>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center  space-y-10 '>
          <div className='flex w-1/2 justify-center  items-center '>
             <h1 className='font-semibold text-5xl '> <span className='text-emerald-500'>S</span>kills </h1>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2   space-y-10 lg:space-y-0  space-y-5  justify-items-center   '>
           
            <div className='space-y-8'>
                <div className='h-28 flex w-64 bg-pink-300 rounded-lg p-5 '> 
                <h1 className='font-medium text-slate-800 text-xl'>Programming </h1>
                <p className='text-slate-600'><FaJava className='text-7xl  '/ > </p>
                </div>
                <div className='h-28 flex flex-col space-y-2  w-64 bg-indigo-300  rounded-lg p-5 space-x-10   '> 
                <h1 className='font-medium text-slate-800 text-xl'>Backend  </h1>
                <p className=' flex items-center justify-around space-x-5  text-slate-600 '>
                <SiExpress className='text-5xl'/>

                  <FaServer className='text-5xl  '/ >
                   </p>
                 </div>
                <div className='h-28 flex  w-64 bg-orange-300 space-x-10  rounded-lg p-5  '> 
                <h1 className='font-medium text-slate-800 text-xl'>Frontend  </h1>
                <p className='text-slate-600'>  <FaReact className='text-7xl  '/ ></p></div>
            </div>
            <div className=' space-y-5 '>
                <div className='h-48 flex flex-col w-60 rounded-lg  bg-sky-200 p-8 space-y-8'>
                <h1 className='font-medium  text-slate-800 text-xl'>Database  </h1>
                <p className= 'flex items-center text-blue-900'>
                  
                  <FaDatabase className='text-6xl'/ >
                  
                  <BiLogoMongodb className='text-6xl' />
                  <p className='font-semibold'>MongoDb</p>
                 
                    </p>
                </div>
                <div className='h-48 w-60 flex flex-col rounded-lg space-y-5  bg-yellow-300 p-8'> 
                <h1 className='font-medium text-slate-800 text-xl'>Soft Skills  </h1>
                <p className='text-slate-600'> <SiMicrosoftsharepoint className='text-7xl' /></p> </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 bg-white justify-items-center'>
         
       
          <div className='grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-y-0  justify-items-center  '>

            <div className=' space-y-8 '>
                <div className='h-48 flex flex-col w-60 rounded-lg  bg-sky-200 p-8 space-y-8'>
                <h1 className='font-medium  text-slate-800 text-xl'>HTML  </h1>
                <p className= 'flex items-center text-blue-900'>
                  
                  <FaDatabase className='text-6xl'/ >
                  
                  <BiLogoMongodb className='text-6xl' />
                  <p className='font-semibold'></p>
                 
                    </p>
                </div>
                <div className='h-48 w-60 flex flex-col rounded-lg space-y-5  bg-emerald-300 p-8'> 
                <h1 className='font-medium text-slate-800 text-xl'>CSS   </h1>
                <p className='text-slate-600'> <SiMicrosoftsharepoint className='text-7xl' /></p> 
                </div>
                <div className='h-48 w-60 flex flex-col rounded-lg space-y-5  bg-slate-400 p-8'> 
                <h1 className='font-medium text-slate-800 text-xl'>JavaScript</h1>
                <p className='text-slate-600'> <SiMicrosoftsharepoint className='text-7xl' /></p> 
                </div>
            </div>
            <div className='space-y-5'>
                <div className='h-28 flex flex-col  w-64 bg-pink-300 rounded-lg p-5 '> 
                <h1 className='font-medium text-slate-800 text-xl'>C/C++ </h1>
                <p className='text-slate-600 text-3xl flex items-center justify-center'>
                  C/C++ </p>
                </div>
                <div className='h-28 flex  w-64 bg-sky-400 space-x-10  rounded-lg p-5  '> 
                <h1 className='font-medium text-slate-800 text-xl'>Taiwind Css  </h1>
                <p className='text-slate-600'>  <SiTailwindcss className='text-7xl  '/ ></p>
                </div>
                <div className='h-28 flex flex-col  w-64 bg-indigo-300  rounded-lg p-5   '> 
                <h1 className='font-medium text-slate-800 text-xl'>Node.Js  </h1>
                <p className=' flex items-center justify-around  text-slate-600 '>
                

                  <FaNode className='text-7xl  '/ >
                   </p>
                 </div>
                <div className='h-28 flex flex-col space-y-2  w-64 bg-indigo-300  rounded-lg p-5 space-x-10   '> 
                <h1 className='font-medium text-slate-800 text-xl'>Express  </h1>
                <p className=' flex items-center justify-around space-x-5  text-slate-600 '>
                <SiExpress className='text-5xl'/>
                   </p>
                 </div>
                <div className='h-28 flex  w-64 bg-cyan-300 space-x-10  rounded-lg p-5  '> 
                <h1 className='font-medium text-slate-800 text-xl'>React  </h1>
                <p className='text-slate-600'>  <FaReact className='text-7xl  '/ ></p>
                </div>
                
            </div>
          </div>
          <div className='flex justify-center items-center '>
            <h1 className='text-center text-5xl font-semibold'>Tech<span className='text-emerald-500'>nology</span></h1>
          </div>
        </div>
      </section>
    </div>
 
    )

  
}

export default Skills
    {/* <section>
     <div className='flex flex-col text-center max-h-screen bg-emerald-300 pt-28'>
       <div className='flex justify-center items-center '>
         <h1 className='text-8xl py-10'><span className='text-white text-'>S</span>kills</h1>
       </div>
       <div className='flex w-full h-[400px] justify-center border  border-black rounded-lg shadow-xl shadow-slate-300 items-center bg-white  max-w-5xl mx-auto'>
         <div>Java</div>
         <div>Javascript</div>
       </div>
     </div>
   </section> */}