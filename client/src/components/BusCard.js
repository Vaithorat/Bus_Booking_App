import React, { useState } from "react";
import Seat from "./Seat";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

const BusCard = (props) => {
  const links = ["Live Tracking", "Policies", "Photos", "Amenities", "Reviews"];
  const priceRanges = ["All", "699", "899", "1199", "1599"];
  const seats = ["Vacant", "Reserved", "Selected"];
  const [filterPrice, setFilterPrice] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");
  const [filteredSeats, setFilteredSeats] = useState(
    Array.from({ length: 38 }, (_, index) => String(index + 1).padStart(2, "0"))
  );

  const pricesToSeats = {
    699: ["08", "09", "10", "11", "12", "13", "14"],
    899: ["02", "06", "08", "13", "12", "20", "25", "28", "32", "37"],
    1199: [
      "03",
      "06",
      "09",
      "12",
      "15",
      "17",
      "21",
      "24",
      "27",
      "29",
      "33",
      "36",
    ],
    1599: ["15", "17", "16", "18", "19", "34", "35", "36", "37", "38"],
  };
  const busData = [
    {
      id: "1",
      name: "InterCity Smart Bus",
      busType: "AC Sleeper (2+1)",
      seatsLeft: "24",
      windowLeft: "0",
      depTime: "22:45",
      deptDate: "16 Nov",
      arrTime: "06:20",
      arrDate: "17 Nov",
      duration: "07 hrs 59 min",
      rating: "4.5",
    },
  ];
  const setFilter = (event) => {
    const price = event.target.value;
    setFilteredSeats(pricesToSeats[price] || []);
  };

  return (
    <div className="mb-4 ">
      {busData.map((bus) => (
        <div className="border-2 border-gray-300 flex rounded-md ">
          <div className="basis-3/4 border-r-2 border-gray-300 text-left p-4">
            <div className="flex ">
              <div className="font-bold flex">
                <div className="text-xl flex">{bus.name}</div>
                <div className="bg-green-700 text-md flex items-center w-fit rounded-md text-white p-1 ml-2">
                  <AiOutlineStar className="mr-1" /> {bus.rating}
                </div>
                <div className="px-2 flex text-gray-400 text-md items-center">
                  Ratings
                </div>
              </div>
            </div>
            <div className="flex py-2 text-xs text-slate-500">
              <div>
                <span className="border-r pr-2 border-slate-600">
                  {bus.busType}
                </span>
              </div>
              <div>
                <span className="border-r px-2 border-slate-600">
                  {bus.seatsLeft} seats left
                </span>
              </div>
              <div>
                <span className="px-2">{bus.windowLeft} windows seat</span>
              </div>
            </div>
            <div className="flex py-2 ">
              <div>
                <span className=" pr-2 text-lg font-semibold">
                  {bus.depTime}, {bus.deptDate}
                </span>
              </div>
              <div>
                <span className="px-2 text-s text-slate-500 text-center align-middle">
                  ----------{bus.duration}---------
                </span>
              </div>
              <div>
                <span className="px-2 text-lg font-semibold">
                  {bus.arrTime}, {bus.arrDate}
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
      ))}
      {props.showBus === props.busNo && (
        <div className="border-2 border-gray-300 rounded-md ">
          <div className="m-2 flex">
            <div className="basis-4/5 text-start">
              <div className="font-bold text-2xl ">Select Seats</div>
              <div className="flex my-4">
                <div className="text-gray-400">Seat Price</div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
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
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                    value="699"
                    onClick={setFilter}
                  />
                  <label className="text-sm ">₹699</label>
                </div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                    value="899"
                    onClick={setFilter}
                  />
                  <label className="text-sm ">₹899</label>
                </div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                    value="1199"
                    onClick={setFilter}
                  />
                  <label className="text-sm ">₹1199</label>
                </div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
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
                  <input className="mr-2 leading-tight" type="checkbox" />
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
                    <Seat
                      seatno="01"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="02"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="03"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="04"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="05"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="06"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="07"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                  </div>
                  <div className="flex mb-12">
                    <Seat
                      seatno="08"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="09"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="10"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="11"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="12"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="13"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="14"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                  </div>
                  <div className="flex mb-2 ml-40">
                    <Seat
                      seatno="15"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="16"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="17"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="18"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="19"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
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
                    <Seat
                      seatno="20"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="21"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="22"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="23"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="24"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="25"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="26"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                  </div>
                  <div className="flex mb-12">
                    <Seat
                      seatno="27"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="28"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="29"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="30"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="31"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="32"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="33"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                  </div>
                  <div className="flex mb-2 ml-40">
                    <Seat
                      seatno="34"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="35"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="36"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="37"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
                    <Seat
                      seatno="38"
                      setSelectedSeat={setSelectedSeat}
                      filteredSeats={filteredSeats}
                      setFilterPrice={setFilterPrice}
                    />
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
  );
};

export default BusCard;
