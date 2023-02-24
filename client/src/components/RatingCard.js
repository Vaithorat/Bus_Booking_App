import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const RatingCard = (props) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-[50vh] mx-7 my-5 drop-shadow-md md:my-1 bg-white p-3">
        <div className="flex justify-start">
          <div className="flex justify-center rounded-[90%] bg-red-300 font-bold text-white p-4 text-5xl w-[4vw] ">
            {props.initial}
          </div>
          <div className="flex flex-col justify-center text-left pl-3">
            <div className="font-bold text-3xl ">{props.name}</div>
            <div className="text-gray-500">Customer since {props.since}</div>
          </div>
        </div>
        <div className="flex items-center border-2 w-fit bg-green-600 px-2 py-1 my-2 gap-1 rounded-xl text-white">
            <div>
              <AiOutlineStar />
            </div>
            <div>{props.rating}</div>
          </div>
        <div className="px-2  text-left">
          <p className="text-gray-500 text-base">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
