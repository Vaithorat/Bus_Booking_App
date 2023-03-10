import React from "react";
import BusCard from "./BusCard";
import SideBar from "./SideBar";
import "../../styles/Bus-display/busdisplaysection.css";
import { Calender } from "../../components/bus-display/Calender";
import { useSelector } from "react-redux";

export const BusDisplaySection = () => {
  const { busInformation } = useSelector((state) => state.reducer);
  const { _id, arrivalTime, buses, departureTime, destination, source } =
    busInformation[0];
  return (
    <>
      <Calender />
     <div className="h-screen p-6 flex w-full">
        <SideBar />
        <div className="w-full px-4">
          {buses.map((el, i) => (
            <BusCard
              key={el._id}
              routeId={_id}
              arrivalTime={arrivalTime}
              departureTime={departureTime}
              destination={destination}
              source={source}
              busData={el}
            />
          ))}
        </div>
      </div>
    </>
  );
};
