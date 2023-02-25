import React from "react";
import BusInfoCard from "../Components/BusInfoCard";
import DetailsInputCard from "../Components/DetailsInputCard";
import FareDetailsCard from "../Components/FareDetailsCard";

const Info_page = () => {
  return (
    <div className="flex mt-24 mb-8 mx-10">
      <div className="basis-3/4  mr-3 ">
        <BusInfoCard />
        <div className="font-bold text-xl text-left mt-8 mb-4">
          Enter traveller Details
        </div>
        <DetailsInputCard />
      </div>
      <FareDetailsCard />
    </div>
  );
};

export default Info_page;
