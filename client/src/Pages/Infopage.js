import React from "react";
import BusInfoCard from "../Components/BusInfoCard";
import CusDetails from "../Components/CusDetails";
import FareDetails from "../Components/FareDetails";

const Infopage = () => {
  return (
    <div className="flex mt-24 mb-8 mx-10">
      <div className="basis-3/4  mr-3 ">
        <BusInfoCard />
        <div className="font-bold text-xl text-left mt-8 mb-4">
          Enter traveller Details
        </div>
        <CusDetails />
      </div>
      <FareDetails />
    </div>
  );
};

export default Infopage;
