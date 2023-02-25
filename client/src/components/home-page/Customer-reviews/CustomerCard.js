import React from "react";

export const CustomerCard = () => {
  return (
    <div className="flex p-2 bg-white rounded-xl shadow-2xl w-[18vw] my-10 ">
      <div>
        <div className="flex-col items-center  rounded-xl justify-center pt-4">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-3xl flex font-bold text-white items-center justify-center bg-orange-500 text-4xl">
              <div>V</div>
            </div>
            <div>
              <div className="text-xl flex flex-col font-bold">
                Vatsal Aggarwal
              </div>
              <div>Customer Since 2020</div>
            </div>
          </div>
          <div>4.5</div>
          <div>
            I had an incredible journey with Reserve Bus, and it was a truly
            memorable experience.
          </div>
        </div>
      </div>
    </div>
  );
};
