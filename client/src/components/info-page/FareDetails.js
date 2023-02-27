import React from "react";

const FareDetails = ({ price, onSubmitHandler }) => {
  const base = parseInt(price-100)
  return (
    <div className="w-full  border-2 border-black p-4 mt-14 rounded-lg">
      <div className="travel-details-heading" style={{ margin: 0 }}>
        <h3>Fare Details</h3>
      </div>
      <div className="border-b-2 border-black">
        <div className="flex justify-between my-4">
          <div>Base Fare</div>
          <div className="font-bold">{base}</div>
        </div>
        <div className="flex justify-between my-4">
          <div>Tax</div>
          <div className="font-bold">50</div>
        </div>
        <div className="flex justify-between my-4">
          <div>Offer Applied</div>
          <div className="font-bold">-150</div>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <div>Total Price</div>
        <div className="font-bold text-xl">
          {price}
        </div>
      </div>
      <div className="flex justify-center items-center" onClick={onSubmitHandler}>
        <button className="bg-orange-500 p-4 rounded-lg text-white text-xl font-bold">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default FareDetails;
