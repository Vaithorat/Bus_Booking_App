import React, { useState } from "react";
import Card from "../Components/Card";
import RatingCard from "../Components/RatingCard";
import Background from "../images/background.jpg";
import { Link } from "react-router-dom";
import bus from "../images/buspic.png";
import emojis from "../images/emojis.png";
import ticket from "../images/ticket.png";
import SearchInput from "../Components/SearchInput";
import { useDispatch } from "react-redux";
import { setFromTo } from "../state/actions/fromTo";

const Homepage = (props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const data = ["Mumbai ", "Pune", "Delhi", "Chennai", "Banglore"];
  const dispatch = useDispatch();

  const handleClick = async () => {
    props.setAuthentication(true);
    await setFromTo(dispatch, {
      From: from,
      To: to,
    });
  };
  const cardDetails = [
    {
      title: "2000+",
      description: "bus collection",
      imageURL: bus,
    },
    {
      title: "20 Million",
      description: "happy customers globally",
      imageURL: emojis,
    },
    {
      title: "5000+",
      description: "tickets book everyday",
      imageURL: ticket,
    },
  ];
  const ratingsDetails = [
    {
      name: "Vatsal Agrawal",
      year: "2020",
      description: "Amazing travel experience with reserve. Excellent staff",
    },
    {
      name: "Vanya Agrawal",
      year: "2019",
      description: "Amazing service. Always a best time with reserve.",
    },
    {
      name: "Seema Agrawal",
      year: "2018",
      description: "Bus was clean and the journey was smooth. Reached on time.",
    },
  ];

  return (
    <div>
      <div
        className="bg-cover bg-center h-[60vh]"
        style={{ backgroundImage: `url(${Background}) ` }}
      >
        <div className="flex-col flex items-center">
          <div className="flex justify-center items-center pt-[15vh] h-[35vh] rounded-xl ">
            <div className="border-2 pr-3 py-4 rounded-l-xl text-left pl-3 bg-white">
              <label>
                From
                <SearchInput setVal={setFrom} data={data} />
              </label>
            </div>
            <div className="border-2 pr-3 py-4 text-left pl-3 bg-white">
              <label>
                To
                <SearchInput setVal={setTo} data={data} />
              </label>
            </div>
            <div className="border-2 pr-3 py-4 pl-3 rounded-r-xl bg-white">
              <label>
                Travel Date
                <input
                  type="date"
                  className=" block px-3 py-1.5 text-gray-700 bg-white w-[12vw] border  border-gray-300 rounded "
                  placeholder="Travel-Date"
                />
              </label>
            </div>
          </div>
          <button className="text-white bg-[#FF8700] mt-6 p-4 text-3xl rounded-xl px-16 ">
            <Link
              to="/availablebus"
              // onClick={() => {
              //   props.setAuthentication(true);
              // }}
              onClick={handleClick}
            >
              Search
            </Link>
          </button>
        </div>
      </div>
      <div className="font-bold text-center py-10 text-4xl">
        Travel with world's largest bus service
      </div>
      <div className="flex items-center flex-col m-5  md:flex-row md:justify-center ">
        {cardDetails.map((cardDetail, id) => (
          <Card
            key={id}
            title={cardDetail.title}
            description={cardDetail.description}
            imageURL={cardDetail.imageURL}
          />
        ))}
      </div>
      <div className="font-bold text-3xl py-[5vh]">
        Here's what a few of our customers <br /> have to say
      </div>
      <div className="flex items-center flex-col mt-5 mb-16 py-10 w-full md:flex-row md:justify-center bg-slate-200">
        {ratingsDetails.map((ratingsDetail, id) => (
          <RatingCard
            key={id}
            initial={ratingsDetail.name[0]}
            name={ratingsDetail.name}
            since={ratingsDetail.year}
            description={ratingsDetail.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
