import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const BusCard = () => {
  return (
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
        <button className="bg-orange-400 rounded-md text-white mx-9 p-2 px-8 font-semibold">View Seat</button>
      </div>
    </div>
  );
};

export default BusCard;
