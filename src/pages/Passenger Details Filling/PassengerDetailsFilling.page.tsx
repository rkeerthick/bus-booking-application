import React from "react";
import './PassengerDetailsFilling.scss'
import PassengerForm from "../../components/PassengerForm/PassengerForm";
import userStore, { bookedSeatType } from '../../store/userStore'

const PassengerDetailsFilling = () => {
  const seatsList = userStore.userDetails.bookedSeatsIndex;
  return (
    <div className="passenger-details">
      <div className="passenger-details__container">
        {
          seatsList.map((seatDetails: bookedSeatType) => {
            return <PassengerForm seatNo={seatDetails.seatNo} seatIndex={seatDetails.seatIndex} />
          })
        }
      </div>
    </div>
  );
};

export default PassengerDetailsFilling;
