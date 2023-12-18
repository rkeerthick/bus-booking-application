import "./SeatSelectionPage.scss";
import VolvoSeater from "../UI/Volvo Seater/Bus Layout/BusLayout";
import SelectedSeatsDisplay from "../container/SelectedSeatsDisplay/SelectedSeatsDisplay";
import { useEffect, useState } from "react";
import { columnProps, selectedSeatTypeProps } from "../Types/types";
import { fetchBuses } from "../apis/apis";
import { useQuery } from "@tanstack/react-query";
import allBus from "../store/allBusesStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

const SeatSelectionPage = observer(() => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSeat, setSelectedSeat] = useState<selectedSeatTypeProps[]>([]);
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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = (
    selectedRow: number,
    selectedColumn: string,
    selectedSeatNo: number,
    seatPrice: number | undefined
  ): void => {
    const isContains = selectedSeat.some(
      (prev: selectedSeatTypeProps) => prev.selectedSeatNo === selectedSeatNo
    );
    if (isContains) {
      const filteredArray = selectedSeat.filter(
        (prev: selectedSeatTypeProps) => prev.selectedSeatNo !== selectedSeatNo
      );
      setSelectedSeat(filteredArray);
    } else if (selectedSeat.length < 4) {
      setSelectedSeat((prev: any) => [...prev, { selectedSeatNo, seatPrice }]);
    } else {
      openModal();
    }

    if (isContains || selectedSeat.length <= 3) {
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
    }
  };

  return (
    
    <div className="seat-selection">
    <div className="seat-selection__container">
      <div className="seat-selection__container__layout">
        <VolvoSeater rows={rows} handleClick={handleClick} />
      </div>
      <div className="seat-selection__container__total">
        <SelectedSeatsDisplay
          selectedSeats={selectedSeat}
          isOpen={isOpen}
          openModal={openModal}
          closeModal={closeModal}
          />
      </div>
    </div>
  </div>
)
})

export default SeatSelectionPage;
