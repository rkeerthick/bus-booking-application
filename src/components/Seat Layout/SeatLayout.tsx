import React from "react";
import Seat from "../Seat/Seat";
import './SeatLayout.scss'

export type seatLayoutProps = {
  handleClick: (selectedRow: number, selectedColumn: string, selectedSeatNo: number) => void;
  row: number;
  seats: any;
};

const SeatLayout = ({ row, seats, handleClick }: seatLayoutProps) => {
  return (
    <div className="seat-layout">
      <div className="seat-layout__left">
        <Seat
          row={row}
          columnNo="l1"
          seats={seats.l1}
          handleClick={handleClick}
        />
        <Seat
          row={row}
          columnNo="l2"
          seats={seats.l2}
          handleClick={handleClick}
        />
      </div>
      <div className="seat-layout__right">
        <Seat
          row={row}
          columnNo="r1"
          seats={seats.r1}
          handleClick={handleClick}
        />
        <Seat
          row={row}
          columnNo="r2"
          seats={seats.r2}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SeatLayout;
