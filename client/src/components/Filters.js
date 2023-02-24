import React from "react";

const Filters = () => {
  const sessions = ["Morning", "Afternoon", "Evening"];
  const cities = ["Kolkata", "Mumbai", "Banglore"];
  const busRatings = ["4 star or more", "3 star or more", "0-2 star"];
  const busOperators = ["Zing Bus", "Intrcity Smart", "Safar Exp"];
  return (
    <div className="basis-1/4 mt-24 mb-5 mx-5">
      <div className="flex justify-between border-2 py-3 px-4 font-bold mb-2 rounded-md">
        <div>Filter</div>
        <div>Clear All</div>
      </div>
      <div className="border-2 rounded-md">
        <div className=" py-3 px-4 text-start">
          <div className="py-2 font-bold">Departure Time</div>
          {sessions.map((session, id) => {
            return (
              <div key={id} className="py-2 flex">
                <input className="mr-2" type="checkbox" />
                <label htmlFor={`session-${id}`}>{`${session} Session`}</label>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="py-3 px-4 text-start">
          <div className="py-2 font-bold">Arrival Time</div>
          {sessions.map((session, id) => {
            return (
              <div key={id} className="py-2 flex">
                <input className="mr-2 " type="checkbox" />
                <label htmlFor={`session-${id}`}>{`${session} Session`}</label>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="py-3 px-4 text-start">
          <div className="py-2 font-bold">Pickup Point</div>
          {cities.map((city, id) => {
            return (
              <div key={id} className="py-2 flex">
                <input className="mr-2 " name="pickup" type="radio" />
                <div>{city}</div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="py-3 px-4 text-start">
          <div className="py-2 font-bold">Drop Point</div>
          {cities.map((city, id) => {
            return (
              <div key={id} className="py-2 flex">
                <input className="mr-2 " name="drop" type="radio" />
                <div>{city}</div>
              </div>
            );
          })}
        </div>{" "}
        <hr />
        <div className="py-3 px-4 text-start">
          <div className="py-2 font-bold">Bus Rating</div>
          {busRatings.map((rating, id) => {
            return (
              <div key={id} className="py-2 flex">
                <input className="mr-2" type="checkbox" />
                <div>{rating}</div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="py-3 px-4 text-start">
          <div className="py-2 font-bold">Bus Operator</div>
          {busOperators.map((operator, id) => {
            return (
              <div key={id} className="py-2 flex">
                <input className="mr-2" type="checkbox" />
                <div>{operator}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
