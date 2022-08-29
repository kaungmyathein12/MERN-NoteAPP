import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import parse from "html-react-parser";
import { RiLoader4Fill } from "react-icons/ri";

const Detail = () => {
  const { jwtToken } = useSelector((state) => state.users);
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isBlogLoading, setIsBlogLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_REACT_API_URL;
  const fetchDataById = async () => {
    setIsBlogLoading(true);
    const res = await axios.get(`${apiKey}/notes/${id}`, {
      headers: {
        "auth-token": jwtToken,
      },
    });
    setData(res.data.note);
    setIsBlogLoading(false);
  };

  const deleteNote = async () => {
    setIsLoading(true);
    try {
      await axios.delete(`${apiKey}/notes/${id}`, {
        headers: {
          "auth-token": jwtToken,
        },
      });
      setIsLoading(false);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = fetchDataById();
  }, []);
  return (
    <div className={"w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/4 mx-auto mt-8 p-5"}>
      {isBlogLoading && (
        <div className={"mb-2 animate-pulse"}>
          <div className={"h-5 bg-neutral-200 mb-2"}></div>
          <div className={"w-20 h-4 bg-neutral-200 mb-6"}></div>
          <div className={"h-4 bg-neutral-200 mb-2"}></div>
          <div className={"h-4 bg-neutral-200 mb-2"}></div>
          <div className={"h-4 bg-neutral-200 mb-2"}></div>
          <div className={"h-4 bg-neutral-200 mb-2"}></div>
        </div>
      )}
      {!isBlogLoading && data && (
        <>
          <div className={"flex flex-row items-start justify-between mb-1"}>
            <h2 className={"font-semibold text-xl text-neutral-600"}>
              {data.title}
            </h2>
            <button
              className={"flex flex-row items-center text-sm text-neutral-500"}
              onClick={() => navigate("/")}
            >
              <i className="ri-arrow-go-back-fill mr-2"></i>Back
            </button>
          </div>
          <span className={"font-medium text-sm text-blue-500"}>
            2 days ago
          </span>
          <hr className={"mt-4 mb-6"} />
          <div
            className={"text-neutral-500 leading-relaxed mb-6"}
            style={{ fontSize: "0.92rem" }}
          >
            {parse(data.description)}
          </div>
          <div>
            <Link to={`/notes/update/${data._id}`}>
              <button
                className={
                  "bg-emerald-500 hover:bg-emerald-600 text-white transition-all rounded mr-2 px-3 py-1"
                }
              >
                <i className="ri-edit-fill"></i>
              </button>
            </Link>
            <button
              disabled={isLoading}
              className={
                "bg-rose-500 hover:bg-rose-600 text-white transition-all rounded mr-2 px-3 py-1"
              }
              onClick={deleteNote}
            >
              {isLoading ? (
                <RiLoader4Fill className={"animate-spin"} />
              ) : (
                <i className="ri-delete-bin-fill"></i>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Detail;
