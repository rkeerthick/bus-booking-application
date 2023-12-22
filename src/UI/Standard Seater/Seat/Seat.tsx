import { seatProps } from "../../../Types/types";
import "./Seat.scss";
import UserStore from "../../../store/userStore";

const Seat = ({
  seat,
  isBooked,
  price,
  handleSeatSelection,
  layout,
}: seatProps) => {
  const handleClick = (seat: number, price: number | undefined) => {
    UserStore.userDetails.bookedSeatsIndex.push({
      seatIndex: `${layout}-${seat}`,
      seatNo: seat,
    });
    handleSeatSelection(seat, price);
  };
  return (
    // <div
    //   className={seats.isBooked ? "booked" : ""}
    //   onClick={() => handleClick(row, columnNo, seats.seatNo, seats.price)}
    //   id="seat"
    // >{ seats.seatNo }</div>

    <div
      className={isBooked ? "booked" : ""}
      onClick={() => handleClick(seat, price)}
      id="seat"
    >
      {seat}
    </div>
  );
};

export default Seat;
