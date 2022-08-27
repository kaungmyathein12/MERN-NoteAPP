import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submit = async () => {
    const data = {
      email,
      password,
    };
    const res = await axios.post("http://localhost:4000/users/login", data);
    dispatch(login(res.data.jwtToken));
  };
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
          type="text"
          placeholder="Enter your email"
          className="w-full bg-[#151515] p-3 font-base outline-none text-gray-400 rounded-md mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all py-2 text-white font-medium rounded-md"
          onClick={submit}
        >
          Login
        </button>
        <div className="text-center mt-4 text-neutral-400 text-sm underline">
          <Link to="/register">Don't have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
