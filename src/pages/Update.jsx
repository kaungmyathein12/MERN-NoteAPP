import { useState, useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RiLoader4Fill } from "react-icons/ri";
import { useParams } from "react-router-dom";

const Update = () => {
  const { jwtToken } = useSelector((state) => state.users);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState();
  const titleRef = useRef();
  const editorRef = useRef();
  const tinyApikey = import.meta.env.VITE_REACT_TINY_API_KEY;
  const apikey = import.meta.env.VITE_REACT_API_URL;
  const fetchDataById = async () => {
    const res = await axios.get(`${apikey}/notes/${id}`, {
      headers: {
        "auth-token": jwtToken,
      },
    });
    setData(res.data.note);
  };

  const onClickHandler = async () => {
    setIsLoading(true);
    setSuccess(false);
    try {
      const data = {
        title: titleRef.current.value,
        description: editorRef.current.getContent(),
      };
      await axios.patch(`${apikey}/notes/${id}`, data, {
        headers: {
          "auth-token": jwtToken,
        },
      });
      setIsLoading(false);
      setSuccess(true);
    } catch (e) {
      setError(e);
      setIsLoading(false);
      console.log(e);
    }
  };
  useEffect(() => {
    const fetchData = fetchDataById();
  }, []);
  return (
    <div className={"w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/4 mx-auto mt-8"}>
      <h4 className={"font-semibold text-xl text-emerald-500 mb-4"}>Update</h4>
      {success && (
        <div
          className={
            "bg-emerald-100 text-emerald-600 font-semibold rounded p-3 mb-4"
          }
        >
          Congraulations! You've updated the blog. Let's go back to the Home
          Page. :)
        </div>
      )}
      {error && (
        <div
          className={"bg-rose-100 text-rose-600 font-semibold rounded p-3 mb-4"}
        >
          Something is wrong! Please try again. :(
        </div>
      )}
      {data && (
        <>
          <div>
            <input
              type={"text"}
              placeholder={"Enter your title"}
              className={
                "w-full text-lg border shadow outline-0 rounded mb-5 px-4 py-2"
              }
              ref={titleRef}
              defaultValue={data.title}
            />
            <Editor
              apiKey={tinyApikey}
              onInit={(evt, editor) => {
                return (editorRef.current = editor);
              }}
              initialValue={data.description}
              init={{
                menubar: false,
              }}
            />
          </div>

          <div>
            <button
              disabled={isLoading}
              onClick={onClickHandler}
              className={
                "bg-emerald-500 font-medium text-white rounded mt-4 " +
                (isLoading ? "opacity-50 px-8 py-3" : "px-4 py-2")
              }
            >
              {isLoading ? (
                <RiLoader4Fill className={"animate-spin"} />
              ) : (
                "Update"
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Update;
