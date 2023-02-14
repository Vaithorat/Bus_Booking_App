import React, { useState } from "react";
import AdvertCard from "./AdvertCard";
let bus = require("../images/buspic.png");
let emoji = require("../images/emojis.png");
let ticket = require("../images/ticket.png");
const Advert = () => {
  // eslint-disable-next-line no-unused-vars
  const [advert, setAdvert] = useState([
    {
      photo: `${bus}`,
      title: "200+",
      subtitle: "bus collection",
      id: 1,
    },
    {
      photo: `${emoji}`,
      title: "20 Million",
      subtitle: "happy customers globally",
      id: 2,
    },
    {
      photo: `${ticket}`,
      title: "5000+",
      subtitle: "tickets booked everyday",
      id: 3,
    },
  ]);
  return (
    <div className="mt-8 items-center flex flex-col">
      <div className="mb-8 text-4xl font-bold">
        Travel with world's largest bus service
      </div>
      <div className="flex">
        <div>
          <AdvertCard advert={advert} />
        </div>
      </div>
      <div className="text-4xl font-bold mt-12 mb-12 w-[28vw]">
        Here's what a few customers have to say about us
      </div>
    </div>
  );
};

export default Advert;
