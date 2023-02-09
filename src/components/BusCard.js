import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

const BusCard = () => {
  const [selection, setSelection] = useState("All");
  const handleChange = (e) => {
    setSelection(e.target.value);
  };
  return (
    <>
      <div className="flex">
        <div className="border-2 pl-6 w-[50vw] flex flex-col mt-[12vh] ml-10 rounded-md h-[22vh] items-start">
          <div className="flex mt-3 items-center gap-2">
            <div className="font-bold text-xl">InterCity Smart Bus</div>
            <div className="flex items-center border-2 bg-green-600 justify-center gap-1 rounded-xl h-[4vh] text-white w-[3vw]">
              <div>
                <AiOutlineStar />
              </div>
              <div>4.5</div>
            </div>
            <div className="text-gray-400">Ratings</div>
          </div>
          <div className="text-sm my-2 ">
            A/C Sleeper (2+1) | 24 Seats Left | 0 Window seats
          </div>
          <div className="font-bold text-xl flex justify-center items-center gap-2 mt-2">
            22:45, 16 Nov
            <div className="text-gray-400 text-sm"> --- 07 hrs 59 min --- </div>
            06:20, 17 NOV
          </div>
          <ul className="flex justify-start gap-6 mt-11 text-blue-400 font-bold mb-2">
            <li>Live Tracking</li>
            <li>Policies</li>
            <li>Photos</li>
            <li>Amenities</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="border-2 px-6 w-fit flex flex-col mt-[12vh] rounded-md h-[22vh] gap-2 justify-center items-center">
          <div className="font-semibold text-lg">Trip Cost</div>
          <div className="text-gray-400 text-xs">Starting from</div>
          <div className="font-bold text-4xl">₹ 899</div>
          <button className="bg-orange-400 rounded-md text-white mx-9 p-2 px-8 font-semibold">
            View Seat
          </button>
        </div>
      </div>
      <div className="border-2 ml-10 ">
        <div className="ml-4 font-bold text-2xl mt-4">Select Seats</div>
        <div className="flex justify-start gap-3 items-center ml-4">
          <div className="text-xl text-gray-400 font-bold">Seat Price</div>
          <label className="shadow-lg p-2 px-4 flex">
            <input
              type="radio"
              value="All"
              checked={selection === "All"}
              onChange={handleChange}
            />
            <div className="ml-2">All</div>
          </label>
          <label className="shadow-lg p-2 px-4 flex ml-14">
            <input
              type="radio"
              value="699"
              checked={selection === "699"}
              onChange={handleChange}
            />
            <div className="ml-2">₹699</div>
          </label>
          <label className="shadow-lg p-2 px-4 flex ml-14">
            <input
              type="radio"
              value="899"
              checked={selection === "899"}
              onChange={handleChange}
            />
            <div className="ml-2">₹899</div>
          </label>
          <label className="shadow-lg p-2 px-4 flex ml-14">
            <input
              type="radio"
              value="1199"
              checked={selection === "1199"}
              onChange={handleChange}
            />
            <div className="ml-2">₹1199</div>
          </label>
          <label className="shadow-lg p-2 px-4 flex ml-14">
            <input
              type="radio"
              value="1599"
              checked={selection === "1599"}
              onChange={handleChange}
            />
            <div className="ml-2">₹1599</div>
          </label>
          <div className="flex mr-12 mb-4 ml-[10vw]">
            <ul>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 flex rounded-sm "></div>Vacant
                Seat
              </div>
              <div className="flex items-center  gap-2">
                <div className="w-4 h-4 border-2 flex bg-gray-600 rounded-sm"></div>
                Reserved Seats
              </div>
              <div className="flex items-center  gap-2">
                <div className="w-4 h-4 border-2 flex bg-blue-800 rounded-sm"></div>
                Selected Seats
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusCard;
