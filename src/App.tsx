import "./App.css";
import BusLayout from "./UI/Standard Seater/Bus Layout/BusLayout";
import SleeperBusLayout from "./UI/Standard Sleeper/SleeperBusLayout/SleeperBusLayout";
import VolvoSeater from "./UI/Volvo Seater/Bus Layout/BusLayout";
import VolvoSleeperBusLayout from "./UI/Volvo Sleeper/Bus Layout/BusLayout";
import SelectedSeat from "./components/SelectedSeat/SelectedSeat";
import SelectedSeatsDisplay from "./container/SelectedSeatsDisplay/SelectedSeatsDisplay";
import Home from "./pages/Home.page";
import SeatSelectionPage from "./pages/SeatSelectionPage.page";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <BusLayout />
      <SleeperBusLayout />
      <VolvoSeater />
      <VolvoSleeperBusLayout /> */}
      {/* <SelectedSeat selectedSeatNo={12} seatPrice={548} /> */}
      {/* <SelectedSeatsDisplay /> */}
      <SeatSelectionPage />
    </>
  );
}

export default App;
