import React, { useState } from "react";

const Sidebar = () => {
  const [checkboxes, setCheckboxes] = useState({
    morning: false,
    afternoon: false,
    evening: false,
  });
  const handleChange = (e) => {
    setCheckboxes({
      ...checkboxes,
      [e.target.name]: e.target.checked,
    });
  };
  const [selectionP, setSelectionP] = useState("mumbai");
  const handleOptionChange = (e) => {
    setSelectionP(e.target.value);
  };
  const [selectionD, setSelectionD] = useState("mumbai");
  const handleOptionChangeD = (e) => {
    setSelectionD(e.target.value);
  };

  return (
    <div className="flex-col flex w-[20vw] mt-3 pb-4 pl-5">
      <div className="flex  border-2 rounded-md my-3 justify-between px-5 py-2">
        <div>Filter</div>
        <div>Clear All</div>
      </div>
      <div className="flex flex-col border-2 mt-2 rounded-md pl-3 gap-y-2">
        <div className="my-2 font-bold text-lg">Departure Time</div>
        <label className="flex justify-start gap-4">
          <input
            type="checkbox"
            name="morningD"
            checked={checkboxes.morningD}
            onChange={handleChange}
          />
          Morning Session
        </label>
        <label className="flex justify-start gap-4">
          <input
            type="checkbox"
            name="afternoonD"
            checked={checkboxes.afternoonD}
            onChange={handleChange}
          />
          Afternoon Session
        </label>
        <label className="flex justify-start gap-4">
          <input
            type="checkbox"
            name="eveningD"
            checked={checkboxes.eveningD}
            onChange={handleChange}
          />
          Evening Session
        </label>
        <hr className="mx-2" />
        <div className="my-2 font-bold text-lg">Arrival Time</div>
        <label className="flex justify-start gap-4">
          <input
            type="checkbox"
            name="morningA"
            checked={checkboxes.morningA}
            onChange={handleChange}
          />
          Morning Session
        </label>
        <label className="flex justify-start gap-4">
          <input
            type="checkbox"
            name="afternoonA"
            checked={checkboxes.afternoonA}
            onChange={handleChange}
          />
          Afternoon Session
        </label>
        <label className="flex justify-start gap-4">
          <input
            type="checkbox"
            name="eveningA"
            checked={checkboxes.eveningA}
            onChange={handleChange}
          />
          Evening Session
        </label>
        <hr className="mx-2" />
        <div className="my-2 font-bold text-lg">Pickup Point</div>
        <label className="flex justify-start gap-4">
          <input
            type="radio"
            value="mumbaiP"
            checked={selectionP === "mumbaiP"}
            onChange={handleOptionChange}
          />
          Mumbai
        </label>
        <label className="flex justify-start gap-4">
          <input
            type="radio"
            value="kolkataP"
            checked={selectionP === "kolkataP"}
            onChange={handleOptionChange}
          />
          Kolkata
        </label>
        <label className="flex justify-start gap-4">
          <input
            type="radio"
            value="bangaloreP"
            checked={selectionP === "bangaloreP"}
            onChange={handleOptionChange}
          />
          Bangalore
        </label>
        <hr className="mx-2" />
        <div className="my-2 font-bold text-lg">Drop off Point</div>
        <label className="flex justify-start gap-4">
          <input
            type="radio"
            value="mumbaiD"
            checked={selectionD === "mumbaiD"}
            onChange={handleOptionChangeD}
          />
          Mumbai
        </label>
        <label className="flex justify-start gap-4">
          <input
            type="radio"
            value="kolkataD"
            checked={selectionD === "kolkataD"}
            onChange={handleOptionChangeD}
          />
          Kolkata
        </label>
        <label className="flex justify-start gap-4">
          <input
            type="radio"
            value="bangaloreD"
            checked={selectionD === "bangaloreD"}
            onChange={handleOptionChangeD}
          />
          Bangalore
        </label>
        <hr className="mx-2" />
        <div className="my-2 font-bold text-lg">Bus Rating</div>
        <label className="flex justify-start gap-4">
          <input
            type="checkbox"
            name="fourstar"
            checked={checkboxes.fourstar}
            onChange={handleChange}
          />
          4 stars or more
        </label>
        <label className="flex justify-start gap-4">
          <input
            type="checkbox"
            name="threestar"
            checked={checkboxes.threestar}
            onChange={handleChange}
          />
          3 stars or more
        </label>
        <label className="flex justify-start gap-4">
          <input
            type="checkbox"
            name="twostar"
            checked={checkboxes.twostar}
            onChange={handleChange}
          />
          0-2 stars
        </label>
        <hr className="mx-2" />
        <div className="my-2 font-bold text-lg">Bus Operator</div>
        <label className="flex justify-start gap-4">
          <input
            type="checkbox"
            name="zing"
            checked={checkboxes.zing}
            onChange={handleChange}
          />
          Zing Bus
        </label>
        <label className="flex justify-start gap-4">
          <input
            type="checkbox"
            name="intercity"
            checked={checkboxes.intercity}
            onChange={handleChange}
          />
          Intercity Smart
        </label>
        <label className="flex justify-start gap-4 mb-4">
          <input
            type="checkbox"
            name="safar"
            checked={checkboxes.safar}
            onChange={handleChange}
          />
          Safar Exp
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
