import React from "react";
import p from "../assets/hero.webp";
import problemSoving from "../assets/problemSolving.jpg";
import webDevelopment from "../assets/webDevelopment.webp";
import SoftwareDevelopment from "../assets/SoftwareDevelopment.webp";


const Home = () => {
  return (
    <div className=" ">
      <section className=" bg-white md:max-h-screen md:min-h-full pb-16 md:flex md:justify-around md:items-center ">
        <div className=" p-10 space-y-10 md:w-1/2  ">
          <div className="text-white space-y-8 ">
            <p className="text-3xl md:text-4xl text-black  font-semibold">Welcome To <span className="text-emerald-600 font-semibold">Tech</span>X</p>
            <h1 className=" text-4xl md:text-5xl text-black font-bold"> Hello I am Aniket Rangari </h1>
            <p className="text-lg md:text-xl text-emerald-400">
              To obtain a challenging Software Developer Position where
my creativity , problem-solving skills , and experience in
Software Development engaging and user-friendly
Software can be utilized to enhance user productivity . 

            </p>
          </div>
          <div className=" flex space-x-2 md:space-x-14  md:font-semibold ">
            <a  target="_blank" href="https://www.linkedin.com/in/aniketrangari" className="bg-emerald-300 text-green-900 border border-green-900 px-8  md:px-10 py-3 rounded-md  hover:bg-emerald-300 hover:text-black">LinkedIn</a>
            <a  target="_blank" href="https://github.com/aniketrangari87" className=" bg-white text-black border border-green-900  px-8 md:px-10 py-3 rounded-md  hover:text-green-800 ">Github</a>
          </div>
        </div>
        <div className="flex  justify-center items-center">
          <img className=" rounded-md shadow-green-300 w-80   " src={p}  />
        </div>
       
      </section>
      <section className="bg-white p-5  ">
        <div className="p-5 space-y-10 ">
          <div>
              <h1 className="text-center text-2xl  text-emerald-400  font-semibold md:text-4xl">   MY TOP TECH DOMAINS </h1> 
          </div>
          <div className="text-black block w-full  space-y-10  py-5  md:flex md:w-full md:items-center md:space-x-10 md:space-y-0 md:justify-evenly">
              <div className="space-y-4 border-dashed py-20 border border-2  border-emerald-400 ">
                    <div href="#" className=" flex justify-center text-base"><img className="" src={problemSoving} width={100} /></div>
                   <h1 className="text-center font-semibold">Problem solving </h1>
                   <p className="text-slate-600 text-sm text-center px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptatum.</p>
              </div>
              <div className="space-y-4  px-4 border border-4 bg-emerald-50 bg-opacity-35   border-emerald-400 py-28 ">
                    <div href="" className=" flex justify-center "><img src={webDevelopment} width={150} /></div>
                   <h1 className="text-center  font-semibold text-base ">Web development </h1>
                   <p className="text-slate-600 text-center text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptatum.</p>
              </div>
              <div className="space-y-4 px-3 border-dashed border border-2 border-emerald-400 py-20">
                    <div  href="" className=" flex justify-center"><img src={SoftwareDevelopment} width={100} /></div>
                   <h1 className="text-center text-base  font-semibold">Software development </h1>
                   <p className="text-slate-600 text-sm text-center px-2" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptatum.</p>
              </div>
          </div>
        </div>
      </section>
     
    </div>

    
  );
};

export default Home;
