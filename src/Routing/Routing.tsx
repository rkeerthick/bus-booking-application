import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.page";
import AvailableBuses from "../pages/Available Buses/AvailableBuses.page";
import SeatSelectionPage from "../pages/Seat Selection/SeatSelectionPage.page";
import PassengerDetailsFilling from "../pages/Passenger Details Filling/PassengerDetailsFilling.page";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/displayBuses" element={<AvailableBuses />}  />
        <Route path="/busLayout" element={<SeatSelectionPage />} />
        <Route path="/addPassenger" element={<PassengerDetailsFilling />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
