import React from "react";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Review from "../components/Review";
import Selector from "../components/Selector";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Selector />
      <Advert />
      <Review />
      <Footer />
    </div>
  );
};

export default Homepage;
