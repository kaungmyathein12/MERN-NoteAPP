const AnimatedNoteCard = () => {
  return (
    <div className={"border rounded px-5 py-4"}>
      <div className="h-6 bg-neutral-200 animate-pulse mt-1 mb-5"></div>
      <div className="mb-5">
        <div className={"h-4 bg-neutral-200 animate-pulse mb-2"}></div>
        <div className={"w-3/5 h-4 bg-neutral-200 animate-pulse mb-2"}></div>
        <div className={"h-4 bg-neutral-200 animate-pulse mb-2"}></div>
        <div className={"h-4 bg-neutral-200 animate-pulse mb-2"}></div>
      </div>
      <div>
        <div className={"w-16 h-7 bg-neutral-200 animate-pulse"}></div>
      </div>
    </div>
  );
};
export default AnimatedNoteCard;
