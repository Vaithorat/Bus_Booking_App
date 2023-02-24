import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const BusInfoCard = () => {
  return (
    <div className="border-2 rounded-md">
      <div className="text-left p-4">
        <div className="flex ">
          <div className="font-bold">
            <div className="flex items-center">
            <span className="text-xl">InterCity Smart Bus </span>
              <div className="bg-green-700 text-md flex items-center w-fit rounded-md text-white p-1 ml-2">
                <AiOutlineStar className="mr-1" /> 4.5
              </div>
              <div className="px-2 text-gray-400 ">Ratings</div>
            </div>
          </div>
        </div>
        <div className="flex py-2 text-xs text-slate-500">
          <div>
            <span className="border-r pr-2 border-slate-600">
              AC Sleeper (2-1)
            </span>
          </div>
          <div>
            <span className="border-r px-2 border-slate-600">
              24 seats left
            </span>
          </div>
          <div>
            <span className="px-2">0 windows seat</span>
          </div>
        </div>
        <div className="flex py-2 ">
          <div>
            <span className=" pr-2 text-lg font-semibold">22:45, 16 NOV</span>
          </div>
          <div>
            <span className="px-2 text-s text-slate-500 text-center align-middle">
              ----------07 hrs 59 mins---------
            </span>
          </div>
          <div>
            <span className="px-2 text-lg font-semibold">6:20, 17 NOV</span>
          </div>
        </div>
        <div className="flex my-2">
          <div className="text-sm">
            <div className="font-semibold">Pune</div>
            <div className="text-gray-400">Taxi Stand</div>
          </div>
          <div className="text-sm ml-60">
            <div className="font-semibold">Kolkata</div>
            <div className="text-gray-400">Taxi Stand</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusInfoCard;
