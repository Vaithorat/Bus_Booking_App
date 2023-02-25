import React from "react";

const Box = ({ name, text, text2, text3, search }) => {
  return (
    <div className=" flex flex-col items-start justify-around w-full h-[15vh]  border-gray-300 ml-4">
      <div>
        <div className="font-bold">{name}</div>
      </div>
      <div className="w-full gap-4 flex">
        <input type="checkbox" name="morning" id="" />
        <label htmlFor="">{text}</label>
      </div>
      <div className="w-full  gap-4 flex">
        <input type="checkbox" name="afternoon" id="" />
        <label htmlFor="">{text2}</label>
      </div>
      <div className="w-full  gap-4 flex">
        <input type="checkbox" name="evening" id="" />
        <label htmlFor="">{text3}</label>
      </div>
    </div>
  );
};

export default Box;
