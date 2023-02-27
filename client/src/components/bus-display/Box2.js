import React from "react";

export const Box2 = ({ text }) => {
  return (
    <div className=" flex flex-col items-start justify-around w-full h-[15vh]  border-gray-300 ml-4">
      <div className="font-bold">{text}</div>
      <div className="w-full gap-4 flex">
        <div className="radio">
          <input type="checkbox" name="" id="" />
        </div>
        <label htmlFor="">Kolkata</label>
      </div>
      <div className="w-full gap-4 flex">
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
        </div>
        <label htmlFor="">Mumbai</label>
      </div>
      <div className="w-full gap-4 flex">
        <div className="radio">
          <input type="checkbox" name="" id="" />
        </div>
        <label htmlFor="">Delhi</label>
      </div>
    </div>
  );
};
