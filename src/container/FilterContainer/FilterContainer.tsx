import React from "react";
import "./FilterContainer.scss";
import BusType from "../../components/BusType/BusType";

const FilterContainer = () => {
  return (
    <div className="filter">
      <div className="filter__container">
        <span className="filter__container__title">Filter here...</span>
        <div className="filter__container__filter-list">
          <div className="filter__container__filter-list__bus-type">
            <span className="filter__container__filter-list__bus-type__bus-type-title">
              Bus Type
            </span>
            <BusType />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
