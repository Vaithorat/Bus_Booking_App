import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
const bed = require("../images/seat.png");

const BusCard = (props) => {
  const busData = props.busData;
  const [selection, setSelection] = useState("All"); //for price radio buttons

  const [busPrice, setBusPrice] = useState(null);
  const handleChange = (e) => {
    const newPrice = parseInt(e.target.value); //change ticket price
    if (!isNaN(newPrice)) {
      setBusPrice(newPrice);
    }
    setSelection(e.target.value);
  };

  //change seat color on selection
  const [seatColor, setSeatColor] = useState("bg-white");
  const handleClick = (event) => {
    const target = event.target;
    const currentColor = seatColor[target.id];
    if (currentColor === "bg-blue-700") {
      setSeatColor({ ...seatColor, [target.id]: "bg-white" });
    } else {
      setSeatColor({ ...seatColor, [target.id]: "bg-blue-700" });
    }
  };

  //change css to toggle between block and none
  const [isHidden, setIsHidden] = useState(true);
  const handleViewSeat = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      {busData.map((buses, index) => (
        <div key={index}>
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
                <a href="livetracking">Live Tracking</a>
                <a href="policies">Policies</a>
                <a href="photos">Photos</a>
                <a href="amenities">Amenities</a>
                <a href="reviews">Reviews</a>
              </ul>
            </div>
            <div className="border-2 px-6 w-fit flex flex-col mt-[12vh] rounded-md h-[22vh] gap-2 justify-center items-center">
              <div className="font-semibold text-lg">Trip Cost</div>
              <div className="text-gray-400 text-xs">Starting from</div>
              <div className="font-bold text-4xl">
                ₹ {busPrice || buses.price}
              </div>
              <button
                onClick={handleViewSeat}
                className="bg-orange-400 rounded-md text-white mx-9 p-2 px-8 font-semibold"
              >
                {isHidden ? "View Seat" : "Hide Seat"}
              </button>
            </div>
          </div>

          <div
            style={{ display: isHidden ? "none" : "block" }}
            className=" border-2 ml-10 rounded-xl "
          >
            <div className="ml-4 font-bold text-2xl mt-4">Select Seats</div>
            <div className="flex justify-start gap-3 items-center ml-4">
              <div className="text-xl text-gray-400 font-bold">Seat Price</div>
              {["All", "699", "899", "1199", "1599"].map((price, index) => (
                <label
                  key={index}
                  className="shadow-lg p-2 px-4 flex rounded-xl ml-2"
                >
                  <input
                    type="radio"
                    value={price}
                    checked={selection === price}
                    onChange={handleChange}

                  />
                  <div className="ml-2">{`₹ ${price}`}</div>
                </label>
              ))}
              <div className="flex mr-12 mb-4 ml-[16vw]">
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
                    <img
                      src={bed}
                      alt="bed"
                      id="seat1"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat1"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      id="seat2"
                      alt="bed"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat2"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat3"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat3"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat4"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat4"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat5"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat5"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat6"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat6"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat7"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat7"]}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="flex mb-3 justify-center gap-2">
                    <img
                      src={bed}
                      alt="bed"
                      id="seat8"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat8"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat9"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat9"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat10"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat10"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat11"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat11"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat12"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat12"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat13"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat13"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat14"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat14"]}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="flex ml-32 mb-3 justify-center gap-2 mt-12">
                    <img
                      src={bed}
                      alt="bed"
                      id="seat15"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat15"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat16"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat16"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat17"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat17"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat18"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat18"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat19"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat19"]}`}
                      onClick={handleClick}
                    />
                  </div>
                </div>
                <div className=" border-2 w-[35vw] mt-8 rounded-xl ml-6">
                  <div className="flex mb-3 mt-3 justify-center gap-2">
                    <img
                      src={bed}
                      alt="bed"
                      id="seat20"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat20"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat21"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat21"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat22"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat22"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat23"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat23"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat24"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat24"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat25"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat25"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat26"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat26"]}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="flex mb-3 justify-center gap-2">
                    <img
                      src={bed}
                      alt="bed"
                      id="seat27"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat27"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat28"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat28"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat29"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat29"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat30"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat30"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat31"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat31"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat32"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat32"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat33"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat33"]}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="flex ml-32 mb-5 justify-center gap-2 mt-12">
                    <img
                      src={bed}
                      alt="bed"
                      id="seat34"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat34"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat35"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat35"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat36"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat36"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat37"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat37"]}`}
                      onClick={handleClick}
                    />
                    <img
                      src={bed}
                      alt="bed"
                      id="seat38"
                      className={`w-14 h-6 rounded-sm ${seatColor["seat38"]}`}
                      onClick={handleClick}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-col border-2 ml-4 mb-4 rounded-xl p-4 w-[25vw]">
                <div className="flex-col ">
                  <div className="font-bold">Picking & Dropping</div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div>{buses.depLocation}</div>
                      <div className="text-gray-400 text-sm">
                        {buses.depPoint}
                      </div>
                    </div>
                    <div className="font-bold text-lg">{buses.depTime}</div>
                  </div>
                </div>
                <div className="flex-col ">
                  <div className="flex items-center justify-between">
                    <div className="mt-8">
                      <div>{buses.arrLocation}</div>
                      <div className="text-gray-400 text-sm">
                        {buses.arrPoint}
                      </div>
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
                  <div className="font-bold text-xl">
                    INR {busPrice || buses.price}
                  </div>
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
