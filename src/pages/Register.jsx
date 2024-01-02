import React, { useState } from "react";
import p from "../assets/add.jpg";

const Register = () => {

  const [user , setUser ] = useState(
    {
      username : "",
      email: "" ,
      password : "",
      phone : "",
    }
  );
  const changeHandler = (e) =>{

    let name = e.target.name ;
    let value = e.target.value ;

    setUser(
      {
        ...user ,
        [name] : value ,
      }
    )

  }

  const submitHandler = (e) =>{

    e.preventDefault();
    console.log(user)

  }
 
  return (
    <section>
      <div
        id="container"
        className="flex  max-w-7xl mx-auto justify-evenly items-center mt-16  min-h-screen"
      >
        <div>
          <img className="rounded-s-full shadow-lg sha shadow-green-300 opacity-90" src={p} width="500" height="500" />
        </div>
        <div className="border border-[0.2px] border-green-300   p-16 rounded-md shadow-sm shadow-[--bg-text-color]  bg-transparent">
          <label className="text-green-300 text-4xl  ">Registration Form </label>
          <br />
          <br />
          <br />
          <form onSubmit={submitHandler} className="space-y-5  ">
            <input
              className="p-2 outline-none bg-transparent border-b border-b-2 border-green-300  w-full text-white"
              type="text"
              id="username"
              required
              name="username"
              placeholder="firstname "
              value={user.username}
              onChange={changeHandler}
            />
            <br />
            <input
              className="p-2 outline-none bg-transparent border-b border-b-2 border-green-300  w-full text-white"
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={changeHandler}
              placeholder="xyz@gmail.com "
            />
            <br />
            <input
              className="p-2 outline-none bg-transparent border-b border-b-2 border-green-300 w-full text-white"
              type="password"
              id="password"
              value={user.password}
              onChange={changeHandler}
              name="password"
         
              placeholder="password  "
            />
            <br />
            <input
              className="p-2 outline-none bg-transparent border-b border-b-2 border-green-300  w-full text-white"
              type="phone"
              id="phone"
             value={user.phone}
             onChange={changeHandler}
              name="phone"
              required
              placeholder="phone"
            />
            <br />
            <input
              className="p-2 outline-none bg-green-300 px-6 p-3 rounded-md "
              type="submit"
              value="Submit "
            />
          </form>
        </div>
        
        
      </div>
    </section>
  );
};

export default Register;
