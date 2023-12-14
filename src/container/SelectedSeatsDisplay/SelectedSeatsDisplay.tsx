import "./SelectedSeatsDisplay.scss";
import SelectedSeat from "../../components/SelectedSeat/SelectedSeat";
import { selectedSeatProps } from "../../Types/types";

let totalPrice: number = 0;

const obj = [
  { selectedSeatNo: 12, seatPrice: 576 },
  { selectedSeatNo: 12, seatPrice: 576 },
  { selectedSeatNo: 12, seatPrice: 576 },
];

const calculateTotal = (price: number) => {
    totalPrice += price
}

const SelectedSeatsDisplay = ({selectedSeatNo, seatPrice}: selectedSeatProps) => {
  return (
    <div className="selected-seat-display">
      <div className="selected-seat-display__container">
        <div className="selected-seat-display__container__seat-section">
          {obj.map((data) => {
            calculateTotal(data.seatPrice);
            return (
              <SelectedSeat
                seatPrice={data.seatPrice}
                selectedSeatNo={data.selectedSeatNo}
              />
            );
          })}
        </div>
        <div className="selected-seat-display__container__total-cost">
          Total Price : ₹{totalPrice}
        </div>
      </div>
    </div>
  );
};

export default SelectedSeatsDisplay;
