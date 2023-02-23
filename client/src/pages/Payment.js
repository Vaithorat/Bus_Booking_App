import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Ticket from "../components/Ticket";
const check = require("../images/check.png");

const Payment = () => {
  const bookingTitles = [
    "Ticket ID:",
    "Payment ID:",
    "Passenger Details:",
    "Contact Details:",
  ];
  const bookingValues = [
    "80986F",
    "ASD0-12SS-121A",
    "Vaibhav Thorat, M, 26",
    "9999999999",
  ];
  return (
    <div className="flex-col items-center justify-center ">
      <div>
        <Navbar />
      </div>
      <div className="flex-col flex border-2 mx-[24vw] mt-8 rounded-xl shadow-xl">
        <div className="text-6xl mt-4 flex justify-center">
          <img src={check} alt="check" className="w-20" />
        </div>
        <div className="flex justify-center mt-2 ">
          <div>
            {bookingTitles.map((bookingTitle, id) => (
              <div key={id} className="my-2">
                {bookingTitle}
              </div>
            ))}
          </div>
          <div className="mx-2">
            {bookingValues.map((bookingValue, id) => (
              <div key={id} className="my-2">
                {bookingValue}
              </div>
            ))}
          </div>
        </div>
        <div className="w-content flex justify-center mb-6">
          <Ticket />
        </div>
      </div>
      <div className="mt-[15vh]">
        <Footer />
      </div>
    </div>
  );
};

export default Payment;
