import React from "react";
import { Card } from "./Card";
import logo1 from "../../../resources/bus-logo1.png";
import logo2 from "../../../resources/bus-logo2.png";
import logo3 from "../../../resources/bus-logo3.png";

const data = [
  {
    image: logo1,
    text1: "2000 +",
    text2: "Bus Collection",
  },
  {
    image: logo2,
    text1: "20 Million",
    text2: "Happy Customers Globally",
  },
  {
    image: logo3,
    text1: "5000 +",
    text2: "Tickets Book Everyday",
  },
];

export const HomeCard = () => {
  return (
    <div className="flex-col">
      <div className=" my-4 flex font-bold justify-center">
        <div className="text-4xl my-4">Travel with world's largest bus service</div>
      </div>
      <div className="flex justify-center items-center gap-4 h-24">
        {data.map((el, i) => (
          <Card key={i} image={el.image} text1={el.text1} text2={el.text2} />
        ))}
      </div>
    </div>
  );
};
