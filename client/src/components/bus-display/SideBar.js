import React from "react";
import Box from "./Box";
import { Box2 } from "./Box2";

const SideBar = () => {
  return (
    <div className="">
      <div className="flex justify-between w-full border-2 border-black rounded-lg px-2 text-lg font-semibold">
        <div>Filter</div>
        <div>Clear All</div>
      </div>
      <div className="w-[13vw] border-2 border-gray-200 rounded-md mt-2">
        <Box
          name={"Departure Time"}
          text={"Morning Session"}
          text2={"Afternoon Session"}
          text3={"Evening Session"}
        />
        <Box
          name={"Arrival Time"}
          text={"Morning Session"}
          text2={"Afternoon Session"}
          text3={"Evening Session"}
        />
        <Box2 text={"Pickup Point"} search={true} />
        <Box2 text={"Drop Point"} />
        <Box
          name={"Bus Rating"}
          text={"4 star or more"}
          text2={"3 star or more"}
          text3={"0-2 star"}
        />
        <Box
          name={"Bus Operator"}
          text={"Zing Bus"}
          text2={"Intercity Smart"}
          text3={"Safar Exp"}
          search={true}
        />
      </div>
    </div>
  );
};

export default SideBar;
