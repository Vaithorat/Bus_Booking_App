import React from "react";

const FareDetails = () => {
  return (
    <div className="border-2 flex flex-col items-center w-[26vw]">
      <h1>Fare Details</h1>
      <div className="flex">
        <div>Base Fare</div>
        <div>799</div>
      </div>
      <div className="flex">
        <div>Tax</div>
        <div>150</div>
      </div>
      <div className="flex">
        <div>Offer Applied</div>
        <div>50</div>
      </div>
      <div className="flex">
        <div>Total Price</div>
        <div>899</div>
      </div>
      <button className="bg-orange-400 text-white p-4 w-[20vw] font-bold text-xl rounded-xl mt-4">
        Proceed to Book
      </button>
    </div>
  );
};

export default FareDetails;
