import React from "react";

const AdvertCard = (props) => {
  const adverts = props.advert;
  return (
    <div className="flex ">
      {adverts.map((advert, index) => (
        <div
          key={index}
          className="border-2 flex flex-col shadow-xl  justify-center items-center w-[12vw] p-8 mr-4 rounded-xl"
        >
          <img
            src={advert.photo}
            alt="bus"
            className="h-20 flex justify-center "
          ></img>
          <div className="text-xl font-bold">{advert.title}</div>
          <div className="text-sm">{advert.subtitle}</div>
        </div>
      ))}
    </div>
  );
};

export default AdvertCard;
