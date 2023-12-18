import "./SelectedSeat.scss";
import { selectedSeatTypes } from "../../Types/types";

const SelectedSeat = ({
  selectedSeatNo,
  seatPrice,
  helperText,
}: selectedSeatTypes) => {
  return (
    <div className="selected-seat">
      <div className="selected-seat__container">
        {helperText ? (
          <span>{helperText}</span>
        ) : (
          <>
            <span className="selected-seat__container__seat-no">
              Seat No : {selectedSeatNo}
            </span>
            <span className="selected-seat__container__price">
              Price : <span className="price-styles">₹{seatPrice}</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectedSeat;
