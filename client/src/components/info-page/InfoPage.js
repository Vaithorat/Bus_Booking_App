import React, { useRef } from "react";
import BusCardLeft from "../bus-display/BusCardLeft";
import FareDetails from "./FareDetails";
import InputContainer from "./InputContainer";
import "../../styles/Infopage/infopage.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { payement_succesful, user_Details } from "../../redux/action";

const InfoPage = () => {
  const { selectedBus, busDetails, busInformation } = useSelector(
    (state) => state.reducer
  );
  const price = selectedBus.seletedSeats.length * selectedBus.fare;
  const nameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const age = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = async () => {
    const data = {
      userName: nameRef.current.value,
      userMobile: mobileRef.current.value,
      userEmail: emailRef.current.value,
      userGender: genderRef.current.value,
      userAge: age.current.value,
      busId: selectedBus._id,
      selectedSeats: selectedBus.seletedSeats,
      totalPrice: price,
      dateOfJourney: busDetails.date,
      routeId: busInformation[0]._id,
    };
    const fetchdata = await fetch(
      "https://bus-booking-u2o9.onrender.com/bookTicket",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await fetchdata.json();
    console.log(res);
    dispatch(payement_succesful(res));
    navigate("/info/payment");
  };
  return (
    <div className="flex">
      <div className="w-full">
        <div className="p-4 border-2 border-gray-400 shadow-lg rounded-2xl ml-8 mt-12">
          <BusCardLeft data={selectedBus} />
        </div>
        <InputContainer
          nameRef={nameRef}
          mobileRef={mobileRef}
          emailRef={emailRef}
          genderRef={genderRef}
          age={age}
        />
      </div>
      <div className="w-[24vw] mx-12">
        <FareDetails price={price} onSubmitHandler={onSubmitHandler} />
      </div>
    </div>
  );
};

export default InfoPage;
