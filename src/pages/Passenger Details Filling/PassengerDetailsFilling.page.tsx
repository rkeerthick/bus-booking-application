import React from "react";
import './PassengerDetailsFilling.scss'
import PassengerForm from "../../components/PassengerForm/PassengerForm";

const PassengerDetailsFilling = () => {
  return (
    <div className="passenger-details">
      <div className="passenger-details__container">
        <PassengerForm />
        <PassengerForm />
        <PassengerForm />
      </div>
    </div>
  );
};

export default PassengerDetailsFilling;
