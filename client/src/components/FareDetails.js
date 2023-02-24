import React from "react";
import { Link } from "react-router-dom";

const FareDetailsCard = () => {
  return (
    <div className="basis-1/4 ml-3">
      <div className="p-4 border-2 rounded-md">
        <div className="text-left font-bold text-2xl">Fare Details</div>
        <div className="flex justify-between my-2">
          <div>Base Fare</div>
          <div className="font-bold">₹799</div>
        </div>
        <div className="flex justify-between my-2">
          <div>Tax</div>
          <div className="font-bold">₹150</div>
        </div>
        <div className="flex justify-between my-2">
          <div>Offer Applied</div>
          <div className="font-bold">₹50</div>
        </div>
        <div className="flex justify-between my-2 mt-8 pt-4 border-t-2">
          <div className="  text-xl font-bold">Total Price</div>
          <div className="font-bold text-2xl">₹899</div>
        </div>
        <button className="bg-orange-500  text-white font-bold text-xl mt-6 py-4 px-8 w-full rounded ">
          <Link to="/payment">Proceed to Payment</Link>
        </button>
      </div>
    </div>
  );
};

export default FareDetailsCard;
