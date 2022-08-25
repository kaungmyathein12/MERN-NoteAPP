import React from "react";
import "react-quill/dist/quill.snow.css";

const MyEditor = (props) => {
  return (
    <div className="p-5">
      <div>
        <div className="text-neutral-400 flex flex-row justify-between items-center">
          <div className="text-neutral-400 flex flex-row items-center gap-x-2">
            <div className="bg-neutral-700 px-4 font-semibold py-1">
              NoteAPP
            </div>
            <button className="font-bold text-lg px-2 hover:bg-neutral-800">
              B
            </button>
            <button className="font-medium  px-2 hover:bg-neutral-800">
              h1
            </button>
            <button className="font-medium  px-2 hover:bg-neutral-800">
              h2
            </button>
            <button className="font-medium text-sm px-2 py-1 hover:bg-neutral-800">
              Normal
            </button>
          </div>
          <button onClick={() => props.setCreate(false)}>
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>
        <div className="mt-5 px-1">
          <input
            type="text"
            className="w-full text-lg font-semibold bg-transparent outline-none mb-4"
            placeholder="Title"
          />
          <textarea
            className="w-full text-base resize-none bg-transparent outline-none"
            placeholder="Enter your note"
            style={{ minHeight: 300 }}
          ></textarea>
          <button className="bg-indigo-600 hover:bg-indigo-800 px-4 py-1 rounded-md">
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEditor;
