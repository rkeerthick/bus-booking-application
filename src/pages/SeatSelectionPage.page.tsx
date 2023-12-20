import "./SeatSelectionPage.scss";
import SelectedSeatsDisplay from "../container/SelectedSeatsDisplay/SelectedSeatsDisplay";
import { useEffect, useState } from "react";
import { columnProps, selectedSeatTypeProps } from "../Types/types";
import { fetchBuses } from "../apis/apis";
import { useQuery } from "@tanstack/react-query";
import allBus from "../store/allBusesStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import DummyLayout from "../UI/Dummy/DummyLayout";

const SeatSelectionPage = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [selectedSeat, setSelectedSeat] = useState<selectedSeatTypeProps[]>([]);

  const [selectedSeats, setSelectedSeats] = useState<any>([]);

  const rows = [
    [
      [1, 2, 0, 3, 4],
      [5, 6, 0, 7, 8],
      [9, 10, 0, 11, 12],
      [13, 14, 0, 15, 16],
      [17, 18, 0, 19, 20],
      [21, 22, 0, 23, 24],
      [25, 26, 0, 27, 28],
      [29, 30, 0, 31, 32],
      [33, 34, 0, 35, 36],
      [37, 38, 0, 39, 40],
    ],
  ];

  const handleSelectedSeat = (seatNo: number, price: number) => {
    const alreadyContain = selectedSeats.some(
      (prev: any) => prev.seatNo === seatNo
    );
    if (alreadyContain) {
      setSelectedSeats(
        selectedSeats.filter((item: any) => item.seatNo !== seatNo)
      );
    } else {
      setSelectedSeats((prev: any) => [
        ...prev,
        { seatNo: seatNo, price: price },
      ]);
    }
  };

  const selectedSeat = selectedSeats.map((item: any) => item.seatNo);
  console.log(selectedSeat, 'selectedSeat');

  return (
    <div className="seat-selection">
      <div className="seat-selection__container">
        <div className="seat-selection__container__layout">
          <DummyLayout
            rows={rows}
            price={546}
            selectedSeats={selectedSeats}
            handleSelected={handleSelectedSeat}
          />
        </div>
        <div className="seat-selection__container__total">
          <SelectedSeatsDisplay
            selectedSeats={selectedSeats}
            isOpen={isOpen}
            closeModal={() => {}}
            openModal={() => {}}
          />
        </div>
      </div>
    </div>
  );
});

export default SeatSelectionPage;
