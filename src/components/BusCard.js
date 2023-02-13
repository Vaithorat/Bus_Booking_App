import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
const bed = require("../images/seat.png");

const BusCard = (props) => {
  const busData = props.busData;
  const [selection, setSelection] = useState("All");
  const handleChange = (e) => {
    setSelection(e.target.value);
  };

  return (
    <div>
      {busData.map((buses) => (
        <div>
          <div className="flex ">
            <div className="border-2 pl-6 w-[50vw] flex flex-col mt-[12vh] ml-10 rounded-md h-[22vh] items-start">
              <div className="flex mt-3 items-center gap-2">
                <div className="font-bold text-xl">{buses.name}</div>
                <div className="flex items-center border-2 bg-green-600 justify-center gap-1 rounded-xl h-[4vh] text-white w-[3vw]">
                  <div>
                    <AiOutlineStar />
                  </div>
                  <div>{buses.rating}</div>
                </div>
                <div className="text-gray-400">Ratings</div>
              </div>
              <div className="text-sm my-2 ">
                {buses.type} | {buses.seats} Seats Left | {buses.windowSeats}{" "}
                Window seats
              </div>
              <div className="font-bold text-xl flex justify-center items-center gap-2 mt-2">
                {buses.depTime}, {buses.depDate}
                <div className="text-gray-400 text-sm">
                  {" "}
                  --- {buses.duration} ---{" "}
                </div>
                {buses.arrTime}, {buses.arrDate}
              </div>
              <div className="flex gap-[16vw] font-bold text-gray-400">
                <div>{buses.depLocation}</div>
                <div>{buses.arrLocation}</div>
              </div>
              <ul className="flex justify-start gap-6 mt-7 text-blue-400 font-bold mb-2">
                <li>Live Tracking</li>
                <li>Policies</li>
                <li>Photos</li>
                <li>Amenities</li>
                <li>Reviews</li>
              </ul>
            </div>
            <div className="border-2 px-6 w-fit flex flex-col mt-[12vh] rounded-md h-[22vh] gap-2 justify-center items-center">
              <div className="font-semibold text-lg">Trip Cost</div>
              <div className="text-gray-400 text-xs">Starting from</div>
              <div className="font-bold text-4xl">₹ {buses.price}</div>
              <button className="bg-orange-400 rounded-md text-white mx-9 p-2 px-8 font-semibold">
                View Seat
              </button>
            </div>
          </div>

          <div className=" border-2 ml-10 rounded-xl ">
            <div className="ml-4 font-bold text-2xl mt-4">Select Seats</div>
            <div className="flex justify-start gap-3 items-center ml-4">
              <div className="text-xl text-gray-400 font-bold">Seat Price</div>
              <label className="shadow-lg p-2 px-4 flex rounded-xl">
                <input
                  type="radio"
                  value="All"
                  checked={selection === "All"}
                  onChange={handleChange}
                />
                <div className="ml-2">All</div>
              </label>
              <label className="shadow-lg p-2 px-4 flex ml-14 rounded-xl">
                <input
                  type="radio"
                  value="699"
                  checked={selection === "699"}
                  onChange={handleChange}
                />
                <div className="ml-2">₹699</div>
              </label>
              <label className="shadow-lg p-2 px-4 flex ml-14 rounded-xl">
                <input
                  type="radio"
                  value="899"
                  checked={selection === "899"}
                  onChange={handleChange}
                />
                <div className="ml-2">₹899</div>
              </label>
              <label className="shadow-lg p-2 px-4 flex ml-14 rounded-xl">
                <input
                  type="radio"
                  value="1199"
                  checked={selection === "1199"}
                  onChange={handleChange}
                />
                <div className="ml-2">₹1199</div>
              </label>
              <label className="shadow-lg p-2 px-4 flex ml-14 rounded-xl">
                <input
                  type="radio"
                  value="1599"
                  checked={selection === "1599"}
                  onChange={handleChange}
                />
                <div className="ml-2">₹1599</div>
              </label>
              <div className="flex mr-12 mb-4 ml-[10vw]">
                <ul>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 flex rounded-sm "></div>
                    Vacant Seat
                  </div>
                  <div className="flex items-center  gap-2">
                    <div className="w-4 h-4 border-2 flex bg-gray-600 rounded-sm"></div>
                    Reserved Seats
                  </div>
                  <div className="flex items-center  gap-2">
                    <div className="w-4 h-4 border-2 flex bg-blue-800 rounded-sm"></div>
                    Selected Seats
                  </div>
                </ul>
              </div>
            </div>
            <div className="flex ">
              <div>
                <div className=" border-2 w-[35vw] rounded-xl ml-6">
                  <div className="flex mb-3 mt-3 justify-center gap-2">
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                  </div>
                  <div className="flex mb-3 justify-center gap-2">
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                  </div>
                  <div className="flex ml-32 mb-3 justify-center gap-2 mt-12">
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                  </div>
                </div>
                <div className=" border-2 w-[35vw] mt-8 rounded-xl ml-6">
                  <div className="flex mb-3 mt-3 justify-center gap-2">
                    <img
                      src={bed}
                      alt="bed"
                      className=" w-14 h-6 bg-blue-600 rounded-sm"
                    />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                  </div>
                  <div className="flex mb-3 justify-center gap-2">
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                  </div>
                  <div className="flex ml-32 mb-5 justify-center gap-2 mt-12">
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                    <img src={bed} alt="bed" className=" w-14 h-6 rounded-sm" />
                  </div>
                </div>
              </div>
              <div className="flex-col border-2 ml-4 mb-4 rounded-xl p-4 w-[25vw]">
                <div className="flex-col ">
                  <div className="font-bold">Picking & Dropping</div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div>{buses.depLocation}</div>
                      <div className="text-gray-400 text-sm">{buses.depPoint}</div>
                    </div>
                    <div className="font-bold text-lg">{buses.depTime}</div>
                  </div>
                </div>
                <div className="flex-col ">
                  <div className="flex items-center justify-between">
                    <div className="mt-8">
                      <div>{buses.arrLocation}</div>
                      <div className="text-gray-400 text-sm" >{buses.arrPoint}</div>
                    </div>
                    <div className="font-bold text-lg">{buses.arrTime}</div>
                  </div>
                </div>
                <hr className="border-2" />
                <div className="font-bold">Seat No. 7</div>
                <hr className="border-2 " />
                <div className="font-bold">Fare Details</div>
                <div className="flex justify-between">
                  <div>
                    <div>Amount</div>
                    <div>{buses.depPoint}</div>
                  </div>
                  <div className="font-bold text-xl">INR {buses.price}</div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-orange-400 text-white p-4 w-[20vw] font-bold text-xl rounded-xl mt-4">
                    Proceed to Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusCard;
