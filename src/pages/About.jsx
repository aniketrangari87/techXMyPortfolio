import React from "react";
import about from "../assets/about.png";
import Hamburger from "hamburger-react";

const About = () => {
  return (
    <div>
      <section className="h-[600px] h-auto bg-white py-8">
        <div className="grid grid-cols-1 content-center justify-items-center   md:flex">
          <div className="flex w-1/2 flex-col  items-center   justify-center space-y-10 border-emerald-600 bg-emerald-50 bg-opacity-20   py-16 text-center  text-slate-600 md:border-r md:rounded-r-full  md:border-r-2 md:p-28">
            <h1
              className=" flex justify-center items-center border-r-b text-xl border-b-2 border-emerald-500  p-3  font-semibold text-emerald-400 md:text-3xl
            "
            >
              About Me{" "}
            </h1>
            <p className="text-sm md:text-base text-center font-normal">
              Welcome to my Portfolio ! I'm a dedicated learner with a
              strong interest in Java programming and web development. Currently
              pursuing my bachelors Degree in Computer Science and Engineering , I'm equipped with a solid foundation in computer
              science and eager to contribute my skills to meaningful projects.
            </p>
          </div>
          <div className="md:w-1/2 p-16">
            <img
              cla
              src={about}
              className="rounded-full border  border-emerald-500 bg-emerald-300 p-3"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
