import React from "react";
import "./DummyLayout.scss";
import Seat from "../Standard Seater/Seat/Seat";

const DummyLayout = ({ rows, price, handleSelected, selectedSeats }: any) => {
  return (
    <div className="bus-layout">
      {rows.map((row: any, index1: number) => {
        return row.map((item: any, index2: number) => {
          return item.map((seat: any, index3: number) => {
            if (seat !== 0) {
              const checkSelected = selectedSeats.some(
                (data: any) => data.seatNo === seat
              );
              let layout: string = "";
              layout += `${index1}-${index2}-${index3}`; // Adding the seat no to make it unique for
              return (
                <Seat
                  isBooked={checkSelected}
                  seat={seat}
                  price={price}
                  layout={layout}
                  handleSeatSelection={() => handleSelected(seat, price)}
                />
              );
            } else return <div className="walk-way"></div>;
          });
        });
      })}
    </div>
  );
};

export default DummyLayout;
