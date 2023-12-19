import React from "react";
import "./BusCard.scss";

const BusCard = () => {
  const data = {
    busName: "FE Travels",
    from: "bangalore",
    to: "chennai",
    depatureTime: "16:45",
    arrivalTime: "08:00",
    fromDate: "20/12/2023",
    toDate: "21/12/2023",
  };

  return (
    <div className="bus-card">
      <div className="bus-card__container">
        <div className="bus-card__container__left">
          <span className="from-place">{data.from}</span>
          <span className="departure-time">{data.depatureTime}</span>
          <span className="date">{data.fromDate}</span>
        </div>

        <div className="bus-card__container__right">
          <span className="to-place">{data.to}</span>
          <span className="arrival-time">{data.arrivalTime}</span>
          <span className="date">{data.toDate}</span>
        </div>
      </div>
    </div>
  );
};

export default BusCard;
