import React from "react";
import { useSelector } from "react-redux";

const CusDetails = () => {
  const busData = useSelector((state) => state.busData);
  return (
    <div className="border-2 rounded-md">
      <div className="text-left p-4">
        <div className="font-bold">
          <span>Passenger 1</span>
          <span className="ml-3">Seat {busData.busLocation.selectedSeat}</span>
        </div>
        <div className="flex">
          <div className="my-2">
            <label>
              Name
              <input
                type="text"
                className="w-96 my-2  block px-3 py-2 border-2"
              />
            </label>
          </div>
          <div className="my-2 ml-3">
            <label>
              Gender
              <select
                name="gender"
                className="w-[11vw] my-2 block px-1 py-2 border-2"
              >
                <option value="select">-Select-</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="my-2 ml-3">
            <label>Age</label>
            <input
              type="number"
              className="w-40 my-2  min-w-0 block border-2 px-3 py-2 "
            />
          </div>
        </div>
        <div className="flex">
          <div className="my-2">
            <label>Email</label>
            <input
              type="email"
              className="w-96 my-2  min-w-0 block border-2  px-3 py-2 "
            />
          </div>
          <div className="my-2 ml-3">
            <label>Mobile No</label>
            <input
              type="tel"
              className="w-52 my-2  min-w-0 block border-2 px-3 py-2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CusDetails;
