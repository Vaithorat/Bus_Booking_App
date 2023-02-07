import React from "react";

const Navbar = () => {
  return (
    <div className=" text-lg shadow-xl py-5 px-[100px]  drop-shadow-xl">
      <div className="flex justify-between ">
        <div className="flex gap-9">
          <div className="flex text-yellow-600">
            <span class="material-icons self-center">directions_bus</span>
            <button>RESERVE</button>
          </div>
          <button>Ticket</button>
          <button>Contact Us</button>
        </div>
        <div className="flex gap-9 ">
          <button className="bg-yellow-600 py-1 px-10 text-white rounded-xl">Login</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
