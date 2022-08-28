import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Update = () => {
  const editorRef = useRef();
  const apikey = import.meta.env.VITE_REACT_TINY_API_KEY;
  const onClickHandler = () => {
    const data = {
      description: editorRef.current.getContent(),
    };
    console.log(data);
  };
  return (
    <div className={"w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/4 mx-auto mt-8"}>
      <Editor
        apiKey={apikey}
        onInit={(evt, editor) => {
          return (editorRef.current = editor);
        }}
        initialValue="Enter your Text"
        init={{
          menubar: false,
        }}
      />
      <button
        onClick={onClickHandler}
        className={
          "bg-emerald-500 font-medium text-white rounded mt-4 px-4 py-2"
        }
      >
        Update
      </button>
    </div>
  );
};
export default Update;
