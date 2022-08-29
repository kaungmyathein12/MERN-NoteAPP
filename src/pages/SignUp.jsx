import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/features/userSlice";
import { RiLoader4Fill } from "react-icons/ri";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const apiKey = import.meta.env.VITE_REACT_API_URL;
      const data = {
        email,
        password,
      };
      const res = await axios.post(`${apiKey}/users/register`, data);
      dispatch(login(res.data.jwtToken));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.error);
      console.log(error.response.data.error);
    }
  };
  return (
    <div className="h-full grid place-items-center">
      <div className="w-11/12 md:w-2/5 xl:w-3/12 bg-[#fff] px-6 pt-6 pb-8 rounded shadow">
        <div className={"flex flex-row items-center gap-x-2"}>
          <i className="ri-bookmark-fill text-xl text-blue-600"></i>
          <h3 className="font-bold text-xl text-emerald-500">CRUDWEB</h3>
        </div>
        <hr className={"my-3"} />
        {error && (
          <div
            className={
              "mb-3 bg-rose-100 font-semibold text-sm text-center text-rose-700 rounded py-3"
            }
          >
            {error}
          </div>
        )}
        <div className={"mb-3"}>
          <label htmlFor="email" className={"text-sm text-neutral-500"}>
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-[#efefef] outline-none rounded mt-2 p-2"
            autoComplete={"off"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={"mb-4"}>
          <label htmlFor="password" className={"text-sm text-neutral-500"}>
            Enter your password
          </label>
          <input
            type="password"
            id="password"
            className="w-full bg-[#efefef] outline-none rounded mt-2 p-2"
            autoComplete={"off"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          disabled={isLoading}
          className={
            "w-full bg-blue-500 hover:bg-blue-600 font-semibold text-white rounded transition-all mb-3 p-2 " +
            (isLoading && "bg-blue-300 hover:bg-blue-300")
          }
          onClick={submit}
        >
          {isLoading ? (
            <RiLoader4Fill className={"animate-spin mx-auto my-1"} />
          ) : (
            "Sign up"
          )}
        </button>
        <div className={"text-sm text-neutral-500 text-center underline"}>
          <Link to="/login">Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
