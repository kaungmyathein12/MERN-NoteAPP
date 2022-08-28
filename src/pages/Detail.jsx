const Detail = () => {
  return (
    <div
      className={"w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/4 mx-auto mt-8 p-5 border"}
    >
      <div className={"flex flex-row items-start justify-between mb-1"}>
        <h2 className={"font-semibold text-xl text-neutral-600"}>Today Task</h2>
        <button
          className={"flex flex-row items-center text-sm text-neutral-500"}
        >
          <i className="ri-arrow-go-back-fill mr-2"></i>Back
        </button>
      </div>
      <span className={"font-medium text-sm text-blue-500"}>2 days ago</span>
      <hr className={"mt-4 mb-6"} />
      <p className={"text-sm text-neutral-500 leading-relaxed mb-6"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        commodi illo in laborum, perspiciatis possimus quos soluta tempore
        totam! Adipisci alias aspernatur beatae eligendi exercitationem
        inventore ipsa nesciunt non quo.
      </p>
      <div>
        <button
          className={
            "bg-emerald-500 hover:bg-emerald-600 text-white transition-all rounded mr-2 px-3 py-1"
          }
        >
          <i className="ri-edit-fill"></i>
        </button>
        <button
          className={
            "bg-rose-500 hover:bg-rose-600 text-white transition-all rounded mr-2 px-3 py-1"
          }
        >
          <i className="ri-delete-bin-fill"></i>
        </button>
      </div>
    </div>
  );
};
export default Detail;
