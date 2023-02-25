import React from "react";
import "../../styles/Bus-display/calender.css";
import DatePicker from "react-horizontal-datepicker";

export const Calender = () => {
  return (
    <div className="p-4">
      <DatePicker  labelFormat={"MMM"} color={"#08001C"} />
    </div>
  );
};
