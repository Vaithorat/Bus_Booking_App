import React from "react";

const CusDetails = () => {
  return (
    <div className="border-2 rounded-md">
      <div className="text-left p-4">
        <div className="font-bold">
          <span>Passenger1</span>
          <span className="ml-3">Seat 16</span>
        </div>
        <div className="flex">
          <div className="my-2">
            <label className="text-slate-600">Name</label>
            <input
              type="text"
              className="w-96 my-2 form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="my-2 ml-3">
            <label className="text-slate-600">Gender</label>
            <select
              name="gender"
              className="w-40 my-2 form-control relative flex-auto min-w-0 block px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              <option value="macos">Select</option>
              <option value="macos">Male</option>
              <option value="windows">Female</option>
              <option value="windows">Other</option>
            </select>
          </div>
          <div className="my-2 ml-3">
            <label className="text-slate-600">Age</label>
            <input
              type="number"
              className="w-40 my-2 form-control relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex">
          <div className="my-2">
            <label className="text-slate-600">Email</label>
            <input
              type="email"
              className="w-96 my-2 form-control relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="my-2 ml-3">
            <label className="text-slate-600">Mobile No</label>
            <input
              type="tel"
              className="w-52 my-2 form-control relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CusDetails;
