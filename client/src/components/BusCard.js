import React, { useState } from "react";
import Seat from "./Seat";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { busData } from "../Data/Busdata";

const BusCard = (props) => {
  const links = ["Live Tracking", "Policies", "Photos", "Amenities", "Reviews"];
  // eslint-disable-next-line no-unused-vars
  const priceRanges = ["All", "699", "899", "1199", "1599"];
  const seats = ["Vacant", "Reserved", "Selected"];
  const [filterPrice, setFilterPrice] = useState("");
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [filteredSeats, setFilteredSeats] = useState(
    Array.from({ length: 38 }, (_, index) => String(index + 1).padStart(2, "0"))
  );
  const handleSeatSelection = (seatno) => {
    const index = selectedSeat.indexOf(seatno);
    if (index === -1) {
      // Add the seat to the selectedSeats array
      setSelectedSeat([...selectedSeat, seatno]);
    } else {
      // Remove the seat from the selectedSeats array
      setSelectedSeat(selectedSeat.filter((seat) => seat !== seatno));
    }
  };

  const pricesToSeats = {
    699: [
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
    ],
    899: ["01", "02", "03", "04", "05", "06", "07"],
    1199: ["20", "21", "22", "23", "24", "25", "26"],
    1599: ["15", "16", "17", "18", "19", "34", "35", "36", "37", "38"],
  };

  const setFilter = (event) => {
    const price = event.target.value;
    if (price === "All") {
      setFilteredSeats(
        Array.from({ length: 38 }, (_, index) =>
          String(index + 1).padStart(2, "0")
        )
      );
    } else {
      setFilteredSeats(pricesToSeats[price]);
    }
  };
 
  return (
    <div>
      <div>
        <div className="border-2 my-4 border-gray-300 flex rounded-md ">
          <div className="basis-3/4 border-r-2 border-gray-300 text-left p-4">
            <div className="flex ">
              <div className="font-bold flex">
                <div className="text-xl flex">{busData.name}</div>
                <div className="bg-green-700 text-md flex items-center w-fit rounded-md text-white p-1 ml-2">
                  <AiOutlineStar className="mr-1" /> {busData.rating}
                </div>
                <div className="px-2 flex text-gray-400 text-md items-center">
                  Ratings
                </div>
              </div>
            </div>
            <div className="flex py-2 text-xs text-slate-500">
              <div>
                <span className="border-r pr-2 border-slate-600">
                  {busData.busType}
                </span>
              </div>
              <div>
                <span className="border-r px-2 border-slate-600">
                  {busData.seatsLeft} seats left
                </span>
              </div>
              <div>
                <span className="px-2">
                  {busData.windowLeft} windows seat
                </span>
              </div>
            </div>
            <div className="flex py-2 ">
              <div>
                <span className=" pr-2 text-lg font-semibold">
                  {busData.depTime}, {busData.deptDate}
                </span>
              </div>
              <div>
                <span className="px-2 text-s text-slate-500 text-center align-middle">
                  ----------{busData.duration}---------
                </span>
              </div>
              <div>
                <span className="px-2 text-lg font-semibold">
                  {busData.arrTime}, {busData.arrDate}
                </span>
              </div>
            </div>
            <div className="flex text-blue-700 font-bold pt-8">
              {links.map((link, id) => (
                <a href={link} key={id} className="pr-8">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="basis-1/4 p-4">
            <div className="text-md font-semibold">Trip Cost</div>
            <div className="pt-3 text-xs text-gray-500">Starting from</div>
            <div className="font-bold text-2xl">₹ 899</div>
            <button
              className="bg-orange-500 text-white  mt-3 py-2 px-8 rounded-md
    duration-500"
              onClick={() =>
                props.busNo === props.showBus
                  ? props.setShowBus("")
                  : props.setShowBus(props.busNo)
              }
            >
              View Seat
            </button>
          </div>
        </div>

        {props.showBus === props.busNo && (
          <div className="border-2 border-gray-300 rounded-md ">
            <div className="m-2 flex">
              <div className="basis-4/5 text-start">
                <div className="font-bold text-2xl ">Select Seats</div>
                <div className="flex my-4">
                  <div className="text-gray-400">Seat Price</div>
                  <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                    <input
                      className="mr-2"
                      name="price"
                      type="radio"
                      value="All"
                      defaultChecked={true}
                      onClick={setFilter}
                    />
                    <label className="text-sm ">₹All</label>
                  </div>
                  <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                    <input
                      className="mr-2 "
                      name="price"
                      type="radio"
                      value="699"
                      onClick={setFilter}
                    />
                    <label className="text-sm ">₹699</label>
                  </div>
                  <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                    <input
                      className="mr-2 "
                      name="price"
                      type="radio"
                      value="899"
                      onClick={setFilter}
                    />
                    <label className="text-sm ">₹899</label>
                  </div>
                  <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                    <input
                      className="mr-2 "
                      name="price"
                      type="radio"
                      value="1199"
                      onClick={setFilter}
                    />
                    <label className="text-sm ">₹1199</label>
                  </div>
                  <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                    <input
                      className="mr-2 "
                      name="price"
                      type="radio"
                      value="1599"
                      onClick={setFilter}
                    />
                    <label className="text-sm ">₹1599</label>
                  </div>
                </div>
              </div>
              <div className="basis-1/5 text-start text-gray-600">
                {seats.map((seat, id) => (
                  <div key={id} className="">
                    <input className="mr-2 " type="checkbox" />
                    <span className="text-md">{seat} Seats</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex m-2 ">
              <div className="basis-2/3  mr-2 ">
                <div className=" border-2 h-[18vh] border-gray-300 mb-4 flex rounded-md">
                  <div
                    className="rotate-180 text-gray-400 mt-2 text-xs"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    <span>Upper Birth</span>
                  </div>
                  <div className="mt-3 pl-12 ml-4">
                    <div className="flex">
                      {[...Array(7)].map((_, i) => (
                        <Seat
                          key={i}
                          seatno={String(i + 1).padStart(2, "0")}
                          setSelectedSeat={handleSeatSelection}
                          filteredSeats={filteredSeats}
                          setFilterPrice={setFilterPrice}
                          isSelected={selectedSeat.includes(`${Seat.seatno}`)}
                        />
                      ))}
                    </div>
                    <div className="flex mb-12">
                      {[8, 9, 10, 11, 12, 13, 14].map((seatno) => (
                        <Seat
                          key={seatno}
                          seatno={seatno.toString().padStart(2, "0")}
                          setSelectedSeat={setSelectedSeat}
                          filteredSeats={filteredSeats}
                          setFilterPrice={setFilterPrice}
                        />
                      ))}
                    </div>

                    <div className="flex mb-2 ml-40">
                      <div className="flex mb-12">
                        {[15, 16, 17, 18, 19].map((seatno) => (
                          <Seat
                            key={seatno}
                            seatno={seatno.toString()}
                            setSelectedSeat={setSelectedSeat}
                            filteredSeats={filteredSeats}
                            setFilterPrice={setFilterPrice}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-2 h-[18vh] border-gray-300 flex rounded-md">
                  <div
                    className="rotate-180 text-gray-400 mt-2 text-xs"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    <span>Lower Birth</span>
                  </div>
                  <div className="mt-3 pl-12 ml-4">
                    <div className="flex mb-2">
                      {[20, 21, 22, 23, 24, 25, 26].map((seatno) => (
                        <Seat
                          key={seatno}
                          seatno={seatno.toString()}
                          setSelectedSeat={setSelectedSeat}
                          filteredSeats={filteredSeats}
                          setFilterPrice={setFilterPrice}
                        />
                      ))}
                    </div>
                    <div className="flex mb-12">
                      {[27, 28, 29, 30, 31, 32, 33].map((seatno) => (
                        <Seat
                          key={seatno}
                          seatno={seatno.toString()}
                          setSelectedSeat={setSelectedSeat}
                          filteredSeats={filteredSeats}
                          setFilterPrice={setFilterPrice}
                        />
                      ))}
                    </div>
                    <div className="flex mb-2 ml-40">
                      {[34, 35, 36, 37, 38].map((seatno) => (
                        <Seat
                          key={seatno}
                          seatno={seatno.toString()}
                          setSelectedSeat={setSelectedSeat}
                          filteredSeats={filteredSeats}
                          setFilterPrice={setFilterPrice}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/3 border-2 border-gray-300 rounded-md">
                <div className="my-2 mx-3 text-start">
                  <div className="font-bold text-xl">Boarding and Dropping</div>
                  <div className="flex justify-between my-2">
                    <div>
                      <div className="font-semibold ">-Pune</div>
                      <div className="text-gray-400">Taxi Service</div>
                    </div>
                    <div className="text-sm font-bold">22:45</div>
                  </div>
                  <div className="flex justify-between mt-2 border-b-2 border-gray-300 pb-2 pt-2">
                    <div>
                      <div className="font-semibold">-Kolkata</div>
                      <div className="text-gray-400">Taxi Service</div>
                    </div>
                    <div className="text-sm font-bold">06:20</div>
                  </div>
                  <div className="flex justify-between text-xl font-bold border-b-2 border-gray-300 py-1">
                    <div>Seat No</div>
                    <div>{selectedSeat}</div>
                  </div>
                  <div className=" text-xl font-bold py-1">Fare Details</div>
                  <div className="flex justify-between my-1">
                    <div>
                      <div className="text-xl font-bold">Amount</div>
                      <div className="text-sm text-gray-400">Taxi Service</div>
                    </div>
                    <div className="text-md font-bold">INR {filterPrice}</div>
                  </div>
                  <div>
                    <button className="bg-orange-500 text-white mt-6 py-2 px-8 w-full rounded-md">
                      <Link to="/info">Proceed to Book</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusCard;
