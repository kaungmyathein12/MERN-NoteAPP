import parse from "html-react-parser";

const NoteCard = (props) => {
  console.log(props);
  return (
    <div className={"border rounded px-5 py-4"}>
      <div className={"flex flex-row justify-between items-center mb-4"}>
        <h3 className={"font-semibold text-lg text-neutral-600"}>
          {props.data.title}
        </h3>
        <div className={"font-bold text-neutral-400"}>
          <i className="ri-more-2-fill -mr-2"></i>
          <i className="ri-more-2-fill"></i>
        </div>
      </div>
      <div className={"h-24 mb-4 overflow-hidden"}>
        <p className={"text-sm text-neutral-500 leading-relaxed"}>
          {parse(props.data.description)}
        </p>
      </div>
      <div>
        <button
          className={"bg-blue-500 font-semibold text-white rounded px-4 py-1"}
        >
          Read
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
