import { useState } from "react";
import "../Bus Layout/BusLayout.scss";
import SleeperLayout from "../Sleeper Layout/SleeperLayout"
import { columnProps } from "../../Types/types";


const SleeperBusLayout = () => {
  const [rows, setRows] = useState<columnProps[]>([
    {
      row: 1,
      seats: {
        l1: { seatNo: 1, isBooked: false },
        r1: { seatNo: 3, isBooked: false },
        r2: { seatNo: 4, isBooked: false },
      },
    },
    {
      row: 2,
      seats: {
        l1: { seatNo: 5, isBooked: false },
        r1: { seatNo: 7, isBooked: false },
        r2: { seatNo: 8, isBooked: false },
      },
    },
    {
      row: 3,
      seats: {
        l1: { seatNo: 9, isBooked: false },
        r1: { seatNo: 11, isBooked: false },
        r2: { seatNo: 12, isBooked: false },
      },
    },
    {
      row: 4,
      seats: {
        l1: { seatNo: 13, isBooked: false },
        r1: { seatNo: 15, isBooked: false },
        r2: { seatNo: 15, isBooked: false },
      },
    },
    {
      row: 5,
      seats: {
        l1: { seatNo: 17, isBooked: false },
        r1: { seatNo: 19, isBooked: false },
        r2: { seatNo: 20, isBooked: false },
      },
    },
    {
      row: 6,
      seats: {
        l1: { seatNo: 21, isBooked: false },
        r1: { seatNo: 23, isBooked: false },
        r2: { seatNo: 24, isBooked: false },
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
          <SleeperLayout
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

export default SleeperBusLayout;
