import React, { useState, useMemo } from "react";

const Seat = ({ seatno, setSelectedSeat, filteredSeats, setFilterPrice }) => {
  const [selectSeat, setSelectSeat] = useState(false);
  const [bgColor, setbgColor] = useState("");

  const price = useMemo(() => {
    switch (seatno) {
      case "01":
      case "07":
      case "08":
      case "14":
      case "19":
      case "20":
      case "26":
      case "27":
      case "33":
      case "38":
        return "699";
      case "02":
      case "06":
      case "09":
      case "13":
      case "18":
      case "21":
      case "25":
      case "28":
      case "32":
      case "37":
        return "899";
      case "03":
      case "05":
      case "10":
      case "12":
      case "15":
      case "17":
      case "22":
      case "23":
      case "31":
      case "34":
      case "36":
        return "1199";
      case "04":
      case "11":
      case "16":
      case "24":
      case "29":
      case "35":
        return "1599";
      default:
        return "";
    }
  }, [seatno]);

  const changeColor = () => {
    if (filteredSeats.includes(seatno)) {
      if (selectSeat === false) {
        setSelectSeat(true);
        setbgColor("#0272F8");
        setSelectedSeat(seatno);
        setFilterPrice(price);
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
        } w-14 h-5 rounded-sm mx-3 hover:bg-gray-300`}
        style={{ background: bgColor }}
        onClick={changeColor}
      ></button>
    </div>
  );
};

export default Seat;
