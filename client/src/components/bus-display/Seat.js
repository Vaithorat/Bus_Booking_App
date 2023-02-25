import React from "react";
import { useDispatch } from "react-redux";
import { add_seats } from "../../redux/action";

const Seat = ({ seatNumber, isAvailable, id, includes }) => {
  const dispatch = useDispatch();
  const seatHandler = () => {
    if (!isAvailable) {
      return;
    }
    const seatData = {
      seatNumber,
    };
    dispatch(add_seats(seatData));
  };
  const bg = isAvailable === false ? "grey" : includes ? "#3498DB" : "";
  return (
    <div
      className="w-[3vw] hover:bg-gray-200 h-[3vh] border-2 border-solid border-gray-400 block rounded-md m-2 cursor-pointer
      "
      style={{
        backgroundColor: `${bg}`,
      }}
      onClick={seatHandler}
    ></div>
  );
};

export default Seat;
