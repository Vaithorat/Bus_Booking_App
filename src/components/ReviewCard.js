import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const ReviewCard = (props) => {
  const person = props.person;
  return (
    <div className="flex justify-center gap-8 h-fit">
      {person.map((persons) => (
        <div
          key={persons.id}
          className="flex-col flex border-2 w-[20vw] rounded-xl bg-white shadow-2xl items-start p-2 px-6"
        >
          <div className=" flex justify-start items-center gap-2 pt-4">
            <div className="flex justify-center rounded-[90%] bg-red-300 font-bold text-white p-4 text-5xl w-[4vw]">
              {persons.symbol}
            </div>
            <div className="flex flex-col items-start">
              <div className="font-bold text-2xl">{persons.name}</div>
              <div>Customer since {persons.year}</div>
            </div>
          </div>
          <div className="flex items-center border-2 bg-green-600 px-2 py-1 my-2 gap-1 rounded-xl text-white">
            <div>
              <AiOutlineStar />
            </div>
            <div>{persons.rating}</div>
          </div>
          <div className="flex text-start">{persons.review}</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
