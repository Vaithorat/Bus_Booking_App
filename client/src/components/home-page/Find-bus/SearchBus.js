import React, { useState } from "react";
import Background from "../../../resources/background.jpg";
import SearchOutput from "./SearchOutput";
import SearchTime from "./SearchTime";
import "../../../styles/Home-page/Searchbus.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { bus_Details, bus_Information } from "../../../redux/action";
import { routes } from "./data";

export const SearchBus = () => {
  const [details, setdetails] = useState({
    to: "",
    from: "",
    date: new Date(),
  });
  const [error, seterror] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sourceCity = routes.map((el, i) => {
    return {
      source: el.source,
    };
  });
  const destinationCity = routes
    .filter((el, i) => {
      return el.source === details.to;
    })
    .map((el, i) => {
      return {
        source: el.destination,
      };
    });
  const detailsHandler = (val, x) => {
    setdetails((prev) => {
      return {
        ...prev,
        [x]: val,
      };
    });
  };
  const getDateHandler = (val) => {
    setdetails((prev) => {
      return {
        ...prev,
        date: val,
      };
    });
  };
  const searchBusHandler = async () => {
    const fetchdata = await fetch(
      "https://bus-booking-u2o9.onrender.com/getDetails",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await fetchdata.json();
    if (res.error) {
      seterror(true);
      seterrorMessage(res.message);
      return;
    } else {
      dispatch(bus_Information(res));
      dispatch(bus_Details(details));
      navigate("/bus-display");
    }
  };
  return (
    <div className="bg-cover bg-center h-[70vh]">
      <div
        className="bg-cover bg-center h-[70vh]"
        style={{ backgroundImage: `url(${Background}) ` }}
      >
        <div className="flex-col items-center justify-center">
          <div className="flex justify-center pt-[20vh]">
            <SearchOutput
              where={"to"}
              cityName={details.to}
              getDetails={detailsHandler}
              cityData={sourceCity}
            />
            <SearchOutput
              where={"from"}
              cityName={details.from}
              getDetails={detailsHandler}
              cityData={destinationCity}
            />
            <SearchTime getDateHandler={getDateHandler} />
          </div>
          <div className="flex justify-center">
            <button
              onClick={searchBusHandler}
              className="text-white  bg-yellow-600 mt-6 p-4 text-3xl rounded-xl px-16"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
