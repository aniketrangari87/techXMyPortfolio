import React from "react";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="space-y-8 bg-white p-10  ">
      <section>
        <div className="grid grid-cols-1  space-y-5  justify-items-center  ">
          <div className="  grid  gap-8 md:gap-5 grid-cols-1 md:grid-cols-5  ">
          <div className="flex justify-start items-center">
              <a className="text-3xl text-emerald-500  font-semibold"><span className='text-blue-950'>Tech</span>X</a>
         </div>
            <div className="flex flex-col space-y-5 ">
              <h1 className="font-semibold  ">Projects</h1>
              <a className="text-gray-500 text-sm  " href="">
                Frontend
              </a>
              <a className="text-gray-500 text-sm" href="">
                FullStack{" "}
              </a>
              <a className="text-gray-500 text-sm" href="">
                Backend
              </a>
              <a className="text-gray-500 text-sm" href="">
                Python/Java
              </a>
            </div>
            <div className="flex flex-col  space-y-5">
              <h1 className="font-semibold ">Skills</h1>
              <a className="text-gray-500 text-sm " href="">
                Web Development{" "}
              </a>
              <a className="text-gray-500 text-sm" href="">
                Software Development{" "}
              </a>
              <a className="text-gray-500 text-sm" href="">
                Ai Generation{" "}
              </a>
              <a className="text-gray-500 text-sm" href="">
                Game Development{" "}
              </a>
            </div>
            <div className="flex flex-col  space-y-5">
              <h1 className="font-semibold  ">Experince</h1>
              <a className="text-gray-500 text-sm" href="">
                Catalyst
              </a>
              <a className="text-gray-500 text-sm" href="">
                Wing's24
              </a>
              <a className="text-gray-500 text-sm" href="">
                Wing's23
              </a>
              <a className="text-gray-500 text-sm" href="">
                SIH
              </a>
            </div>
            <div className=" space-y-5 ">
            <div className="space-y-5 ">
              <h1 className="font-semibold ">Subscribe to our newsletter</h1>
              <p className="text-gray-500 text-sm">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <div className="flex flex-col space-y-4 ">
              <input
                className=" rounded-md  border border-[--bg-new] bg-transparent p-1 outline-none"
                type="text"
              />
              <button className="rounded-md bg-[--bg-new] px-5 py-2">
                Subscribe
              </button>
            </div>
          </div>
          </div>
          
        </div>
      </section>
      <section>
        <div className='block space-y-5 lg:flex lg:space-y-0 lg:justify-between'>
          <p className='text-gray-500'> © 2024 TechX, Inc. All rights reserved.</p>
          <div className='flex gap-10'>
          <a  className="text-fuchsia-700" target="_blank" href="https://www.instagram.com/anyrangari10"> <RiInstagramFill size={25}/> </a>
         <a href="https://www.facebook.com/any.rangari" target="_blank" className="text-blue-700">  <RiFacebookFill size={25}/> </a>
         <a target="_blank" href="https://www.linkedin.com/in/aniketrangari"  className='text-blue-500'>  <RiLinkedinFill size={25}/> </a>
          <a target="_blank" href="https://github.com/aniketrangari87" className='text-green-950'> <RiGithubFill size={25}/></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
