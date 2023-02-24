import React, { useState } from "react";
import BusCard from "../Components/BusCard";
import Filters from "../Components/Filters";
// import Paginate from "../Components/Paginate";
import { busData } from "../Data/Busdata";
const Available_bus_page = (busType) => {
  const [showBus, setShowBus] = useState("");
  return (
    <div className="flex flex-row ">
      <Filters />
      {/* <Paginate/> */}
      <div className="basis-3/4 mt-24 mb-5 mr-5">
        {busData.map((bus) => (
          <BusCard
            busid={bus.id}
            busType={bus.busType}
            busRating = {bus.rating}
            busSeats = {bus.seatsLeft}
            busWindow={bus.windowLeft}
            busArrTime={bus.arrTime}
            busDepTime={bus.depTime}
            busArrDate={bus.arrDate}
            busDepDate={bus.deptDate}
            busDuration = {bus.duration}
            showBus={showBus}
            setShowBus={setShowBus}
          />
        ))}
      </div>
    </div>
  );
};

export default Available_bus_page;
