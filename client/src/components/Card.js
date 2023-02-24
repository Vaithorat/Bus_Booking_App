import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className=" rounded-xl shadow-md w-[14vw] mx-7 my-5 border-2 drop-shadow-md h-fit ">
        <img
          className="w-full h-[20vh]"
          src={props.image}
          alt="bus"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{props.title}</div>
          <div>
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
