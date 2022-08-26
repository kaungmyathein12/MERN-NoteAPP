import React from "react";

const NoteDetails = (props) => {
  return (
    <div className="p-5 pb-6">
      <div className="text-neutral-400 flex flex-row justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Today Tasks</h3>
        <button onClick={() => props.setDetail(false)}>
          <i className="ri-close-line text-2xl"></i>
        </button>
      </div>
      <p className="text-sm leading-loose text-neutral-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
        adipisci velit quia quam reprehenderit sit optio natus amet dolores
        quos, ab incidunt nam blanditiis nulla animi est debitis! At, quidem?
        <br />
        <br />- HTML, CSS, JS
        <br />- blah blah blah
        <br />
      </p>
    </div>
  );
};

export default NoteDetails;
