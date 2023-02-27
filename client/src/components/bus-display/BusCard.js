import React, { useState } from "react";
import "../../styles/Bus-display/buscard.css";
import BusCardLeft from "./BusCardLeft";
import BusSeats from "./BusSeats";
import { useDispatch, useSelector } from "react-redux";
import { select_bus, unavailable_seats } from "../../redux/action";

const BusCard = ({
  busData,
  routeId,
  arrivalTime,
  departureTime,
  destination,
  source,
}) => {
  const [seatDisplay, setseatDisplay] = useState(false);
  const { selectedBus, busDetails } = useSelector((state) => state.reducer);
  const { date } = busDetails;
  const { seats, _id } = busData;
  const bus = {
    routeId,
    arrivalTime,
    departureTime,
    destination,
    source,
  };
  const dispatch = useDispatch();
  const seatDisplayHandler = async () => {
    dispatch(select_bus({ ...busData, seletedSeats: [] }));
    const data = {
      routeId,
      date: date,
      busId: _id,
    };
    const fetchdata = await fetch("https://bus-booking-app.netlify.app/getSeats", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await fetchdata.json();
    if (res.length !== 0) {
      dispatch(unavailable_seats(res, data.busId));
    }
    setseatDisplay(!seatDisplay);
  };
  return (
    <>
      <div className="w-full border-2 border-gray-400 rounded-md flex flex-col mb-10 shadow-md">
        <div className="flex">
          <BusCardLeft
            data={busData}
            routeId={routeId}
            arrivalTime={arrivalTime}
            departureTime={departureTime}
            destination={destination}
            source={source}
          />
          <div className="w-[20vw] py-4 border-l-2 border-gray-400 flex flex-col justify-between items-center text-center ">
            <div className="text-md">
              <div className="text-xl font-bold">Trip Cost</div>
              <div>Starts From</div>
              <div className="text-2xl my-2 font-bold">₹ 500</div>
            </div>
            <div onClick={seatDisplayHandler}>
              <button className="bg-orange-500 p-2 rounded-lg text-white font-bold text-xl px-3">View Seat</button>
            </div>
          </div>
        </div>
        {seatDisplay && (
          <BusSeats
            seats={seats}
            selectedSeats={selectedBus.seletedSeats}
            selectedBus={{ selectedBus, bus }}
          />
        )}
      </div>
    </>
  );
};

export default BusCard;
