import React, { useState } from "react";

const MyEditor = (props) => {
  const [title, setTitle] = useState("");
  const [textValue, setTextValue] = useState("");
  const [changeHTMLString, setChangeHTMLString] = useState([]);

  const createHTML = () => {
    let split = [];
    split = textValue.split("\n").join("<br />").split(" ");
    setChangeHTMLString(() => split.join(" ").toString());
  };
  const send = () => {
    console.log(changeHTMLString);
  };

  const editorBtn = (
    <div className="text-neutral-400 flex flex-row justify-between items-center">
      <div className="text-neutral-400 flex flex-row items-center gap-x-2">
        <div className="bg-neutral-700 px-4 font-semibold py-1">NoteAPP</div>
        <button className="font-bold text-lg px-2 hover:bg-neutral-800">
          B
        </button>
        <button className="font-medium  px-2 hover:bg-neutral-800">h1</button>
        <button className="font-medium  px-2 hover:bg-neutral-800">h2</button>
        <button className="font-medium text-sm px-2 py-1 hover:bg-neutral-800">
          Normal
        </button>
      </div>
      <button onClick={() => props.setCreate(false)}>
        <i className="ri-close-line text-2xl"></i>
      </button>
    </div>
  );
  const editorTitleAndTextArea = (
    <div className="mt-7 px-1">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-lg font-medium bg-transparent outline-none mb-5"
        placeholder="Enter your note title"
      />
      <textarea
        className="w-full text-base resize-none bg-transparent outline-none"
        placeholder="Enter your note"
        style={{ minHeight: 250 }}
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.code === "Space") {
            createHTML();
          } else if (e.key === "Enter") {
            createHTML();
          }
        }}
        onMouseMove={() => {
          createHTML();
        }}
      ></textarea>
      <button
        className="bg-indigo-600 hover:bg-indigo-800 -ml-2 px-4 py-2 text-sm font-medium rounded-md mt-2"
        onClick={send}
      >
        Add Note
      </button>
    </div>
  );

  return (
    <div className="p-5">
      <div>
        {editorBtn}
        {editorTitleAndTextArea}
      </div>
    </div>
  );
};

export default MyEditor;
