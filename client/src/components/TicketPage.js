import React from "react";
import BusInfoCard from "./BusInfoCard";
const check = require("../images/check.png");

const TicketPage = () => {
  const bookingTitles = ["Ticket ID:","Payment ID:","Passenger Details:","Contact Details:"]
  const bookingValues= ["asd21","2325-32E3-7H54","Vaibhav, M, 26","999999999"]
  return (
    <div className="mx-64 border-4 flex=col rounded-md shadow-xl">
      <div className="flex justify-center mt-2">
      <img src={check} alt="check" className="w-20" />
      </div>
      <div className="font-bold text-2xl pb-4">Booking has been confirmed</div>
      <div className="flex justify-center text-slate-600">
        <div className="text-right mx-2">
          {bookingTitles.map((bookingTitle,id)=>(
            <div key={id} className="mb-2">{bookingTitle}</div>
          ))}
        </div>
        <div className="text-left mx-2">
          {bookingValues.map((bookingValue,id)=>(
            <div key={id} className="mb-2">{bookingValue}</div>
          ))}
        </div>
      </div> 
      <div className="mx-[20vw] my-8 mx-">
        <BusInfoCard />
      </div>
    </div>
  );
};

export default TicketPage;
