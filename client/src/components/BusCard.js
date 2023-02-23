import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router";
import ReactPaginate from "react-paginate";

const bed = require("../images/seat.png");

const BusCard = ({ busData }) => {
  // const busData = props.busData;
  const [selection, setSelection] = useState("All"); //for price radio buttons
  const [busPrice, setBusPrice] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = busData.slice(indexOfFirstItem, indexOfLastItem);
  //change seat color on selection
  const [seatColor, setSeatColor] = useState("bg-white");
  // eslint-disable-next-line no-unused-vars
  const [activeSeatId, setActiveSeatId] = useState(null);
  const [busStates, setBusStates] = useState({});

  const handleChange = (e, id) => {
    const newPrice = parseInt(e.target.value); //change ticket price
    if (!isNaN(newPrice)) {
      setBusPrice(newPrice);
    }
    setSelection((prevState) => ({ ...prevState, [id]: e.target.value }));
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const handleClick = (event) => {
    const target = event.target;
    const currentColor = seatColor[target.id];
    if (currentColor === "bg-blue-700") {
      setSeatColor({ ...seatColor, [target.id]: "bg-white" });
      setActiveSeatId({ ...activeSeatId, [busData.id]: null });
    } else {
      setSeatColor({ ...seatColor, [target.id]: "bg-blue-700" });
      setActiveSeatId({ ...activeSeatId, [busData.id]: target.id });
    }
  };
  const seatIds = Array.from({ length: 40 }, (_, index) => `seat${index + 1}`);

  //change css to toggle between block and none

  const handleViewSeat = (id) => {
    setBusStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const navigate = useNavigate();
  function handleClicked() {
    navigate("/info-page");
  }
  const links = [
    { name: "Live Tracking", url: "livetracking" },
    { name: "Policies", url: "policies" },
    { name: "Photos", url: "photos" },
    { name: "Amenities", url: "amenities" },
    { name: "Reviews", url: "reviews" },
  ];

  return (
    <div>
      <div className="p-6">
        <ReactPaginate
          pageCount={Math.ceil(busData.length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          containerClassName="flex justify-center"
          pageClassName="mx-2 py-1 px-3 border rounded-md"
          activeClassName="bg-blue-500 text-white"
          previousClassName="mx-2 py-1 px-3 border rounded-md"
          nextClassName="mx-2 py-1 px-3 border rounded-md"
          disabledClassName="opacity-50 cursor-not-allowed"
          breakClassName="mx-2 py-1 px-3 border rounded-md"
          breakLinkClassName="text-blue-500"
          onPageChange={handlePageChange}
        />
      </div>
      {currentItems.map((buses) => (
        <div key={busData.id} id={busData.id}>
          <div className="flex ">
            <div className="border-2 pl-6 w-[50vw] flex flex-col my-2 ml-10 rounded-md h-[22vh] items-start">
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
                {links.map((link) => (
                  <a key={link.url} href={link.url}>
                    {link.name}
                  </a>
                ))}
              </ul>
            </div>
            <div className="border-2 px-6 w-fit flex flex-col my-2 rounded-md h-[22vh] gap-2 justify-center items-center">
              <div className="font-semibold text-lg">Trip Cost</div>
              <div className="text-gray-400 text-xs">Starting from</div>
              <div className="font-bold text-4xl">
                ₹ {busPrice || buses.price}
              </div>
              <button
                onClick={() => handleViewSeat(buses.id)}
                id={`img-${buses.id}`}
                className="bg-orange-400 rounded-md text-white mx-9 p-2 px-8 font-semibold"
              >
                {busStates[buses.id] ? "Hide Seat" : "View Seat"}
              </button>
            </div>
          </div>
          <div
            style={{ display: busStates[buses.id] ? "block" : "none" }}
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
                    checked={selection[buses.id] === price}
                    id={buses.id}
                    onChange={(e) => handleChange(e, buses.id)}
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
                <div className="border-2 w-[35vw] rounded-xl ml-6">
                  <div className="flex mb-3 mt-3 justify-center gap-2">
                    {seatIds.slice(0, 7).map((seatId) => (
                      <img
                        key={seatId}
                        src={bed}
                        alt="bed"
                        id={seatId}
                        className={`w-14 h-6 rounded-sm ${seatColor[seatId]}`}
                        onClick={handleClick}
                      />
                    ))}
                  </div>
                  <div className="flex mb-3 justify-center gap-2">
                    {seatIds.slice(7, 14).map((id) => (
                      <img
                        key={id}
                        src={bed}
                        alt="bed"
                        id={id}
                        className={`w-14 h-6 rounded-sm ${seatColor[id]}`}
                        onClick={handleClick}
                      />
                    ))}
                  </div>
                  <div className="flex ml-16 mb-3 justify-center gap-2 mt-12">
                    {seatIds.slice(14, 20).map((id) => (
                      <img
                        key={id}
                        src={bed}
                        alt="bed"
                        id={id}
                        className={`w-14 h-6 rounded-sm ${seatColor[id]}`}
                        onClick={handleClick}
                      />
                    ))}
                  </div>
                </div>
                <div className="border-2 w-[35vw] mt-8 rounded-xl ml-6">
                  <div className="flex mb-3 mt-3 justify-center gap-2">
                    {seatIds.slice(20, 27).map((id) => (
                      <img
                        key={id}
                        src={bed}
                        alt="bed"
                        id={id}
                        className={`w-14 h-6 rounded-sm ${seatColor[id]}`}
                        onClick={handleClick}
                      />
                    ))}
                  </div>
                  <div className="flex mb-3 mt-3 justify-center gap-2">
                    {seatIds.slice(27, 34).map((id) => (
                      <img
                        key={id}
                        src={bed}
                        alt="bed"
                        id={id}
                        className={`w-14 h-6 rounded-sm ${seatColor[id]}`}
                        onClick={handleClick}
                      />
                    ))}
                  </div>
                  <div className="flex mb-3 mt-10 justify-center gap-2 ml-16 ">
                    {seatIds.slice(34, 40).map((id) => (
                      <img
                        key={id}
                        src={bed}
                        alt="bed"
                        id={id}
                        className={`w-14 h-6 rounded-sm ${seatColor[id]}`}
                        onClick={handleClick}
                      />
                    ))}
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
                  <button
                    onClick={handleClicked}
                    className="bg-orange-400 text-white p-4 w-[20vw] font-bold text-xl rounded-xl mt-4"
                  >
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
