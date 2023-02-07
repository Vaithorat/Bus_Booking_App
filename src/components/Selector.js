import React from "react";
let Background = require("./images/background.jpg");

const Selector = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[60vh] z-1"
        style={{ backgroundImage: `url(${Background}) ` }}
      >
        <div className="flex justify-center items-center h-[60vh] z-10 rounded-xl ">
          <div className="border-2 pr-[15vw] py-8 rounded-l-xl bg-white">From </div>
          <div className="border-2 pr-[15vw] py-8  bg-white">To </div>
          <div className="border-2 pr-[15vw] py-8 rounded-r-xl bg-white">Travel Date </div>
        </div>
      </div>
    </div>
  );
};

export default Selector;
