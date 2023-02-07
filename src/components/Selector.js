import React from "react";
let Background = require("./images/background.jpg");

const Selector = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[60vh]"
        style={{ backgroundImage: `url(${Background}) ` }}
      >
        <div>
          <div className="flex justify-center items-center h-[35vh] rounded-xl ">
            <div className="border-2 pr-[15vw] py-4 rounded-l-xl text-left pl-3 bg-white">
              From
              <div className="flex-col ">
                Delhi, New Delhi, <div>India</div>
              </div>
            </div>
            <div className="border-2 pr-[15vw] py-4 text-left pl-3 bg-white">
              To
              <div>
                Kanpur, Uttar Pradesh <div>India</div>
              </div>
            </div>
            <div className="border-2 pr-[15vw] py-7 rounded-r-xl bg-white">
              Travel Date
              <div >12 Nov 2022</div>
            </div>
          </div>
          <button className="text-white bg-yellow-600 mt-6 p-4 text-3xl rounded-xl px-16">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Selector;
