import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home.page";
import AvailableBuses from "../pages/Available Buses/AvailableBuses.page";
import VolvoSeater from "../UI/Volvo Seater/Bus Layout/BusLayout";
import BusLayout from "../UI/Standard Seater/Bus Layout/BusLayout";
import SeatSelectionPage from "../pages/SeatSelectionPage.page";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/displayBuses" element={<AvailableBuses />}  />
        <Route path="/busLayout" element={<SeatSelectionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
