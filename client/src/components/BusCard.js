import React, { useState } from "react";
import Seat from "./Seat";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { setBusData } from '../state/actions/busData';


const BusCard = (props) => {
  const links = ["Live Tracking", "Policies", "Photos", "Amenities", "Reviews"];
  // const priceRanges=["All","699","899","1199","1599"]
  const seats = ["Vacant", "Reserved", "Selected"];
  const [filterPrice, setFilterPrice] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");
  const [filteredSeats, setFilteredSeats] = useState(["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38",]);
  //const busData = useSelector((state) => state.busData);
  //console.log(busData.busLocation.busName)
  const fromTo = useSelector((state) => state.fromTo);
  
  const dispatch = useDispatch();

  const setFilter = (event) => {
    if (event.target.value === "699") {
      setFilteredSeats(["01","07","08","14","19","20","26","27","33","38",]);
    } else if (event.target.value === "All") {
      setFilteredSeats(["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38"]);
    } else if (event.target.value === "899") {
      setFilteredSeats(["02","06","09","13","18","21","25","28","32","37"]);
    } else if (event.target.value === "1199") {
      setFilteredSeats(["03","05","10","12","15","17","22","24","29","31","34","36"]);
    } else if (event.target.value === "1599") {
      setFilteredSeats(["04", "11", "16", "23", "30", "35"]);
    }
  };

  const a = {
    busName:props.busName,
    busRating:props.busRating,
    busFromDate:props.busFromDate,
    busFromTime:props.busFromTime,
    busToDate:props.busToDate,
    busToTime:props.busToTime,
    busTimeInterval:props.busTimeInterval,
    selectedSeat:selectedSeat,
    filterPrice:filterPrice
  }

  const handleClick = async () => {
    console.log(fromTo)
    console.log(a)
    await setBusData(dispatch,a)
    //console.log(busData)
    //console.log(busData.busLocation.busName)
    // await dispatch(setBusData(a))
    //console.log(busData.busName ,"and",busData.busRating)
  }
  return (
    <div className="mb-4 ">
      {fromTo.INIT_STATE.From===props.busFrom && fromTo.INIT_STATE.To===props.busTo && (<div className="border-2 border-gray-300 flex rounded-md ">
        <div className="basis-3/4 border-r-2 border-gray-300 text-left p-4">
          <div className="flex ">
            <div className="font-bold">
              <span className="text-xl">{props.busName}</span>
              <span className="bg-[#119513] rounded-md text-white p-0.5 ml-2">
                <ion-icon name="star-outline"></ion-icon>{props.busRating}
              </span>
              <span className="px-2 text-gray-400 text-xs">Ratings</span>
            </div>
          </div>
          <div className="flex py-2 text-xs text-slate-500">
            <div>
              <span className="border-r pr-2 border-slate-600">
                AC Sleeper (2-1)
              </span>
            </div>
            <div>
              <span className="border-r px-2 border-slate-600">
                24 seats left
              </span>
            </div>
            <div>
              <span className="px-2">0 windows seat</span>
            </div>
          </div>
          <div className="flex py-2 ">
            <div>
              <span className=" pr-2 text-lg font-semibold">{props.busFromTime}, {props.busFromDate}</span>
            </div>
            <div>
              <span className="px-2 text-s text-slate-500 text-center align-middle">
                ----------{props.busTimeInterval}---------
              </span>
            </div>
            <div>
              <span className="px-2 text-lg font-semibold">{props.busToTime}, {props.busToDate}</span>
            </div>
          </div>
          <div className="flex text-blue-700 pt-8">
            {links.map((link, id) => (
              <div key={id} className="pr-8">
                {link}
              </div>
            ))}
          </div>
        </div>

        <div className="basis-1/4 p-4">
          <div className="text-md font-semibold">Trip Cost</div>
          <div className="pt-3 text-xs text-gray-500">Starting from</div>
          <div className="font-bold text-2xl">&#8377; 899</div>
          <button
            className="bg-[#FF8700] text-white font-[Poppins] mt-3 py-2 px-8 rounded  hover:bg-indigo-400 
    duration-500"
            onClick={() =>
              props.busid === props.showBus
                ? props.setShowBus("")
                : props.setShowBus(props.busid)
            }
          >
            View Seat
          </button>
        </div>
      </div>)}
      {props.showBus === props.busid && (
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
                  <label className="text-sm ">&#8377;All</label>
                </div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                    value="699"
                    onClick={setFilter}
                  />
                  <label className="text-sm ">&#8377;699</label>
                </div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                    value="899"
                    onClick={setFilter}
                  />
                  <label className="text-sm ">&#8377;899</label>
                </div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                    value="1199"
                    onClick={setFilter}
                  />
                  <label className="text-sm ">&#8377;1199</label>
                </div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                    value="1599"
                    onClick={setFilter}
                  />
                  <label className="text-sm ">&#8377;1599</label>
                </div>
              </div>
            </div>
            <div className="basis-1/5 text-start text-gray-600">
              {seats.map((seat, id) => (
                <div key={id} className="">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm">{seat} Seats</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex m-2 ">
            <div className="basis-2/3  mr-2 ">
              <div className="border-2 border-gray-300 mb-4 h-36 flex rounded-md">
                <div
                  className="rotate-180 text-gray-400 mt-2 text-xs"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span>Upper Birth</span>
                </div>
                <div className="mt-3 ml-4">
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
              <div className="border-2 border-gray-300 h-36 flex rounded-md">
                <div
                  className="rotate-180 text-gray-400 mt-2 text-xs"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span>Lower Birth</span>
                </div>
                <div className="mt-3 ml-4">
                  <div className="flex">
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
                <div className="font-bold text-md">Boarding and Dropping</div>
                <div className="flex justify-between my-2">
                  <div className="text-xs">
                    <div className="font-semibold">-{props.busFrom}</div>
                    <div className="text-gray-400">
                      Taxi Service, Chhatrapati road
                    </div>
                  </div>
                  <div className="text-sm font-bold">{props.busFromTime}</div>
                </div>
                <div className="flex justify-between mt-2 border-b-2 border-gray-300 pb-2 pt-2">
                  <div className="text-xs ">
                    <div className="font-semibold">-{props.busTo}</div>
                    <div className="text-gray-400">
                      Taxi Service, Chhatrapati road
                    </div>
                  </div>
                  <div className="text-sm font-bold">{props.busToTime}</div>
                </div>
                <div className="flex justify-between text-sm font-bold border-b-2 border-gray-300 py-1">
                  <div>Seat No</div>
                  <div>{selectedSeat}</div>
                </div>
                <div className="text-sm font-bold py-1">Fare Details</div>
                <div className="flex justify-between my-1">
                  <div>
                    <div className="text-xs">Amount</div>
                    <div className="text-xs text-gray-400">
                      Taxi Service, Chhatrapati road
                    </div>
                  </div>
                  <div className="text-md font-bold">INR {filterPrice}</div>
                </div>
                <div>
                  <button
                    onClick={handleClick}
                    className="bg-[#FF8700] text-white font-[Poppins] mt-6 py-2 px-8 w-full rounded  hover:bg-indigo-400 
    duration-500"
                  >
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
