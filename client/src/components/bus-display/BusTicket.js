import React from "react";
import { useNavigate } from "react-router-dom";

const BusTicket = ({ selectedBus }) => {
  const { bus } = selectedBus;
  const { fare } = selectedBus.selectedBus;
  const seats = selectedBus.selectedBus.seletedSeats;
  const mappedSeats =
    seats.length === 0 ? "0" : seats.map((el) => el.seatNumber).join(",");
  const price = seats.length === 0 ? "0" : seats.length * fare;
  const navigate = useNavigate();
  const onSubmitHandler = () => {
    if (seats.length === 0) {
      return;
    }
    navigate("/info");
  };
  return (
    <div className="flex flex-col justify-between px-10 py-5 border-2 border-gray-400 w-[40%] ml-10 rounded-md">
      <div className="text-lg font-bold">
        <div className="text-3xl text-center">Boarding and Dropping</div>
      </div>
        <div className="mt-4 text-2xl font-bold">
          <div>Fare Details</div>
        </div>
      <div className="flex justify-between ">
        <div >
          <div className="font-bold text-lg">{bus.source} </div>
          <div className="">Taxi Stand, Mughal Road</div>
        </div>
        <div className="font-bold text-lg">
          <div>{bus.departureTime}</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div >
          <div className="font-bold text-lg">{bus.destination} </div>
          <div className="">Taxi Stand, Mughal Road</div>
        </div>
        <div className="font-bold text-lg">
          <div>{bus.arrivalTime}</div>
        </div>
      </div>
      <div className="font-bold text-lg flex justify-between">
        <div>Seat No.</div>
        <div>{mappedSeats}</div>
      </div>
      <div >
        <div className="fare flex justify-between">
          <div >
            <div className="text-xl font-bold">Amount</div>
            <div >Taxi Stand, Mughal Road</div>
          </div>
          <div className="text-xl font-bold">
            <div>INR {price}</div>
          </div>
        </div>
      </div>
      <br />
      <div  onClick={onSubmitHandler}>
        <button className="bg-orange-500 w-full text-white text-xl py-3 rounded-lg font-bold" >Proceed to Book</button>
      </div>
    </div>
  );
};

export default BusTicket;
