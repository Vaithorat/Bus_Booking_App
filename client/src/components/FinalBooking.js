import React from "react";
import BusInfoCard from "./BusInfoCard";
import check from "../images/check.png";
const FinalBooking = () => {
  const bookingTitles = [
    "Ticket ID:",
    "Payment ID:",
    "Passenger Details:",
    "Contact Details:",
  ];
  const bookingValues = [
    "56UHRFT",
    "2545-326E3-7HHH",
    "Megha Agrawal, F, 25 yrs",
    "9121999999",
  ];
  return (
    <div className="mx-64 border-4 rounded-md">
      <div className="text-[#1FC84D] text-6xl mt-4 flex justify-center">
        <img src={check} alt="checkmark" className="w-[5vw]" />
      </div>
      <div className="font-bold text-2xl pb-4">Booking has been confirmed</div>
      <div className="flex justify-center  ">
        <div className="text-right mx-2">
          {bookingTitles.map((bookingTitle, id) => (
            <div key={id} className="mb-2">
              {bookingTitle}
            </div>
          ))}
        </div>
        <div className="text-left mx-2">
          {bookingValues.map((bookingValue, id) => (
            <div key={id} className="mb-2">
              {bookingValue}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-[20vw] my-8">
        <BusInfoCard />
      </div>
    </div>
  );
};

export default FinalBooking;
