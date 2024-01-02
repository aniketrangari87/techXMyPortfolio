import React, { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Certification from "../pages/Certification";
import Hamburger from "hamburger-react";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const  clickHandler= () =>{
        setOpen(false)

    }
    return (
        <div className="">
            <div
                id="container "
                className="  mx-auto flex max-w-7xl items-center    justify-between bg-slate-50 shadow-sm shadow-emerald-50  p-5    ">
                <div>
                    <NavLink className="pl-8 text-4xl font-semibold text-emerald-500">
                        <span className="text-blue-950">Tech</span>X
                    </NavLink>
                </div>

                <nav className="">
                    <ul
                        className={`hidden  justify-evenly gap-8 text-base  font-medium  text-emerald-500 lg:flex   `}
                    >
                        <li className="p-3 ">
                            <NavLink to="/"> Home </NavLink>
                        </li>
                        <li className="p-3 ">
                            <NavLink to="/about">About </NavLink>
                        </li>
                        <li className="p-3 ">
                            <NavLink to="/contact">Contact </NavLink>
                        </li>
                        <li className="p-3 ">
                            <NavLink to="/skills"> Skills</NavLink>
                        </li>
                        <li className="p-3 ">
                            <NavLink to="/experience">Experience </NavLink>
                        </li>
                        <li className="p-3 ">
                            <NavLink to="/projects"> Projects </NavLink>
                        </li>
                        <li className="p-3 ">
                            <NavLink to="/certification"  onClick={clickHandler}> Certification  </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="flex lg:hidden ">
                <Hamburger  toggle={setOpen} toggled={isOpen}  color="green" />
                </div>
            </div>
            <nav>
                    <ul
                        className={`   ${isOpen ? "flex flex-col justify-center items-center gap-8 text-base  font-medium  text-emerald-500  " : "hidden"}   `}
                    >
                        <li className="p-1 ">
                            <NavLink to="/" onClick={clickHandler}> Home </NavLink>
                        </li>
                        <li className="p-1 ">
                            <NavLink to="/about"  onClick={clickHandler}>About </NavLink>
                        </li>
                        <li className="p-1 ">
                            <NavLink to="/contact"  onClick={clickHandler}>Contact </NavLink>
                        </li>
                        <li className="p-1 ">
                            <NavLink to="/skills"  onClick={clickHandler}> Skills</NavLink>
                        </li>
                        <li className="p-1 ">
                            <NavLink to="/experience"  onClick={clickHandler}>Experience </NavLink>
                        </li>
                        <li className="p-1 ">
                            <NavLink to="/projects"  onClick={clickHandler}> Projects </NavLink>
                        </li>
                        <li className="p-1 ">
                            <NavLink to="/certification"  onClick={clickHandler}> Certification  </NavLink>
                        </li>
                    </ul>
                </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/certification" element={<Certification />} />
            </Routes>
        </div>
    );
};

export default Navbar;
