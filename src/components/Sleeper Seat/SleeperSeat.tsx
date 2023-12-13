
import { seatProps } from '../../Types/types';
import './SleeperSeat.scss'

const SleeperSeat = ({ row, columnNo, seats, handleClick }: seatProps) => {
  return (
    <div
      className={seats.isBooked ? "booked" : ""}
      onClick={() => handleClick(row, columnNo, seats.seatNo)}
      id="sleeper-seat"
      >{ seats.seatNo }</div>
  );
};

export default SleeperSeat