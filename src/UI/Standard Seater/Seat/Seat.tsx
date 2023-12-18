
import { seatProps } from "../../../Types/types";
import "./Seat.scss";

const Seat = ({ row, columnNo, seats, handleClick }: seatProps) => {
  return (
    <div
      className={seats.isBooked ? "booked" : ""}
      onClick={() => handleClick(row, columnNo, seats.seatNo, seats.price)}
      id="seat"
    >{ seats.seatNo }</div>
  );
};

export default Seat;
