import React,{useState} from "react";
import BusCard from "../Components/BusCard";
import Filters from "../Components/Filters";

const Available_bus_page = () => {
  const [showBus, setShowBus] = useState('')
  return (
    <div className="flex flex-row ">
      <Filters />
      <div className="basis-3/4 mt-24 mb-5 mr-5">
        <BusCard busNo="01" showBus={showBus} setShowBus={setShowBus}/>
        <BusCard busNo="02" showBus={showBus} setShowBus={setShowBus}/>
        <BusCard busNo="03" showBus={showBus} setShowBus={setShowBus}/>
      </div>
    </div>
  );
};

export default Available_bus_page;
