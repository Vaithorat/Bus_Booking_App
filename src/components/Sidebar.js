import { useState } from "react";

export const options = {
  departureTime: [
    { name: "morningD", label: "Morning Session" },
    { name: "afternoonD", label: "Afternoon Session" },
    { name: "eveningD", label: "Evening Session" },
  ],
  arrivalTime: [
    { name: "morningA", label: "Morning Session" },
    { name: "afternoonA", label: "Afternoon Session" },
    { name: "eveningA", label: "Evening Session" },
  ],
  pickupPoint: [
    { name: "mumbaiP", label: "Mumbai" },
    { name: "kolkataP", label: "Kolkata" },
    { name: "bangaloreP", label: "Bangalore" },
  ],
  dropOffPoint: [
    { name: "mumbaiD", label: "Mumbai" },
    { name: "kolkataD", label: "Kolkata" },
    { name: "bangaloreD", label: "Bangalore" },
  ],
  busRating: [
    { name: "fourstar", label: "4 stars or more" },
    { name: "threestar", label: "3 stars or more" },
    { name: "twostar", label: "0-2 stars" },
  ],
  busOperator: [
    { name: "zing", label: "Zing Bus" },
    { name: "intercity", label: "Intercity Smart" },
    { name: "safar", label: "Safar Exp" },
  ],
};

export const Checkbox = ({ name, label, checked, onChange }) => {
  return (
    <label className="flex justify-start gap-4">
      <input type="checkbox" name={name} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export const Radio = ({ name, value, label, checked, onChange }) => {
  return (
    <label className="flex justify-start gap-4">
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export const FilterSection = ({ title, options, type, selection, handleOptionChange, checkboxes, handleChange }) => {
  return (
    <div className="flex flex-col border-2 mt-2 rounded-md pl-3 gap-y-2 pr-28">
      <div className="my-2 font-bold text-lg">{title}</div>
      {type === "checkbox" && options.map((option) => (
        <Checkbox
          key={option.name}
          name={option.name}
          label={option.label}
          checked={checkboxes[option.name]}
          onChange={handleChange}
        />
      ))}
      {type === "radio" && options.map((option) => (
        <Radio
          key={option.name}
          name={title === "Pickup Point" ? "pickupPoint" : "dropOffPoint"}
          value={option.name}
          label={option.label}
          checked={selection === option.name}
          onChange={handleOptionChange}
        />
      ))}
      <hr className="mx-2" />
    </div>
  );
};

export const Filters = () => {
  const [selectionP, setSelectionP] = useState("");
  const [selectionD, setSelectionD] = useState("");
  const [checkboxes, setCheckboxes] = useState({
    morningD: false,
    afternoonD: false,
    eveningD: false,
    morningA: false,
    afternoonA: false,
    eveningA: false,
    mumbaiP: false,
    kolkataP: false,
    bangaloreP: false,
    mumbaiD: false,
    kolkataD: false,
    bangaloreD: false,
    fourstar: false,
    threestar: false,
    twostar: false,
    zing: false,
    intercity: false,
    safar: false,
    });
    
    const handleOptionChange = (e) => {
    const value = e.target.value;
    if (e.target.name === "pickupPoint") {
    setSelectionP(value);
    } else {
    setSelectionD(value);
    }
    };
    
    const handleChange = (e) => {
    const { name } = e.target;
    setCheckboxes((prev) => ({ ...prev, [name]: !prev[name] }));
    };
    
    return (
    <div className="flex flex-col mt-8">
    <FilterSection
         title="Departure Time"
         options={options.departureTime}
         type="checkbox"
         checkboxes={checkboxes}
         handleChange={handleChange}
       />
    <FilterSection
         title="Arrival Time"
         options={options.arrivalTime}
         type="checkbox"
         checkboxes={checkboxes}
         handleChange={handleChange}
       />
    <FilterSection
         title="Pickup Point"
         options={options.pickupPoint}
         type="radio"
         selection={selectionP}
         handleOptionChange={handleOptionChange}
       />
    <FilterSection
         title="Drop Off Point"
         options={options.dropOffPoint}
         type="radio"
         selection={selectionD}
         handleOptionChange={handleOptionChange}
       />
    <FilterSection
         title="Bus Rating"
         options={options.busRating}
         type="checkbox"
         checkboxes={checkboxes}
         handleChange={handleChange}
       />
    <FilterSection
         title="Bus Operator"
         options={options.busOperator}
         type="checkbox"
         checkboxes={checkboxes}
         handleChange={handleChange}
       />
    </div>
    );
}