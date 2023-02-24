import React from "react";

const SearchInput = (props) => {
  const { setValue, data, placeholder } = props;
  return (
    <div>
      <input
        list="data"
        onChange={(e) => setValue(e.target.value)}
        type="search"
        className="w-80 block px-3 py-1.5  bg-white  border  border-gray-500 rounded  "
        placeholder={placeholder}
      />
      <datalist id="data">
        {data.map((op, id) => (
          <option key={id}>{op}</option>
        ))}
      </datalist>
    </div>
  );
};

export default SearchInput;
