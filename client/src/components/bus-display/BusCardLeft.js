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
      <div className="bus-card-left">
        <div className="bus-card-heading">
          <div className="bus-heading">
            <div className="text-xl font-bold">{busName}</div>
            <div className="bg-green-700 ml-2 rounded-md text-white px-2">4.8</div>
          </div>
          <div className="text-md">
            <div>{type}</div>
          </div>
        </div>
        <div className="bus-itinerary">
          <h3>
            <span className="text-md">{departureTime} </span>
            <span className="text-md">
              ---- {} Hrs {} Mins ----{" "}
            </span>
            <span className="text-md">{arrivalTime} </span>
          </h3>
        </div>
        <div className="bus-actions">
          <h4 className="bus-facilities">
            <span>Live tracking</span>
            <span>Policies</span>
            <span>Amenities</span>
            <span>Bus Phots</span>
            <span>Booking Policies</span>
            <span>Review</span>
            <span>Rest Stop</span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default BusCardLeft;
