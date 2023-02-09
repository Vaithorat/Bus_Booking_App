import React from "react";
let Background = require("../images/background.jpg");

const Selector = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[60vh]"
        style={{ backgroundImage: `url(${Background}) ` }}
      >
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center h-[35vh] rounded-xl ">
            <label className="border-2 text-gray-400 pr-2 font-bold  text-xl  py-4 rounded-l-xl text-left pl-3 bg-white">
              From
              <div>
                <input type="text" className="w-[20vw]"/>
              </div>
            </label>
          </div>
          <label className="border-2  text-gray-400 font-bold  text-xl pr-2 py-4 text-left pl-3 bg-white">
            To
            <div>
              <input type="text"  className="w-[20vw]" />
            </div>
          </label>
          <label className="border-2 text-xl text-gray-400 pl-2 font-bold pr-2 py-4 rounded-r-xl bg-white">
            Travel Date
            <div className="text-black">
              <input type="date" className="w-[10vw]" />
            </div>
          </label>
        </div>
        <div className="flex justify-center">
          <button className=" text-white bg-yellow-600 mt-6 p-4 text-3xl rounded-xl px-16 ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selector;
