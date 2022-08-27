import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-full grid place-items-center">
      <div className="w-11/12 md:w-2/5 xl:w-3/12 bg-[#191919] px-4 py-6 rounded-md">
        <h3 className="bg-neutral-800 inline-block mb-5 text-white text-lg font-medium px-4 py-1 rounded-md">
          NoteApp
        </h3>
        <br />
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full bg-[#151515] p-3 font-base outline-none text-gray-400 rounded-md mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your email"
          className="w-full bg-[#151515] p-3 font-base outline-none text-gray-400 rounded-md mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all py-2 text-white font-medium rounded-md">
          Sign Up
        </button>
        <div className="text-center mt-4 text-neutral-400 text-sm underline">
          <Link to="/login">Already have an account</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
