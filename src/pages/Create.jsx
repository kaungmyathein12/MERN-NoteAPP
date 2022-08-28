import { useState, useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RiLoader4Fill } from "react-icons/ri";
const Create = () => {
  const { jwtToken } = useSelector((state) => state.users);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);
  const titleRef = useRef();
  const editorRef = useRef();
  const tinyApikey = import.meta.env.VITE_REACT_TINY_API_KEY;
  const apikey = import.meta.env.VITE_REACT_API_URL;
  const onClickHandler = async () => {
    setIsLoading(true);
    setSuccess(false);
    try {
      const data = {
        title: titleRef.current.value,
        description: editorRef.current.getContent(),
      };
      const res = await axios.post(`${apikey}/notes/create`, data, {
        headers: {
          "auth-token": jwtToken,
        },
      });
      setIsLoading(false);
      setSuccess(true);
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };
  useEffect(() => {
    titleRef.current.focus();
  }, []);
  return (
    <div className={"w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/4 mx-auto mt-8"}>
      <h4 className={"font-semibold text-xl text-blue-500 mb-4"}>Create</h4>
      {success && (
        <div
          className={
            "bg-emerald-100 text-emerald-600 font-semibold rounded p-3 mb-4"
          }
        >
          Congraulations! You've just created a new blog. Let's go back to the
          Home Page. :)
        </div>
      )}
      {error && (
        <div
          className={
            "bg-emerald-100 text-emerald-600 font-semibold rounded p-3 mb-4"
          }
        >
          Something is wrong! Please try again. :(
        </div>
      )}
      <div>
        <input
          type={"text"}
          placeholder={"Enter your title"}
          className={
            "w-full text-lg border shadow outline-0 rounded mb-5 px-4 py-2"
          }
          ref={titleRef}
        />
        <Editor
          apiKey={tinyApikey}
          onInit={(evt, editor) => {
            return (editorRef.current = editor);
          }}
          initialValue="Enter your Text"
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
            "bg-blue-500 font-medium text-white rounded mt-4 " +
            (isLoading ? "opacity-50 px-8 py-3" : "px-4 py-2")
          }
        >
          {isLoading ? <RiLoader4Fill className={"animate-spin"} /> : "Submit"}
        </button>
      </div>
    </div>
  );
};
export default Create;
