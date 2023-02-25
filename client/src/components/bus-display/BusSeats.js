import React from "react";
import "../../styles/Bus-display/busseat.css";
import BusTicket from "./BusTicket";
import PriceTags from "./PriceTags";
import Seats from "./Seats";

const BusSeats = ({ seats, selectedSeats, selectedBus }) => {
  return (
    <div className="bus-seats">
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
      <div className="bus-seats-maincontainer">
        <div className="bus-seat-flex">
          <Seats seats={seats} selectedSeats={selectedSeats} />
        </div>
        <BusTicket selectedBus={selectedBus} />
      </div>
    </div>
  );
};

export default BusSeats;
