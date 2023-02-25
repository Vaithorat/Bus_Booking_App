import React from "react";
const BusCardLeft = ({
  data,
  routeId,
  arrivalTime,
  departureTime,
  destinaton,
  source,
}) => {
  const { _id, busName, fare, seats, type } = data;
  return (
    <>
      <div className=" w-full flex flex-col justify-between px-4 py-4">
        <div className="flex-col justify-center">
          <div className="flex items-center">
            <div className="text-xl font-bold">{busName}</div>
            <div className="bg-green-700 ml-2 rounded-md text-white px-2">
              4.8
            </div>
          </div>
          <div className="text-md">
            <div>{type}</div>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <div className="text-md">{departureTime} </div>
            <div className="text-md">
              ---- {} Hrs {} Mins ----{" "}
            </div>
            <span className="text-md">{arrivalTime} </span>
          </div>
        </div>
        <div className="mr-15">
          <div className="gap-4 flex">
            <span>Live tracking</span>
            <span>Policies</span>
            <span>Photos</span>
            <span>Amenities</span>
            <span>Reviews</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusCardLeft;
