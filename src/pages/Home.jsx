import pf from "./../img/pf.png";
import { useNavigate } from "react-router-dom";
import NoteCard from "../components/NoteCard.jsx";
import { useSelector } from "react-redux";
import moment from "moment";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const { currentUser, jwtToken } = useSelector((state) => state.users);
  const naviagte = useNavigate();

  const [data, setData] = useState([]);
  const ProfileCreateSearch = (
    <div className={"flex flex-row justify-between items-center mb-14"}>
      <div className={"flex flex-row items-center"}>
        <div className={"flex flex-row items-center mr-6"}>
          <img
            src={pf}
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
        <button
          className={
            "bg-emerald-500 hover:bg-emerald-600 font-medium text-white transition-all rounded-full px-5 py-2"
          }
          onClick={() => naviagte("/create")}
        >
          Create
        </button>
      </div>
      <div className={"flex flex-row"}>
        <div className={" flex flex-row items-center border rounded mr-4 px-3"}>
          <i className="ri-search-line"></i>
          <input
            type="text"
            className={"w-60 bg-transparent outline-0 p-2 py-2"}
            placeholder={"Search"}
          />
        </div>
        <button
          className={
            "bg-blue-500 hover:bg-blue-600 font-medium text-white transition-all rounded px-6"
          }
        >
          Search
        </button>
      </div>
    </div>
  );
  const apiKey = import.meta.env.VITE_REACT_API_URL;
  const fetchDataByCurrentUser = async () => {
    try {
      const res = await axios.get(`${apiKey}/notes/`, {
        headers: {
          "auth-token": jwtToken,
        },
      });
      setData(res.data.notes);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const data = fetchDataByCurrentUser();
  }, []);

  return (
    <div className={"w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto mt-8"}>
      {ProfileCreateSearch}
      <div className={"grid grid-cols-3 gap-8"}>
        {data &&
          data.length > 0 &&
          data.map((el) => <NoteCard key={el._id} data={el} />)}
      </div>
    </div>
  );
};
export default Home;
