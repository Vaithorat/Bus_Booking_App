import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (<div className="bg-gray-300">
    <div className="flex justify-around pt-8 pb-3 ">
      <div>
        <div className="flex text-yellow-600">
          <span class="material-icons self-center">directions_bus</span>
          <button className="font-bold text-xl">RESERVE</button>
        </div>
        <div className="flex flex-col w-[24vw] text-start">
          <div>When you have a choice. Choose Reserve</div>
          <div>
            Reserve offers bus tickets booking through its website, IOS, and
            android mobile app for all major cities.
          </div>
          <div>reserve.bus@reserve.com</div>
        </div>
      </div>
      <div className="text-left">
        <div className="text-xl font-bold">About </div>
        <ul>
          <li>About US</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <div className="text-left">
          <div className="text-xl font-bold ">Useful Link</div>
          <div>
            <ul>
              <li>Careers</li>
              <li>FAQ</li>
              <li>T & C</li>
              <li>Privacy Policy</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="text-xl font-bold">Follow Us</div>
        <div className="flex">
          <AiOutlineInstagram />
          <AiOutlineFacebook />
        </div>
      </div>
    </div>
    <hr className="border-1 border-gray-400 mx-8"/>
      <div >All rights reserved - 2022</div>
  </div>
  );
};

export default Footer;
