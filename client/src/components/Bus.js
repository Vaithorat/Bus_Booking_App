import React, { useState } from "react";
import BusCard from "./BusCard";

const Bus = () => {
 
  // eslint-disable-next-line no-unused-vars
  const [busData, setBusData] = useState([
    {
      id: "1",
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
      price: 899,
      depLocation: "Pune",
      arrLocation: "Mumbai",
      depPoint: "Pune Road",
      arrPoint: "Mumbai Road",
    },
    {
      id: "2",
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
      price: 899,
      depLocation: "Pune",
      arrLocation: "Mumbai",
      depPoint: "Pune Road",
      arrPoint: "Mumbai Road",
    },
  ]);
    const [selectedBusId, setSelectedBusId] = useState(null);

  const handleSelectBus = (id) => {
    setSelectedBusId(id);
  };
  return (
    <div>
      <BusCard
          key={busData.id}
          id={busData.id}
          busData={busData}
          isSelected={selectedBusId === busData.id}
          onSelect={handleSelectBus}
        />
    </div>
  );
};

export default Bus;
