import './App.css';
import BusLayout from './UI/Standard Seater/Bus Layout/BusLayout';
import SleeperBusLayout from './UI/Standard Sleeper/SleeperBusLayout/SleeperBusLayout';
import VolvoSeater from './UI/Volvo Seater/Bus Layout/BusLayout';
import VolvoSleeperBusLayout from './UI/Volvo Sleeper/Bus Layout/BusLayout';


function App() {
  return (
    <>
    {/* <Home /> */}
    <BusLayout />
      <SleeperBusLayout />
      <VolvoSeater />
      <VolvoSleeperBusLayout />
    </>
  );
}

export default App;
