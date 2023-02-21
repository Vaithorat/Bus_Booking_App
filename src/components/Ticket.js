import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const Ticket = () => {
  return (
    <div className="border-2 pl-8 w-full flex flex-col mt-6 mx-10 rounded-md h-[22vh] items-start">
      <div className="flex mt-3 items-center gap-2">
        <div className="font-bold text-xl">IntrCity SmartBus</div>
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
        22:45, 16 NOV
        <div className="text-gray-400 text-sm">--- 07 hrs 59min ---</div>
        06:20, 17 NOV
      </div>
      <div className="flex gap-[16vw] font-bold text-gray-400">
        <div>Pune</div>
        <div>Mumbai</div>
      </div>
    </div>
  );
};

export default Ticket;
