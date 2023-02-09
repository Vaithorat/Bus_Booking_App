import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar"
import BusCard from "../components/BusCard";

const BusAvail = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
      <Sidebar/>
      <div>
      <BusCard/>
      <BusCard/>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusAvail;
