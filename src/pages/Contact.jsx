import React, { useState } from "react";
import p from "../assets/add.jpg";

const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });
  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    // <div className="flex  justify-around items-center min-h-screen">
    //   <div className="">
    //     <img
    //       className="border border-4 shadow-md rounded-md  shadow-white border-green-300 p-2"
    //       src={p}
    //       width={400}
    //     />
    //   </div>
    //   <div>
    //     <h1 className="text-4xl text-green-300 text-center">Contact Me </h1>

    //     <div>
    //       <form
    //         onSubmit={submitHandler}
    //         className="p-10 w-full  items-center border border-2 border-green-300 m-5 text-green-300"
    //       >
    //         <label htmlFor="username ">Username</label>
    //         <br />
    //         <input
    //           className=" outline-none bg-green-100 p-3 text-black my-5  "
    //           type="text"
    //           id="username "
    //           name="username"
    //           value={user.username}
    //           onChange={changeHandler}
    //         />
    //         <br />
    //         <label htmlFor="email ">Email</label>
    //         <br />
    //         <input
    //           className=" outline-none bg-green-100 p-3 text-black my-5  "
    //           type="email"
    //           id="email"
    //           name="email"
    //           value={user.email}
    //           onChange={changeHandler}
    //         />
    //         <br />
    //         <label htmlFor="message ">Message</label>
    //         <br />
    //         <input
    //           className=" outline-none bg-green-100 p-3 text-black my-5  "
    //           type="text"
    //           id="message "
    //           name="message"
    //           value={user.message}
    //           onChange={changeHandler}
    //         />
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div>
      <section>
        <div className="block bg-white md:flex py-10">
          <div className="  w-full space-y-20 p-16 bg-emerald-100 md:w-1/2">
            <h1 className="text-black  font-semibold text-3xl ">Get in touch</h1>
            <p className="text-xl text-green-600"></p>
            <div className="space-y-5 text-lg text-gray-700">
            <p>Aurangabad </p>
            <p>+91-9529072277</p>
            <p>aniketrangari@gmail.com</p>

            </div>
          </div>
          <div className=" bg-slate-50w-full p-16 space-y-10  md:w-1/2 ">
              <div className="flex flex-col gap-10   md:flex  ">
                   <div>
                    <label  className="font-semibold" htmlFor="firstname">First name</label><br /><br />
                    <input className="p-2 w-full  outline-none caret-green-700 bg-transparent border-b border-b-2 border-green-600 " type="text" name="firstname" id="firstname" />
                   </div>
                   <div>
                   <label className="font-semibold"  htmlFor="lastname">Last name</label><br /><br />
                    <input className="p-2 w-full  outline-none caret-green-700 bg-transparent border-b border-b-2 border-green-600" type="text" name="lastname" id="lastname" />
                   </div>
              </div>
              <div>
              <label className="font-semibold" htmlFor="email">Email</label><br /><br />
                    <input className="p-2 w-full outline-none caret-green-700  bg-transparent border-b border-b-2 border-green-600" type="text" name="email" id="email" />
              </div>
              <div>
              <label className="font-semibold" htmlFor="phonenumber">Phone number</label><br /><br />
                    <input className="p-2 w-full outline-none caret-green-700  bg-transparent border-b border-b-2 border-green-600 " type="text" name="phonenumber" id="phonenumber" />
              </div>
              <div>
              <label className="font-semibold" htmlFor="message">Message</label><br /><br />
              <textarea className="p-3 w-full outline-none  caret-green-700 rounded-md bg-transparent border border-2 border-green-600 " name="message" id="message" cols="30" rows="5"></textarea>
                   
              </div>
              <div>
                <button className="btn bg-emerald-400 px-6 text-white p-2 font-semibold rounded-md  " type="submit"> Submit</button>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
