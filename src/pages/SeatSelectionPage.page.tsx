import "./SeatSelectionPage.scss";
import VolvoSeater from "../UI/Volvo Seater/Bus Layout/BusLayout";
import SelectedSeatsDisplay from "../container/SelectedSeatsDisplay/SelectedSeatsDisplay";
import { useState } from "react";
import { columnProps } from "../Types/types";

export type selectedSeatTypeProps = {
  selectedSeatNo: number,
  seatPrice: number,
}

const SeatSelectionPage = () => {
  let selectedSeat = {} as selectedSeatTypeProps;
  const [rows, setRows] = useState<columnProps[]>([
    {
      row: 1,
      seats: {
        l1: { seatNo: 1, isBooked: false, price: 567 },
        r1: { seatNo: 3, isBooked: false, price: 567 },
      },
    },
    {
      row: 2,
      seats: {
        l1: { seatNo: 5, isBooked: false, price: 567 },
        r1: { seatNo: 7, isBooked: false, price: 567 },
      },
    },
    {
      row: 3,
      seats: {
        l1: { seatNo: 9, isBooked: false, price: 567 },

        r1: { seatNo: 11, isBooked: false, price: 567 },
      },
    },
    {
      row: 4,
      seats: {
        l1: { seatNo: 13, isBooked: false, price: 567 },

        r1: { seatNo: 15, isBooked: false, price: 567 },
      },
    },
    {
      row: 5,
      seats: {
        l1: { seatNo: 17, isBooked: false, price: 567 },

        r1: { seatNo: 19, isBooked: false, price: 567 },
      },
    },
    {
      row: 6,
      seats: {
        l1: { seatNo: 21, isBooked: false, price: 567 },

        r1: { seatNo: 23, isBooked: false, price: 567 },
      },
    },
    {
      row: 7,
      seats: {
        l1: { seatNo: 25, isBooked: false, price: 567 },

        r1: { seatNo: 27, isBooked: false, price: 567 },
      },
    },
    {
      row: 8,
      seats: {
        l1: { seatNo: 29, isBooked: false, price: 567 },

        r1: { seatNo: 31, isBooked: false, price: 567 },
      },
    },
    {
      row: 9,
      seats: {
        l1: { seatNo: 33, isBooked: false, price: 567 },

        r1: { seatNo: 35, isBooked: false, price: 567 },
      },
    },
  ]);
  
  const handleClick = (
    selectedRow: number,
    selectedColumn: string,
    selectedSeatNo: number
  ): void => {
    // selectedSeat = { selectedSeatNo,  }
    const updatedRow = rows.map((row) => {
      if (row.row === selectedRow) {
        return {
          ...row,
          seats: {
            ...row.seats,
            [selectedColumn]: {
              ...row.seats[selectedColumn],
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
    <div className="seat-selection">
      <div className="seat-selection__container">
        <div className="seat-selection__container__layout">
          <VolvoSeater rows={rows} handleClick={handleClick} />
        </div>
        <div className="seat-selection__container__total">
          <SelectedSeatsDisplay
            seatPrice={567}
            selectedSeatNo={selectedSeat.selectedSeatNo}
          />
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPage;
