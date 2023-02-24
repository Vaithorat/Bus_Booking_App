import React, { useState } from "react";
import Card from "../Components/Card";
import RatingCard from "../Components/RatingCard";
import Background from "../images/background.jpg";
import buses from "../images/buspic.png";
import emoji from "../images/emojis.png";
import ticket from "../images/ticket.png";
import { useNavigate } from "react-router-dom";

const Home_Page = (props) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    travelDate: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValues.from && formValues.to && formValues.travelDate) {
      navigate("/availablebus");
    } else {
      alert("Please fill all fields before searching.");
    }
  };
  const { from, to, travelDate } = formValues;
  const isFormValid = from && to && travelDate;

  // const [value, setValue] = useState("");
  const data = ["Mumbai ", "Pune", "Delhi", "Chennai", "Banglore"];
  const cardDetails = [
    {
      title: "2000+",
      description: "Bus collection",
      image: buses,
    },
    {
      title: "20 Million",
      description: "Happy customers globally",
      image: emoji,
    },
    {
      title: "5000+",
      description: "Tickets book everyday",
      image: ticket,
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
        <form onSubmit={handleSubmit}>
          <div className="flex-col flex items-center">
            <div className="flex flex-col md:flex-row justify-center items-center pt-[15vh] h-[35vh] rounded-xl ">
              <div className="border-2 pr-3 py-4 rounded-l-xl text-left pl-3 bg-white">
                <label className="text-xl font-bold">
                  From
                  <input
                    type="text"
                    name="from"
                    className="flex w-[18vw] h-12 my-2 text-xl"
                    value={from}
                    list="from-list"
                    onChange={handleChange}
                  />
                  <datalist id="from-list">
                    {data.map((city, id) => (
                      <option key={id} value={city} />
                    ))}
                  </datalist>
                </label>
              </div>
              <div className="border-2 pr-3 py-4 flex flex-col text-left pl-3 bg-white">
                <label className=" text-xl font-bold">
                  To
                  <input
                    type="text"
                    name="to"
                    className="flex w-[18vw] h-12 my-2 text-xl"
                    value={to}
                    list="from-list"
                    onChange={handleChange}
                  />
                    <datalist id="from-list">
                    {data.map((city, id) => (
                      <option key={id} value={city} />
                    ))}
                  </datalist>
                </label>
              </div>
              <div className="border-2 pr-3 py-4 pl-3 text-left  rounded-r-xl bg-white">
                <label className="text-xl font-bold ">
                  Travel Date
                  <input
                    type="date"
                    name="travelDate"
                    className="flex w-[12vw] h-12 my-2 text-xl "
                    value={travelDate}
                    onChange={handleChange}
                  />
                
                </label>
              </div>
            </div>
            <button
              type="submit"
              className={`text-white bg-orange-500 mt-6 p-4 text-3xl rounded-xl px-16 ${
                isFormValid ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Search
            </button>
          </div>
        </form>
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
            image={cardDetail.image}
          />
        ))}
      </div>
      <div className=" flex justify-center">
        <div className="font-bold w-[24vw] text-4xl pt-[3vh]">
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
