import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="rounded-2xl shadow-xl mx-7 my-51 w-[15vw] h-[28vh]">
        <img
          className="w-full h-40"
          src={props.imageURL}
          alt="bus"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
