import React, { useState } from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  // eslint-disable-next-line no-unused-vars
  const [person, setPerson] = useState([
    
    {
      symbol: "V",
      name: "Vatsai Agrawal",
      year: "2020",
      rating: "4.5",
      review: " Awesome travel experience with reserve. Excellent Staff",
      id: 1,
    },
    {
      symbol: "V",
      name: "Vanya Agrawal",
      year: "2019",
      rating: "4.5",
      review: " Awesome service. Always the best time with reserve",
      id: 2,
    },
    {
      symbol: "S",
      name: "Seema Agrawal",
      year: "2018",
      rating: "4.5",
      review: "Bus was clean and journey was smooth. Reached on time",
      id: 3,
    },
  ]);

  return (
    <div className=" bg-gray-200 py-8  ">
      <ReviewCard person={person} />
    </div>
  );
};

export default Review;
