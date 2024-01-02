import React, { useState } from 'react'
import p from "../assets/add.jpg";

const Login = () => {

  const [user , setUser] = useState(
    {
      email : "",
      password : "",
    }
  )
  const changeHandler = (e) =>{
    let name  = e.target.name ;
    let value = e.target.value ; 

    setUser(
      { ...user , 
        [name]  : value ,
      }
    )

  }

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(user);
   

  }
    return (
      <section>
        <div
          id="container"
          className="flex  max-w-7xl mx-auto justify-evenly items-center   min-h-screen "
        >
          <div className="border border-[--bg-text-color] p-10">
            <label className="text-white text-4xl ">Login  Form </label>
            <br />
            <form onSubmit={submitHandler} className="space-y-5 ">
              
              <input
                className="p-2 outline-none bg-transparent border-b w-full text-white"
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={changeHandler}
             
                placeholder="xyz@gmail.com "
              />
              <br />
              <input
                className="p-2 outline-none bg-transparent border-b w-full text-white"
                type="password"
                id="password"
                value={user.password}
                name="password"
                onChange={changeHandler}
                placeholder="password  "
              />
              
              <br />
              <input
                className="p-2 outline-none bg-[--bg-text-color] px-6 p-2 "
                type="submit"
                value="Submit "
              />
            </form>
          </div>
          <div>
            <img className='border border-2 border-green-300 p-5 rounded-t-full' src={p} width="400" height="500" />
          </div>
        </div>
      </section>
    )
  }
  
  export default Login
