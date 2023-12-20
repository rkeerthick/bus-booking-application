import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "./App.css";
import BusLayout from "./UI/Standard Seater/Bus Layout/BusLayout";
import SleeperBusLayout from "./UI/Standard Sleeper/SleeperBusLayout/SleeperBusLayout";
import VolvoSeater from "./UI/Volvo Seater/Bus Layout/BusLayout";
import VolvoSleeperBusLayout from "./UI/Volvo Sleeper/Bus Layout/BusLayout";
import SelectedSeat from "./components/SelectedSeat/SelectedSeat";
import SelectedSeatsDisplay from "./container/SelectedSeatsDisplay/SelectedSeatsDisplay";
import Home from "./pages/Home.page";
import SeatSelectionPage from "./pages/SeatSelectionPage.page";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { fetchBuses } from "./apis/apis";
import allBus from "./store/allBusesStore";
import BusCard from "./components/BusCard/BusCard";
import AvailableBuses from "./pages/Available Buses/AvailableBuses.page";
import Routing from "./Routing/Routing";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Home /> */}
        {/* <BusLayout />
      <SleeperBusLayout />
      <VolvoSeater />
    <VolvoSleeperBusLayout /> */}
        {/* <SelectedSeat selectedSeatNo={12} seatPrice={548} /> */}
        {/* <SelectedSeatsDisplay /> */}
        {/* <SeatSelectionPage /> */}
        {/* <AvailableBuses /> */}
        <Routing />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
