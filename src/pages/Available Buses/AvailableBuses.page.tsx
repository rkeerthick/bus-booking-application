import React from "react";
import './AvailableBuses.scss'
import BusCard from "../../components/BusCard/BusCard";
import FilterContainer from "../../container/FilterContainer/FilterContainer";

const AvailableBuses = () => {
  return (
    <div className="available-buses">
      <div className="available-buses__container">
        <div className="available-buses__container__filters">
          <FilterContainer />
        </div>
        <div className="available-buses__container__list">
          <BusCard />
          <BusCard />
          <BusCard />
        </div>
      </div>
    </div>
  );
};

export default AvailableBuses;
