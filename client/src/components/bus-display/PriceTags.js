import React from "react";

const PriceTags = () => {
  return (
    <div className="flex gap-4">
      <div className=" ml-8 rounded-lg border-2 flex gap-2 border-gray-300 px-4 shadow-xl">
        <input type="radio" name="" id="" />
        <label htmlFor="">All</label>
      </div>
      <div className="rounded-lg border-2 flex gap-2 border-gray-300 px-4 shadow-xl">
        <input type="radio" name="" id="" />
        <label htmlFor="">699</label>
      </div>
      <div className="rounded-lg border-2 flex gap-2 border-gray-300 px-4 shadow-xl">
        <input type="radio" name="" id="" />
        <label htmlFor="">899</label>
      </div>
      <div className="rounded-lg border-2 flex gap-2 border-gray-300 px-4 shadow-xl">
        <input type="radio" name="" id="" />
        <label htmlFor="">1199</label>
      </div>
      <div className="rounded-lg border-2 flex gap-2 border-gray-300 px-4 shadow-xl">
        <input type="radio" name="" id="" />
        <label htmlFor="">1599</label>
      </div>
    </div>
  );
};

export default PriceTags;
