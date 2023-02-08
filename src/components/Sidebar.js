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
  const [selection, setSelection] = useState("mumbai");
  const handleOptionChange = (e) => {
    setSelection(e.target.value);
  };

  return (
    <div className="flex-col flex w-[10vw]">
      <div className="flex">
        <div>Filter</div>
        <div>Clear All</div>
      </div>
      <div>Departure Time</div>
      <label>
        <input
          type="checkbox"
          name="morningD"
          checked={checkboxes.morningD}
          onChange={handleChange}
        />
        Morning
      </label>
      <label>
        <input
          type="checkbox"
          name="afternoonD"
          checked={checkboxes.afternoonD}
          onChange={handleChange}
        />
        Afternoon
      </label>
      <label>
        <input
          type="checkbox"
          name="eveningD"
          checked={checkboxes.eveningD}
          onChange={handleChange}
        />
        Evening
      </label>
      <hr />
      <div>Arrival Time</div>
      <label>
        <input
          type="checkbox"
          name="morningA"
          checked={checkboxes.morningA}
          onChange={handleChange}
        />
        Morning
      </label>
      <label>
        <input
          type="checkbox"
          name="afternoonA"
          checked={checkboxes.afternoonA}
          onChange={handleChange}
        />
        Afternoon
      </label>
      <label>
        <input
          type="checkbox"
          name="eveningA"
          checked={checkboxes.eveningA}
          onChange={handleChange}
        />
        Evening
      </label>
      <hr />
      <div>Pickup Point</div>
      <label>
        <input
          type="radio"
          value="mumbaiP"
          checked={selection === "mumbaiP"}
          onChange={handleOptionChange}
        />
        Mumbai
      </label>
      <label>
        <input
          type="radio"
          value="kolkataP"
          checked={selection === "kolkataP"}
          onChange={handleOptionChange}
        />
        Kolkata
      </label>
      <label>
        <input
          type="radio"
          value="bangaloreP"
          checked={selection === "bangaloreP"}
          onChange={handleOptionChange}
        />
        Bangalore
      </label>
      <hr />
      <div>Drop off Point</div>
      <label>
        <input
          type="radio"
          value="mumbaiA"
          checked={selection === "mumbaiA"}
          onChange={handleOptionChange}
        />
        Mumbai
      </label>
      <label>
        <input
          type="radio"
          value="kolkataA"
          checked={selection === "kolkataA"}
          onChange={handleOptionChange}
        />
        Kolkata
      </label>
      <label>
        <input
          type="radio"
          value="bangaloreA"
          checked={selection === "bangaloreA"}
          onChange={handleOptionChange}
        />
        Bangalore
      </label>
      <hr />
      <div>Bus Rating</div>
      <label>
        <input
          type="checkbox"
          name="fourstar"
          checked={checkboxes.fourstar}
          onChange={handleChange}
        />
        4 stars or more
      </label>
      <label>
        <input
          type="checkbox"
          name="threestar"
          checked={checkboxes.threestar}
          onChange={handleChange}
        />
        3 stars or more
      </label>
      <label>
        <input
          type="checkbox"
          name="twostar"
          checked={checkboxes.twostar}
          onChange={handleChange}
        />
        0-2 stars
      </label>
      <hr />
      <div>Bus Operator</div>
      <label>
        <input
          type="checkbox"
          name="zing"
          checked={checkboxes.zing}
          onChange={handleChange}
        />
        Zing Bus
      </label>
      <label>
        <input
          type="checkbox"
          name="intercity"
          checked={checkboxes.intercity}
          onChange={handleChange}
        />
        Intercity Smart
      </label>
      <label>
        <input
          type="checkbox"
          name="safar"
          checked={checkboxes.safar}
          onChange={handleChange}
        />
        Safar Exp
      </label>
    </div>
  );
};

export default Sidebar;
