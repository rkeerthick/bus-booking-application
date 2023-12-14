
import './SleeperLayout.scss';
import { seatLayoutProps } from '../../../Types/types';
import SleeperSeat from '../Sleeper Seat/SleeperSeat';



const SleeperLayout = ({ row, seats, handleClick }: seatLayoutProps) => {
  return (
    <div className="seat-layout">
      <div className="seat-layout__left">
        <SleeperSeat
          row={row}
          columnNo="l1"
          seats={seats.l1}
          handleClick={handleClick}
        />
      </div>
      <div className="seat-layout__right">
        <SleeperSeat
          row={row}
          columnNo="r1"
          seats={seats.r1}
          handleClick={handleClick}
        />
        <SleeperSeat
          row={row}
          columnNo="r2"
          seats={seats.r2}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SleeperLayout;
