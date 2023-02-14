import React, { useState } from "react";
import BusCard from "./BusCard";

const Bus = () => {
  // eslint-disable-next-line no-unused-vars
  const [busData, setBusData] = useState([
    {
      name: "InterCity Smart Bus",
      rating: "4.5",
      type: "A/C Sleeper (2+1)",
      seats: "24",
      windowSeats: "0",
      depTime: "22:45",
      depDate: "16 Nov",
      duration: "07 hrs 59 min",
      arrTime: "06:20",
      arrDate: "17 Nov",
      id: 1,
      price: 899,
      depLocation:"Pune",
      arrLocation:"Mumbai",
      depPoint:"Pune Road",
      arrPoint: "Mumbai Road"
    },
  ]);
  return (
    <div>
      <BusCard busData={busData} />
    </div>
  );
};

export default Bus;
