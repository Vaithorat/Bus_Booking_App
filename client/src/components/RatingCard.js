import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const RatingCard = (props) => {
  return (
    <div>
      <div className="rounded-xl overflow-hidden shadow-lg w-[35vh] mx-7 my-5 drop-shadow-md  bg-white p-3">
        <div className="flex justify-start items-center">
          <div className="font-bold text-white rounded-full flex items-center justify-center h-[70px] w-[70px] text-6xl bg-pink-300 ">
            {props.initial}
          </div>
          <div className="flex flex-col text-left pl-3">
            <div className="font-bold text-2xl ">{props.name}</div>
            <div>Customer since {props.since}</div>
          </div>
        </div>
        <div className="text-left flex p-2 items-center  mt-2">
          <div className="flex text-white items-center bg-green-700 p-1 rounded-md">
            <AiOutlineStar />
            <div className="ml-1">4.5</div>
          </div>
        </div>
        <div className="px-2 text-left">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
