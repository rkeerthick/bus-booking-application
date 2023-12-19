import React, { useState } from "react";
import "./BusType.scss";
import OutlinedButton from "../OutlinedButton/OutlinedButton";

const BusType = () => {
  const [seaterState, setSeaterState] = useState(false);
  const handleSeaterState = () => {
    setSeaterState(!seaterState);
  };
  const [acSeaterState, setAcSeaterState] = useState(false);
  const handleAcSeaterState = () => {
    setAcSeaterState(!acSeaterState);
  };
  const [sleeperState, setSleeperState] = useState(false);
  const handlesleeperState = () => {
    setSleeperState(!sleeperState);
  };
  const [acSleeperState, setAcSleeperState] = useState(false);
  const handleAcSleeperState = () => {
    setAcSleeperState(!acSleeperState);
  };
  return (
    <div className="bus-type">
      <div className="bus-type__container">
        <OutlinedButton
          handleClick={handleSeaterState}
          type="button"
          isClicked={seaterState}
        >
          Seater
        </OutlinedButton>
        <OutlinedButton
          handleClick={handleAcSeaterState}
          type="button"
          isClicked={acSeaterState}
        >
          AC Seater
        </OutlinedButton>
        <OutlinedButton
          handleClick={handlesleeperState}
          type="button"
          isClicked={sleeperState}
        >
          Sleeper
        </OutlinedButton>
        <OutlinedButton
          handleClick={handleAcSleeperState}
          type="button"
          isClicked={acSleeperState}
        >
          AC Sleeper
        </OutlinedButton>
      </div>
    </div>
  );
};

export default BusType;
