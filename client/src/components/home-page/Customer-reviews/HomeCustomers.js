import React from "react";
import { CustomerCard } from "./CustomerCard";

export const HomeCustomers = () => {
  return (
    <div className="flex-col bg-gray-200 w-full">
      <div className="flex justify-center">
        <div className="text-3xl text-center mt-4 font-bold w-[24vw] justify-center">
          Here's what a few of our customers have to say about us
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-8  ">
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </div>
    </div>
  );
};
