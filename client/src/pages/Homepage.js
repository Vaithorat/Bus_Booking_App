import React, { useState } from "react";
import Card from "../Components/Card";
import RatingCard from "../Components/RatingCard";
import Background from "../images/background.jpg";
import { Link } from "react-router-dom";
import buses from "../images/buspic.png";
import emoji from "../images/emojis.png";
import ticket from "../images/ticket.png";
import SearchInput from "../Components/SearchInput";

const Home_Page = (props) => {
  const [val, setVal] = useState("");
  const data = ["Mumbai ", "Pune", "Delhi", "Chennai", "Banglore"];
  const cardDetails = [
    {
      title: "2000+",
      description: "Bus collection",
      imageURL: buses,
    },
    {
      title: "20 Million",
      description: "Happy customers globally",
      imageURL: emoji,
    },
    {
      title: "5000+",
      description: "Tickets book everyday",
      imageURL: ticket,
    },
  ];
  const ratingsDetails = [
    {
      name: "Vatsai Agrawal",
      year: "2020",
      rating: "4.5",
      description: " Awesome travel experience with reserve. Excellent Staff",
      id: 1,
    },
    {
      name: "Vanya Agrawal",
      year: "2019",
      rating: "4.5",
      description: " Awesome service. Always the best time with reserve",
      id: 2,
    },
    {
      name: "Seema Agrawal",
      year: "2018",
      rating: "4.5",
      description: "Bus was clean and journey was smooth. Reached on time",
      id: 3,
    },
  ];

  return (
    <div>
      <div
        className="bg-cover bg-center h-[60vh]"
        style={{ backgroundImage: `url(${Background}) ` }}
      >
        <div className="flex-col flex items-center">
          <div className="flex flex-col md:flex-row justify-center items-center pt-[15vh] h-[35vh] rounded-xl ">
            <div className="border-2 pr-3 py-5 rounded-l-xl text-left pl-3 bg-white">
              <label>
                From
                <SearchInput setVal={setVal} data={data} />
              </label>
            </div>
            <div className="border-2 pr-3 py-5 text-left pl-3 bg-white">
              <label>
                To
                <SearchInput setVal={setVal} data={data} />
              </label>
            </div>
            <div className="border-2 pr-3 py-5 pl-3 rounded-r-xl bg-white">
              <label>
                Travel Date
                <input
                  type="date"
                  className="form-control relative flex-auto block w-full px-3 py-1.5  border border-solid    "
                  placeholder="Travel-Date"
                  aria-label="Travel-Date"
                  aria-describedby="button-addon2"
                />
              </label>
            </div>
          </div>
          <button className="text-white bg-[#FF8700] mt-6 p-4 text-3xl rounded-xl px-16 ">
            <Link
              to="/availablebus"
              onClick={() => {
                props.setAuthentication(true);
              }}
            >
              Search
            </Link>
          </button>
        </div>
      </div>
      <div className="font-bold text-center py-10 text-2xl">
        Travel with world's largest bus service
      </div>
      <div className="flex items-center justify-center m-5  ">
        {cardDetails.map((cardDetail, id) => (
          <Card
            key={id}
            title={cardDetail.title}
            description={cardDetail.description}
            imageURL={cardDetail.imageURL}
          />
        ))}
      </div>
      <div className=" flex justify-center">
        <div className="font-bold w-[20vw] text-2xl pt-[5vh]">
          Here's what a few of our customers have to say
        </div>
      </div>
      <div className="flex mt-5 mb-10 py-10 justify-center bg-gray-200">
        {ratingsDetails.map((ratingsDetail, id) => (
          <RatingCard
            key={id}
            initial={ratingsDetail.name[0]}
            name={ratingsDetail.name}
            since={ratingsDetail.year}
            rating={ratingsDetail.rating}
            description={ratingsDetail.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home_Page;
