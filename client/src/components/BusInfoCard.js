import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineStar } from "react-icons/ai";
const BusInfoCard = () => {
  const busData = useSelector((state) => state.busData);
  const fromTo = useSelector((state) => state.fromTo);
  return (
    <div className="border-2 rounded-md">
      <div className="text-left p-4">
        <div className="flex ">
          <div className="font-bold">
            <div className="flex">
              <div className="text-xl">{busData.busLocation.busName} </div>
              <div className="flex  items-center rounded-md text-white ml-2">
                <div className="bg-green-600 flex items-center p-1 rounded">
                  <div>
                    <AiOutlineStar />
                  </div>
                  <div>{busData.busLocation.busRating}</div>
                </div>
                <div className="px-2 text-gray-400">Ratings</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-2 text-xs text-slate-500">
          <div>
            <span className="border-r pr-2 border-slate-600">
              AC Sleeper (2+1)
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
            <span className=" pr-2 text-lg font-semibold">
              {busData.busLocation.busFromTime},{" "}
              {busData.busLocation.busFromDate}
            </span>
          </div>
          <div>
            <span className="px-2 text-s text-slate-500 text-center align-middle">
              ----------{busData.busLocation.busTimeInterval}---------
            </span>
          </div>
          <div>
            <span className="px-2 text-lg font-semibold">
              {busData.busLocation.busToTime}, {busData.busLocation.busToDate}
            </span>
          </div>
        </div>
        <div className="flex my-2">
          <div className="text-sm">
            <div className="font-semibold">{fromTo.INIT_STATE.From}</div>
            <div className="text-gray-400">Taxi Stand</div>
          </div>
          <div className="text-sm ml-60">
            <div className="font-semibold">{fromTo.INIT_STATE.To}</div>
            <div className="text-gray-400">Taxi Stand</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusInfoCard;
