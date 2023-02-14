import React, { useState } from "react";
let Background = require("../images/background.jpg");

const indianCities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Visakhapatnam",
  "Bhopal",
  "Patna",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Vadodara",
  "Varanasi",
  "Thane",
  "Madurai",
  "Meerut",
  "Faridabad",
];

const Selector = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  return (
    <div>
      <div
        className="bg-cover bg-center h-[60vh]"
        style={{ backgroundImage: `url(${Background}) ` }}
      >
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center h-[35vh] rounded-xl ">
            <label className="border-2 text-gray-400 pr-2 font-bold  text-xl  py-4 rounded-l-xl text-left pl-3 bg-white">
              From
              <div>
                <input
                  type="search"
                  name="departure"
                  className="text-black w-[20vw] p-2"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  list="indianCities"
                />
                <datalist id="indianCities">
                  {indianCities.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
              </div>
            </label>
            <label className="border-2 text-gray-400 font-bold text-xl pr-2 py-4 text-left pl-3 bg-white">
              To
              <div>
                <input
                  type="search"
                  name="arrival"
                  className="text-black w-[20vw] p-2"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  list="indianCities"
                />
                <datalist id="indianCities">
                  {indianCities.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
              </div>
            </label>
            <label className="border-2 text-xl text-gray-400 pl-2 font-bold pr-2 py-4 rounded-r-xl bg-white">
              Travel Date
              <div className="text-black">
                <input type="date" className="w-[10vw] p-2" />
              </div>
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-yellow-600 mt-6 p-4 text-3xl rounded-xl px-16">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selector;
