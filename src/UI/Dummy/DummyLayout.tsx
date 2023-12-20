import React from "react";
import "./DummyLayout.scss";
import Seat from "../Standard Seater/Seat/Seat";

const DummyLayout = ({ rows, price, handleSelected, selectedSeats }: any) => {
  return (
    <div className="bus-layout">
      {rows.map((row: any) => {
        return row.map((item: any) => {
          return item.map((seat: any) => {
            if (seat !== 0) {
              const checkSelected = selectedSeats.some((data: any) => data.seatNo === seat)
              return <Seat isBooked={checkSelected} seat={seat} price={price} handleSeatSelection={() => handleSelected(seat, price)} />;
            }
            else return <div className="walk-way"></div>;
          });
        });
      })}
    </div>
  );
};

export default DummyLayout;
