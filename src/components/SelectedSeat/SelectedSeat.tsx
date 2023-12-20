import "./SelectedSeat.scss";
import { selectedSeatTypes } from "../../Types/types";

const SelectedSeat = ({
  seatNo,
  price,
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
              Seat No : {seatNo}
            </span>
            <span className="selected-seat__container__price">
              Price : <span className="price-styles">₹{price}</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectedSeat;
