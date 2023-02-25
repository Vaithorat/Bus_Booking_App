import React, { useState } from "react";
import { motion } from "framer-motion";

const SearchOutput = ({
  where,
  cityName,
  getDetails,
  cityData,
  selectCity,
}) => {
  const [modal, setmodal] = useState(false);
  const selectCityHander = (val) => {
    getDetails(val, where);
    setmodal(false);
  };
  return (
    <div className="text-2xl">
      <div className="w-[16vw] rounded-xl h-[10vh] p-4 bg-white" onClick={() => setmodal((prev) => !prev)}>
        <div className="px-2">{where}</div>
        <div className="border-2 m-2 rounded-md px-2" >{cityName}</div>
      </div>
      {modal && (
        <motion.div
          className="bg-gray-500 p-2 text-white rounded-b-md "
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          {cityData.map((el, i) => (
            <li key={i} onClick={(e) => selectCityHander(e.target.textContent)}>
              {el.source}
            </li>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SearchOutput;
