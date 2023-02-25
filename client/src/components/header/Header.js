import React from "react";
import {  useNavigate,useLocation  } from "react-router-dom";
import { FaBus } from "react-icons/fa";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    navigate("/");
  }
  const isHome = location.pathname === "/";
  return (
    <div className=" text-lg shadow-xl py-5 px-[100px]  drop-shadow-xl">
    <div className="flex justify-between ">
      <div className="flex gap-9">
        <div className="flex text-yellow-600">
          <span class="material-icons self-center"><FaBus className="BusIcon" /></span>
          <button onClick={handleClick}>RESERVE</button>
        </div>
        <button>Ticket</button>
        <button>Contact Us</button>
      </div>
      <div className="flex gap-9 ">
      {isHome ? (
            <>
              <button className="bg-yellow-600 py-1 px-10 text-white rounded-xl">
                Login
              </button>
              <button>Register</button>
            </>
          ) : (
            <div className="flex justify-center">
              <div className="bg-gray-500 rounded-2xl w-7 mr-2" ></div>
              <div className="font-bold">My Profile</div>
            </div>
          )}
      </div>
    </div>
  </div>
  );
};
