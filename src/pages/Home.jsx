import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard.jsx";
import { useSelector } from "react-redux";
import moment from "moment";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimatedNoteCard from "../components/AnimatedNoteCard.jsx";
import { RiLoader4Fill } from "react-icons/ri";

const Home = () => {
  const { currentUser, jwtToken } = useSelector((state) => state.users);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const apiKey = import.meta.env.VITE_REACT_API_URL;

  const searchByName = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${apiKey}/notes/search?name=${search}`, {
        headers: {
          "auth-token": jwtToken,
        },
      });
      setData(res.data.notes);
      setIsLoading(false);
      setSearch("");
    } catch (e) {
      console.log(e);
    }
  };

  const ProfileCreateSearch = (
    <div
      className={
        "flex flex-col md:flex-row justify-between md:items-center gap-y-8 md:gap-0 mb-14"
      }
    >
      {/* Profile and Create Btn */}
      <div className={"flex flex-row items-center"}>
        <div className={"flex flex-row items-center mr-6"}>
          <img
            src={currentUser.image}
            alt="profileImage"
            className="border w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <h4 className={"font-medium text-base text-neutral-500"}>
              {currentUser.email}
            </h4>
            <span className={"font-medium text-sm text-neutral-400"}>
              Joined since {moment(currentUser.createdAt).format("MMM Do YY")}
            </span>
          </div>
        </div>
        <Link to={"/create"}>
          <button
            className={
              "bg-emerald-500 hover:bg-emerald-600 font-medium text-white transition-all rounded-full px-5 py-2"
            }
          >
            Create
          </button>
        </Link>
      </div>
      {/* Search Bar */}
      <div className={"flex flex-row"}>
        <div className={" flex flex-row items-center border rounded mr-4 px-3"}>
          <i className="ri-search-line"></i>
          <input
            type="text"
            className={"w-48 lg:w-60 bg-transparent outline-0 p-2 py-2"}
            placeholder={"Search"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          className={
            "bg-blue-500 hover:bg-blue-600 font-medium text-white transition-all rounded px-6"
          }
          onClick={searchByName}
        >
          {isLoading ? (
            <RiLoader4Fill className={"animate-spin mx-auto mx-3"} />
          ) : (
            "Search"
          )}
        </button>
      </div>
    </div>
  );

  const fetchDataByCurrentUser = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${apiKey}/notes/`, {
        headers: {
          "auth-token": jwtToken,
        },
      });
      setData(res.data.notes);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const data = fetchDataByCurrentUser();
  }, []);

  return (
    <div className={"w-11/12 lg:w-4/5 xl:w-3/4 mx-auto mt-8"}>
      {ProfileCreateSearch}
      <div className={"grid  md:grid-cols-3 gap-8"}>
        {isLoading && !error && (
          <>
            <AnimatedNoteCard />
            <AnimatedNoteCard />
            <AnimatedNoteCard />
          </>
        )}
        {!isLoading &&
          !error &&
          data &&
          data.length > 0 &&
          data.map((el) => <NoteCard key={el._id} data={el} />)}
      </div>
      {!isLoading && !error && data && data.length < 1 && (
        <div
          className={
            "bg-blue-100 font-medium text-blue-800 border-l-8 border-l-blue-700 rounded p-3"
          }
        >
          There are no blogs to display here. Please click create button and
          create one.
        </div>
      )}
      {!isLoading && error && (
        <div
          className={
            "bg-rose-100 font-medium text-rose-800 border-l-8 border-l-rose-700 rounded p-3"
          }
        >
          Something is wrong! Please refresh the page again. :(
        </div>
      )}
    </div>
  );
};
export default Home;
