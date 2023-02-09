import React from "react";
import { AiOutlineStar } from "react-icons/ai";
const Review = () => {
  return (
    <div className="flex justify-center gap-8 bg-gray-200 py-8  ">
      <div className="flex-col flex border-2 w-[20vw] rounded-xl bg-white shadow-2xl items-start p-2 px-6">
        <div className=" flex justify-start items-center gap-2 pt-4">
          <div className="flex justify-center rounded-[90%] bg-red-300 font-bold text-white p-4 text-5xl w-[4vw]">
            V
          </div>
          <div className="flex flex-col items-start">
            <div className="font-bold text-2xl">Vatsai Agrawal</div>
            <div>Customer since 2020</div>
          </div>
        </div>
        <div className="flex items-center border-2 bg-green-600 px-2 py-1 my-2 gap-1 rounded-xl text-white">
          <div>
            <AiOutlineStar />
          </div>
          <div>4.5</div>
        </div>
        <div className="flex text-start">
          Awesome travel experience with reserve. Excellent Staff
        </div>
      </div>
      <div className="flex-col flex border-2 w-[20vw] rounded-xl shadow-2xl bg-white  items-start p-2 px-6">
        <div className=" flex justify-start items-center gap-2 pt-4">
          <div className="flex justify-center  rounded-[90%] bg-red-300 font-bold text-white p-4 text-5xl w-[4vw]">
            V
          </div>
          <div className="flex flex-col items-start">
            <div className="font-bold text-2xl">Vanya Agrawal</div>
            <div>Customer since 2019</div>
          </div>
        </div>
        <div className="flex items-center border-2 bg-green-600 px-2 py-1 my-2 gap-1 rounded-xl text-white">
          <div>
            <AiOutlineStar />
          </div>
          <div>4.5</div>
        </div>
        <div className="flex text-start">
          Amazing Service. Always at best time with reserve.
        </div>
      </div>
      <div className="flex-col flex border-2 w-[20vw] rounded-xl shadow-2xl bg-white  items-start p-2 px-6">
        <div className=" flex justify-start items-center gap-2 pt-4">
          <div className="flex justify-center rounded-[90%] bg-blue-200 font-bold text-white p-4 text-5xl w-[4vw]">
            S
          </div>
          <div className="flex flex-col items-start">
            <div className="font-bold text-2xl">Seema Agrawal</div>
            <div>Customer since 2018</div>
          </div>
        </div>
        <div className="flex items-center border-2 bg-green-600 px-2 py-1 my-2 gap-1 rounded-xl text-white">
          <div>
            <AiOutlineStar />
          </div>
          <div>4.5</div>
        </div>
        <div className="flex text-start">
          Bus was clean and the journey was smooth. Reached on time.
        </div>
      </div>
    </div>
  );
};

export default Review;
