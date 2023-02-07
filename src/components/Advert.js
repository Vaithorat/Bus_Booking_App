import React from "react";
let Bus = require("./images/buspic.png");
const Advert = () => {
  return (
    <div className="mt-8 items-center flex flex-col">
      <div className="mb-8 text-4xl font-bold">Travel with world's largest bus service</div>
      <div className="flex">
        <div>
          <div className="border-2 flex flex-col shadow-xl  justify-center items-center w-[12vw] p-8 mr-4 rounded-xl">
            <img src={Bus} alt="bus" className="h-20 flex justify-center"></img>
            <div>200+</div>
            <div>Bus collection</div>
          </div>
        </div>
        <div>
          <div className="border-2 flex flex-col justify-center  shadow-xl items-center w-[12vw] p-8 mr-4 rounded-xl">
            <img src={Bus} alt="bus" className="h-20 flex justify-center"></img>
            <div>200+</div>
            <div>Bus collection</div>
          </div>
        </div>
        <div className="border-2 flex flex-col justify-center  shadow-xl items-center w-[12vw] p-8 rounded-xl">
          <img src={Bus} alt="bus" className="h-20 flex justify-center"></img>
          <div>200+</div>
          <div>Bus collection</div>
        </div>
      </div>
      <div className="text-4xl font-bold mt-12 mb-12 w-[28vw]">Here's what a few customers have to say about us</div>
    </div>
  );
};

export default Advert;
