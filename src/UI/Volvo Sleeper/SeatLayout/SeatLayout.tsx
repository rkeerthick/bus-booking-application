import "../../Standard Sleeper/Sleeper Layout/SleeperLayout.scss";
import { seatLayoutProps } from "../../../Types/types";
import SleeperSeat from "../../Standard Sleeper/Sleeper Seat/SleeperSeat";

const VolvoSleeperLayout = ({ row, seats, handleClick }: seatLayoutProps) => {
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
      </div>
    </div>
  );
};

export default VolvoSleeperLayout;
