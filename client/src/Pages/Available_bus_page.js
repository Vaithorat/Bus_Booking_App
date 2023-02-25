import React,{useState} from "react";
import BusCard from "../Components/BusCard";
import Filters from "../Components/Filters";
import { BusData } from "../Data/BusData";

const Available_bus_page = () => {
  const [showBus, setShowBus] = useState('')
  return (
    <div className="flex flex-row ">
      <Filters />
      <div className="basis-3/4 mt-24 mb-5 mr-5">
        {BusData.map((bus,id)=>(
          <BusCard key={id} busid={bus.id} busName={bus.BusName} busRating={bus.Rating} busFrom={bus.From} busTo={bus.To} busFromDate={bus.FromDate} busFromTime={bus.FromTime} busToDate={bus.ToDate} busToTime={bus.ToTime} busTimeInterval={bus.TimeInterval} showBus={showBus} setShowBus={setShowBus}/>
        ))}
      </div>
    </div>
  );
};

export default Available_bus_page;
