import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Bus from "../components/Bus";

const BusAvail = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div>
          <Bus />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusAvail;
