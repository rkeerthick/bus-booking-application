import React from "react";
import "./AvailableBuses.scss";
import BusCard from "../../components/BusCard/BusCard";
import FilterContainer from "../../container/FilterContainer/FilterContainer";
import AllBuses from "../../utils/BusDetails.json";
import journeyDetails from "../../store/journeyStore";

const AvailableBuses = () => {
  return (
    <div className="available-buses">
      <div className="available-buses__container">
        <div className="available-buses__container__filters">
          <FilterContainer />
        </div>
        <div className="available-buses__container__list">
          {/* <BusCard />
          <BusCard />
          <BusCard /> */}
          {AllBuses.map((bus, index) => {
            const expectedData = bus.journeys.filter((journey) => {
              return (
                journey.boardingPoint === journeyDetails.journey.boardingPoint
              );
            });
            let startTime = "";
            let endTime = "";

            const dummy1 = expectedData[0].startTime.split(":");
            const dummy2 = expectedData[0].endTime.split(":");

            for (let k = 0; k < dummy1.length - 1; k++) {
              startTime = startTime.concat(dummy1[k] + ":");
            }

            for (let k = 0; k < dummy2.length - 1; k++) {
              endTime = endTime.concat(dummy2[k] + ":");
            }

            startTime = startTime.substring(0, startTime.length - 1);
            endTime = endTime.substring(0, endTime.length - 1);

            return (
              <BusCard
                key={index}
                seatType={bus.seat.seatType}
                id={bus.id}
                boardingPoint={expectedData[0].boardingPoint}
                endPoint={expectedData[0].endPoint}
                startTime={startTime}
                endTime={endTime}
                busName={bus.name}
                availableSeats={bus.totalSeats}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AvailableBuses;
