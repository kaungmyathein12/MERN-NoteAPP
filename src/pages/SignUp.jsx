import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/features/userSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submit = async () => {
    try {
      const apiKey = import.meta.env.VITE_REACT_API_URL;
      const data = {
        email,
        password,
      };
      const res = await axios.post(`${apiKey}/users/register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(login(res.data.jwtToken));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-full grid place-items-center">
      <div className="w-11/12 md:w-2/5 xl:w-3/12 bg-[#fafafa] px-6 pt-6 pb-8 rounded shadow">
        <div className={"flex flex-row items-center gap-x-2"}>
          <i className="ri-bookmark-fill text-xl text-blue-600"></i>
          <h3 className="font-bold text-xl text-emerald-500">React Note</h3>
        </div>
        <hr className={"my-3"} />
        <div className={"mb-3"}>
          <label htmlFor="email" className={"text-sm text-neutral-500"}>
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-[#ececec] outline-none rounded mt-2 p-2"
            autoComplete={"off"}
          />
        </div>
        <div className={"mb-4"}>
          <label htmlFor="password" className={"text-sm text-neutral-500"}>
            Enter your password
          </label>
          <input
            type="password"
            id="password"
            className="w-full bg-[#ececec] outline-none rounded mt-2 p-2"
            autoComplete={"off"}
          />
        </div>
        <button
          className={
            "w-full bg-blue-500 hover:bg-blue-600 font-semibold text-white rounded transition-all mb-3 p-2"
          }
        >
          Sign up
        </button>
        <div className={"text-sm text-neutral-500 text-center underline"}>
          <Link to="/login">Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
