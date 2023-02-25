import React, { useState } from "react";

const Seat = ({ seatno, setSelectedSeat, filteredSeats, setFilterPrice }) => {
  const [selectSeat, setSelectSeat] = useState(false);
  const [bgColor, setbgColor] = useState("");

  let ChangeColor = () => {
    if (filteredSeats.includes(seatno)) {
      if (selectSeat === false) {
        setSelectSeat(true);
        setbgColor("#0272F8");
        setSelectedSeat(seatno);

        if (["01", "07", "08", "14", "19", "20", "26", "27", "33", "38"].includes(seatno)) {
          setFilterPrice("699");
        } else if (["02", "06", "09", "13", "18", "21", "25", "28", "32", "37"].includes(seatno)) {
          setFilterPrice("899");
        } else if (["03","05","10","12","15","17","22","24","29","31","34","36"].includes(seatno)) {
          setFilterPrice("1199");
        } else if (["04", "11", "16", "23", "30", "35"].includes(seatno)) {
          setFilterPrice("1599");
        }
      } else {
        setSelectSeat(false);
        setbgColor("");
        setSelectedSeat("");
        setFilterPrice("");
      }
    }
  };
  return (
    <div>
      <button
        className={`border-2 ${
          filteredSeats.includes(seatno) ? "border-gray-400" : "border-gray-200"
        } w-14 h-5 rounded-sm mx-3 hover:bg-slate-300`}
        style={{ background: bgColor }}
        onClick={ChangeColor}
      ></button>
    </div>
  );
};

export default Seat;
