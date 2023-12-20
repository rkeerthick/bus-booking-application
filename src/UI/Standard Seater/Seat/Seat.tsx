import { seatProps } from "../../../Types/types";
import "./Seat.scss";

const Seat = ({ seat, isBooked, price, handleSeatSelection }: seatProps) => {
  return (
    // <div
    //   className={seats.isBooked ? "booked" : ""}
    //   onClick={() => handleClick(row, columnNo, seats.seatNo, seats.price)}
    //   id="seat"
    // >{ seats.seatNo }</div>

    <div
      className={isBooked ? "booked" : ""}
      onClick={() => handleSeatSelection(seat, price)}
      id="seat"
    >
      {seat}
    </div>
  );
};

export default Seat;
