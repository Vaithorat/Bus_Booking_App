import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FareDetails = () => {
  const busData = useSelector((state) => state.busData);
  return (
    <div className="basis-1/4 ml-3">
      <div className="p-4 border-2 rounded-md">
        <div className="text-left text-3xl font-bold">Fare Details</div>
        <div className="flex justify-between my-2">
          <div className="text-lg ">Base Fare</div>
          <div className="font-bold">
            &#8377;{busData.busLocation.filterPrice - 200}
          </div>
        </div>
        <div className="flex justify-between my-2">
          <div className="text-lg ">Tax</div>
          <div className="font-bold">&#8377;150</div>
        </div>
        <div className="flex justify-between my-2">
          <div className="text-lg ">Offer Applied</div>
          <div className="font-bold">&#8377;50</div>
        </div>
        <div className="flex justify-between my-2 mt-8 pt-4 border-t-2">
          <div className="text-xl font-bold ">Total Price</div>
          <div className="font-bold text-2xl">
            &#8377;{busData.busLocation.filterPrice}
          </div>
        </div>
        <button className="bg-orange-500 text-white mt-6 py-3 text-xl font-bold px-8 w-full rounded ">
          <Link to="/payment">Proceed to Payment</Link>
        </button>
      </div>
    </div>
  );
};

export default FareDetails;
