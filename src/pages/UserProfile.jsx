import { useState } from "react";
import MainComponent from "../components/MainComponent";
import { itemData } from "../CardData";
const Card = (props) => {
  return (
    <div className="border-2 border-[#303030] bg-[#222] px-5 pt-5 pb-2 rounded-md">
      <div className="flex flex-row justify-between items-center mb-4">
        <h4 className="text-base font-medium">{props.title}</h4>
        <span className="text-neutral-400" style={{ fontSize: 12 }}>
          12 minutes ago
        </span>
      </div>
      <p className="leading-relaxed text-sm text-neutral-400 mb-4">
        {props.text.slice(0, 100)}...
      </p>
      <div className="flex flex-row gap-x-4">
        <button>
          <i className="ri-check-line text-xl text-green-500"></i>
        </button>
        <button>
          <i className="ri-close-line text-xl text-rose-500"></i>
        </button>
      </div>
    </div>
  );
};
const UserProfile = (props) => {
  const [data, setData] = useState(itemData);

  const searchBar = (
    <div className="mt-20 flex flex-row justify-start items-center gap-x-2">
      <div className="border border-neutral-500 rounded-md flex flex-row items-center">
        <i className="ri-search-line ml-3 text-sm text-neutral-400"></i>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent px-3 py-2 w-64 text-sm text-neutral-200  placeholder:text-neutral-400 outline-none"
        />
      </div>
      <button
        className=" border border-indigo-600 bg-indigo-600 hover:bg-indigo-700 transition-all px-4 py-2 rounded-md text-sm font-medium"
        onClick={() => {
          props.setCreate(true);
        }}
      >
        Create
      </button>
    </div>
  );

  const Notes = (
    <div className="mt-12">
      <div className="mb-6 flex flex-row items-center gap-x-5">
        <button className="px-4 py-2 bg-[#282828] rounded-md">
          <h3 className="font-semibold text-sm">Uncompleted</h3>
        </button>
        <button className="px-4 py-2 bg-[#282828] rounded-md">
          <h3 className="font-semibold text-sm">Completed</h3>
        </button>
        <button className="px-4 py-2 bg-[#282828] rounded-md">
          <h3 className="font-semibold text-sm">Deleted Notes</h3>
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 characters">
        {data &&
          data.map((el, index) => (
            <div key={el.id} onClick={() => props.setDetail(true)}>
              <Card title={el.title} text={el.text} />
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="mx-auto w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4 mt-12 text-start mb-28">
      <MainComponent />
      {searchBar}
      {Notes}
    </div>
  );
};

export default UserProfile;
