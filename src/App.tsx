import './App.css';
import BusLayout from './UI/Standard Seater/Bus Layout/BusLayout';
import SleeperBusLayout from './UI/Standard Sleeper/SleeperBusLayout/SleeperBusLayout';
import Home from './pages/Home.page';

function App() {
  return (
    <>
    {/* <Home /> */}
    <BusLayout />
    <SleeperBusLayout />
    </>
  );
}

export default App;
