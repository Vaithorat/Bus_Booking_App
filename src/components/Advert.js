import React from "react";
import AdvertCard from "./AdvertCard";

const Advert = () => {
  return (
    <div className="mt-8 items-center flex flex-col">
      <div className="mb-8 text-4xl font-bold">
        Travel with world's largest bus service
      </div>
      <div className="flex">
        <div>
          <AdvertCard />
        </div>
        <div>
          <AdvertCard />
        </div>
        <AdvertCard />
      </div>
      <div className="text-4xl font-bold mt-12 mb-12 w-[28vw]">
        Here's what a few customers have to say about us
      </div>
    </div>
  );
};

export default Advert;
