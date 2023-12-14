import { useState } from "react";
import "./BusLayout.scss";
import { columnProps } from "../../../Types/types";
import SeatLayout from "../Seat Layout/SeatLayout";



const BusLayout = () => {
  const [rows, setRows] = useState<columnProps[]>([
    {
      row: 1,
      seats: {
        l1: { seatNo: 1, isBooked: false },
        l2: { seatNo: 2, isBooked: false },
        r1: { seatNo: 3, isBooked: false },
        r2: { seatNo: 4, isBooked: false },
      },
    },
    {
      row: 2,
      seats: {
        l1: { seatNo: 5, isBooked: false },
        l2: { seatNo: 6, isBooked: false },
        r1: { seatNo: 7, isBooked: false },
        r2: { seatNo: 8, isBooked: false },
      },
    },
    {
      row: 3,
      seats: {
        l1: { seatNo: 9, isBooked: false },
        l2: { seatNo: 10, isBooked: false },
        r1: { seatNo: 11, isBooked: false },
        r2: { seatNo: 12, isBooked: false },
      },
    },
    {
      row: 4,
      seats: {
        l1: { seatNo: 13, isBooked: false },
        l2: { seatNo: 14, isBooked: false },
        r1: { seatNo: 15, isBooked: false },
        r2: { seatNo: 15, isBooked: false },
      },
    },
    {
      row: 5,
      seats: {
        l1: { seatNo: 17, isBooked: false },
        l2: { seatNo: 18, isBooked: false },
        r1: { seatNo: 19, isBooked: false },
        r2: { seatNo: 20, isBooked: false },
      },
    },
    {
      row: 6,
      seats: {
        l1: { seatNo: 21, isBooked: false },
        l2: { seatNo: 22, isBooked: false },
        r1: { seatNo: 23, isBooked: false },
        r2: { seatNo: 24, isBooked: false },
      },
    },
    {
      row: 7,
      seats: {
        l1: { seatNo: 25, isBooked: false },
        l2: { seatNo: 26, isBooked: false },
        r1: { seatNo: 27, isBooked: false },
        r2: { seatNo: 28, isBooked: false },
      },
    },
    {
      row: 8,
      seats: {
        l1: { seatNo: 29, isBooked: false },
        l2: { seatNo: 30, isBooked: false },
        r1: { seatNo: 31, isBooked: false },
        r2: { seatNo: 32, isBooked: false },
      },
    },
    {
      row: 9,
      seats: {
        l1: { seatNo: 33, isBooked: false },
        l2: { seatNo: 34, isBooked: false },
        r1: { seatNo: 35, isBooked: false },
        r2: { seatNo: 36, isBooked: false },
      },
    },
  ]);
  const handleClick = (
    selectedRow: number,
    selectedColumn: string,
    selectedSeatNo: number
  ): void => {
    const updatedRow = rows.map((row) => {
      if (row.row === selectedRow) {
        return {
          ...row,
          seats: {
            ...row.seats,
            [selectedColumn]: {
              seatNo: selectedSeatNo,
              isBooked: !row.seats[selectedColumn]?.isBooked,
            },
          },
        };
      }
      return row;
    });
    setRows(updatedRow);
  };

  return (
    <div id="bus-layout">
      {rows.map((item: any) => {
        return (
          <SeatLayout
            row={item.row}
            seats={item.seats}
            handleClick={handleClick}
            key={item.row}
          />
        );
      })}
    </div>
  );
};

export default BusLayout;
