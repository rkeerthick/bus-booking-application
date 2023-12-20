import React from "react";
import "./BusCard.scss";
import { useNavigate } from "react-router-dom";

const BusCard = ({
  boardingPoint,
  endPoint,
  startTime,
  endTime,
  name,
  availableSeats,
  id,
}: any) => {
  const navigate = useNavigate();

  return (
    <div className="bus-card" onClick={() => navigate("/busLayout")}>
      <div className="bus-card__container">
        <div className="bus-card__container__left">
          <div className="bus-name-container">
            <span className="bus-name">Travel Name : {name}</span>
          </div>
          <span className="from-place">{boardingPoint}</span>
          <span className="departure-time">{startTime}</span>
        </div>

        <div className="bus-card__container__right">
          <div className="available-seats">
            <span className="seats">Available Seats : {availableSeats}</span>
          </div>
          <span className="to-place">{endPoint}</span>
          <span className="arrival-time">{endTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BusCard;
