import React from "react";

const InputContainer = ({ nameRef, genderRef, age, emailRef, mobileRef }) => {
  return (
    <>
      <div className="pl-8 mb-[14.6vh] ">
        <div>
          <div className="my-8 text-xl font-bold">Enter Traveller Details</div>
        </div>
        <div className="border-4 border-gray-300 p-4 shadow-lg rounded-lg">
          <div className="mr-4 text-3xl">
            <div>Passenger 1 Seat 16</div>
          </div>
          <div className="flex my-4 justify-start gap-8">
            <div>
              <label className="font-semibold text-xl flex" htmlFor="">
                Name
              </label>
              <input
                type="text"
                name=""
                id=""
                ref={nameRef}
                className="rounded-lg border-2 w-[14vw]"
              />
            </div>
            <div>
              <label className="font-semibold text-xl flex" htmlFor="gender">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                ref={genderRef}
                className="border-2 rounded-lg w-[10vw]"
              >
                <option value="select">-SELECT-</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-xl flex" htmlFor="">
                Age
              </label>
              <input
                type="number"
                name=""
                className="border-2 rounded-lg"
                id=""
                ref={age}
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div>
              <label className="font-semibold text-xl flex" htmlFor="">
                Email ID
              </label>
              <input
                className="border-2 w-[14vw] rounded-lg"
                type="email"
                name=""
                id=""
                ref={emailRef}
              />
            </div>
            <div>
              <label className="font-semibold text-xl flex" htmlFor="">
                Mobile No
              </label>
              <input
                className="border-2 rounded-lg w-[10vw]"
                type="tel"
                name=""
                id=""
                ref={mobileRef}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputContainer;
