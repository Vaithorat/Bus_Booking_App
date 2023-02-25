import React from "react";

export const Card = ({ image, text1, text2 }) => {
  return (
    <div className="flex h-[30vh] pt-6 w-[14vw] justify-center items-center rounded-xl">
      <div className="flex-col h-24 mb-6">
        <img className="w-[12vw]" src={image} alt="bus" />
        <div className="text-xl font-bold justify-center items-center flex flex-col ">
          <div>{text1}</div>
          <div>{text2}</div>
        </div>
      </div>
    </div>
  );
};
