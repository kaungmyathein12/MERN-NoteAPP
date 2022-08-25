import pf from "./../img/pf.png";

const UserProfile = (props) => {
  return (
    <div
      className={
        props.cardStyle +
        " bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 border-none"
      }
    >
      <img
        src={pf}
        alt=""
        className="w-12 h-12 object-cover object-center rounded-full"
      />
      <div>
        <h4 className="font-medium">Kaung Myat Hein</h4>
        <span className={props.spanStyle + " text-[#fff]"}>
          kaungmyathein.dev
        </span>
      </div>
    </div>
  );
};

const CustomCardForUser = (props) => {
  return (
    <div className={props.cardStyle + " bg-neutral-900"}>
      <div className="px-3 py-2 rounded bg-neutral-800">
        <i className={props.icon + " text-2xl text-neutral-200"}></i>
      </div>
      <div>
        <h4 className="font-medium">{props.count}</h4>
        <span className={props.spanStyle}>{props.title}</span>
      </div>
    </div>
  );
};

const MainComponent = () => {
  const cardStyle =
    "flex flex-row items-center gap-x-5 border border-neutral-500 rounded-md px-5 py-4";
  const spanStyle = "font-medium text-xs text-neutral-400";
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <UserProfile cardStyle={cardStyle} spanStyle={spanStyle} />
      <CustomCardForUser
        cardStyle={cardStyle}
        spanStyle={spanStyle}
        icon="ri-folder-open-line"
        count={42}
        title="Total Notes"
      />
      <CustomCardForUser
        cardStyle={cardStyle}
        spanStyle={spanStyle}
        icon="ri-delete-bin-line"
        count={2}
        title="Deleted Notes"
      />
    </div>
  );
};

export default MainComponent;
