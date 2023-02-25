import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FareDetailsCard = () => {
  const busData = useSelector((state) => state.busData);
  return (
    <div className="basis-1/4 ml-3">
      <div className="p-4 border-2 rounded-md">
        <div className="text-left font-bold">Fare Details</div>
        <div className="flex justify-between my-2">
          <div className="text-sm text-slate-600">Base Fare</div>
          <div className="font-bold">&#8377;{busData.busLocation.filterPrice-200}</div>
        </div>
        <div className="flex justify-between my-2">
          <div className="text-sm text-slate-600">Tax</div>
          <div className="font-bold">&#8377;150</div>
        </div>
        <div className="flex justify-between my-2">
          <div className="text-sm text-slate-600">Offer Applied</div>
          <div className="font-bold">&#8377;50</div>
        </div>
        <div className="flex justify-between my-2 mt-8 pt-4 border-t-2">
          <div className="text-sm text-slate-600">Total Price</div>
          <div className="font-bold text-2xl">&#8377;{busData.busLocation.filterPrice}</div>
        </div>
        <button
          className="bg-[#FF8700] text-white font-[Poppins] mt-6 py-2 px-8 w-full rounded  hover:bg-indigo-400 
    duration-500"
        >
          <Link to="/payment">Proceed to Payment</Link>
        </button>
      </div>
    </div>
  );
};

export default FareDetailsCard;
