import React from "react";
import BusTicket from "./BusTicket";
import PriceTags from "./PriceTags";
import Seats from "./Seats";

const BusSeats = ({ seats, selectedSeats, selectedBus }) => {
  return (
    <div className=" w-full p-3 border-t-2 border-black">
      <div className="mt-4">
        <div className="text-lg font-bold">Select Seats</div>
      </div>
      <div>
        <div className="flex mt-4">
          <div>
            <div>Seat Price</div>
          </div>
          <PriceTags />
        </div>
      </div>
      <div className=" w-full flex py-2">
        <div className="w-[60%]">
          <Seats seats={seats} selectedSeats={selectedSeats} />
        </div>
        <BusTicket selectedBus={selectedBus} />
      </div>
    </div>
  );
};

export default BusSeats;
