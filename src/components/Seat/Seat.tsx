import { seatsObjectProps } from '../Bus Layout/BusLayout';
import './Seat.scss'
export type seatProps = {
  handleClick: (selectedRow: number, selectedColumn: string, selectedSeatNo: number) => void;
  row: number;
    seats: seatsObjectProps;
  columnNo: string
};


const Seat = ({ row, columnNo, seats, handleClick }: seatProps) => {
    return (
      <div className={seats.isBooked ? "booked": ""} onClick={() => handleClick(row, columnNo, seats.seatNo)} id="seat"></div>
  )
}

export default Seat