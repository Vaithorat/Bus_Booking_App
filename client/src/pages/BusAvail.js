import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Filters } from "../components/Sidebar";
import Bus from "../components/Bus";

const BusAvail = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mx-7">
        <Filters />
        <Bus />
      </div>
      <Footer />
    </div>
  );
};

export default BusAvail;
