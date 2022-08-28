import pf from "./../img/pf.png";
const Card = (props) => {
  return (
    <div className={"border rounded px-5 py-4"}>
      <div className={"flex flex-row justify-between items-center mb-4"}>
        <h3 className={"font-semibold text-lg text-neutral-600"}>Today Task</h3>
        <div className={"font-bold text-neutral-400"}>
          <i className="ri-more-2-fill -mr-2"></i>
          <i className="ri-more-2-fill"></i>
        </div>
      </div>
      <div className={"h-24 mb-4 overflow-hidden"}>
        <p className={"text-sm text-neutral-500 leading-relaxed"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          exercitationem harum, ipsa laborum tempora vel voluptatem? Cum
          cupiditate dolorum ea eum ex facere impedit laboriosam, laborum libero
          nobis perspiciatis placeat.
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
const Home = () => {
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
              kaungmyathein.dev
            </h4>
            <span className={"font-medium text-sm text-neutral-400"}>
              Joined since 2003
            </span>
          </div>
        </div>
        <button
          className={
            "bg-emerald-500 hover:bg-emerald-600 font-medium text-white transition-all rounded-full px-5 py-2"
          }
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
  return (
    <div className={"w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto mt-8"}>
      {ProfileCreateSearch}
      <div className={"grid grid-cols-3 gap-8"}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default Home;
