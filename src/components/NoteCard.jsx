import parse from "html-react-parser";
import { Link } from "react-router-dom";

const NoteCard = (props) => {
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
        <div className={"text-sm text-neutral-500 leading-relaxed"}>
          {parse(props.data.description)}
        </div>
      </div>
      <div>
        <Link to={`notes/detail/${props.data._id}`}>
          <button
            className={
              "bg-blue-500 hover:bg-blue-600 font-semibold text-white transition-all rounded px-4 py-1"
            }
          >
            Read
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoteCard;
