import React from "react";
import "./BusCard.scss";
import { useNavigate } from "react-router-dom";
import SelectedBusStore from '../../store/selectedBusStore'
import { observer } from "mobx-react-lite";

export type busCardProps = {
  boardingPoint: string;
  endPoint: string;
  startTime: string;
  endTime: string;
  busName: string;
  availableSeats: number;
  id: string;
  seatType: string
};

const BusCard = observer(({
  boardingPoint,
  endPoint,
  startTime,
  endTime,
  busName,
  availableSeats,
  id,
  seatType
}: busCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="bus-card"
      onClick={() => {
        SelectedBusStore.busDetails = {
          id,
          busName,
          availableSeats,
          seatType,
          startTime,
          endTime
        };
        navigate("/busLayout");
      }}
    >
      <div className="bus-card__container">
        <div className="bus-card__container__left">
          <div className="bus-name-container">
            <span className="bus-name">Travel Name : {busName}</span>
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
})

export default BusCard;
