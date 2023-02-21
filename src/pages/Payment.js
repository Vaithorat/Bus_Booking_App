import React from "react";
import Navbar from "../components/Navbar";
import Ticket from "../components/Ticket";
const check = require("../images/check.png");
const Payment = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-col items-center flex mt-20 ">
        <div className="w-20 flex ">
          <img src={check} alt="check" />
        </div>
        <div className=" flex flex-col items-center gap-4 ">
          <div className="text-3xl font-bold">Booking has been confirmed</div>
          <div>Ticket Id: 65UASDT</div>
          <div>Payment Id: 2545-12EE-23211</div>
          <div>Passenger Details: Vaibhav Thorat, M, 26 yrs</div>
          <div>Contact Details : 999999999</div>
        </div>
        <div>
        <Ticket />
        </div>
      </div>
    </div>
  );
};

export default Payment;
