import React from "react";
import certify from "../assets/certify.png";
import java from "../assets/java.jpg";
import forage from "../assets/forage.jpg";
import flipkart from "../assets/flipkart.jpg";

const Certification = () => {
  return (
    <div>
      <div className="block p-10 space-y-10 bg-white md:flex md:flex-col md:items-center   md:justify-center ">
        <div>
          <h1 className="text-center p-10  text-4xl text-emerald-500">
            Certifications
          </h1>
        </div>
        <div className=" flex justify-center  md:flex  md:w-full md:items-center md:justify-center ">
          <img src={certify} width={250} />
        </div>

        <div className=" grid grid-cols-1 justify-items-center space-y-10 md:space-y-0 m-2 md:py-2  md:flex md:w-full md:items-center md:justify-center md:gap-10  ">
          <div className="space-y-2">
            <div>
              <img
                className="rounded-md border  border-2 border-emerald-300  bg-emerald-500 p-2"
                src={java}
                width={290}
              />
            </div>
            <h1 className="text-center font-semibold"> Software Developer</h1>
            <p className="text-center text-slate-500">Nasscom </p>
          </div>
          <div className=" space-y-2">
            <div>
            
             <img
                className="rounded-md border border-2 border-emerald-300 bg-emerald-500 p-2"
                src={forage}
                width={300}
              />
            </div>
          
            <h1 className="text-center font-semibold">
              Developer job simulation
            </h1>
            <p className="text-center text-slate-500">Accenture </p>
          </div>
          <div className="space-y-2">
            <div>
              <img
                className="rounded-md border border-2 border-emerald-300 bg-slate-500 p-2"
                src={flipkart}
                width={300}
              />
            </div>
            <h1 className="text-center font-semibold">
              {" "}
              Software development track{" "}
            </h1>
            <p className="text-center text-slate-500">Flipkart </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
