import React from "react";
import Ticket from "./Ticket";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const CusDetails = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/payment-page");
  }
  return (
    <div className="flex-col ">
      <div>
        <Navbar />
        <div className="flex mb-[17vh]">
          <div className="mx-8">
            <Ticket />
            <div className="mx-10 ">
              <div className="text-xl p-4 font-bold">
                Enter Traveller Details
              </div>
              <div className="border-2 p-4 ">
                <div className="font-bold ">
                  <div>Passenger 1 </div>
                  <div>Seat 20</div>
                </div>
                <div className="flex-col gap-y-8 items-between">
                  <div className="flex justify-start gap-8">
                    <label>
                      Name
                      <input
                        type="name"
                        name="name"
                        className="text-black flex border-2 w-[20vw] p-2"
                      />
                    </label>
                    <label>
                      Age
                      <input
                        type="number"
                        name="age"
                        className="text-black flex border-2 p-2"
                      />
                    </label>
                    <label>
                      Gender
                      <select
                        name="gender"
                        className="text-black flex border-2 w-[10vw] p-2"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex justify-start gap-8">
                    <label>
                      Email Id
                      <input
                        type="email"
                        name="name"
                        className="text-black flex border-2 w-[20vw]  p-2"
                      />
                    </label>
                    <label>
                      Mobile No.
                      <input
                        type="tel"
                        pattern={10}
                        name="name"
                        className="text-black flex border-2 p-2"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 ml-6 flex-col w-[28vw] items-between border-2 h-fit py-8 px-6 rounded-xl">
            <div>
              <div className="text-3xl mb-4 font-bold">Fare Details</div>
              <div className="flex justify-between">
                <div>Base Fare</div>
                <div className="text-lg font-bold">₹799</div>
              </div>
              <div className="flex justify-between">
                <div>Tax</div>
                <div className="text-lg font-bold">₹150</div>
              </div>
              <div className="flex justify-between">
                <div>Offer Applied</div>
                <div className="text-lg font-bold">₹50</div>
              </div>
              <hr className="my-6  border-black" />
              <div className="flex justify-between mt-6 text-lg font-bold">
                <div className="">Total Price</div>
                <div>₹899</div>
              </div>
            </div>
            <div className="flex justify-center mt-12 ">
              <button
                onClick={handleClick}
                className="w-full h-[6vh] text-white bg-yellow-600 text-xl rounded-xl "
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CusDetails;
