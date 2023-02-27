import React, { useRef } from "react";

const SearchTime = ({ getDateHandler }) => {
  const ref = useRef();
  return (
    <div >
      <div className="bg-white h-[10vh] gap-4 rounded-xl">
        <label className="p-2 text-2xl">
          Travel Date
          <div className="mt-2 p-2  mx-4">
            <input
              type="date"
              id="travel"
              name="travel"
              ref={ref}
              onChange={() => getDateHandler(ref.current.valueAsDate)}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default SearchTime;
