import React from 'react'
import Header from '../components/Header/Header'
import HomePage from '../container/HomePage.container'
import { useQuery } from '@tanstack/react-query';
import { fetchBuses } from '../apis/apis';
import allBus from '../store/allBusesStore';
import SeatSelectionPage from './SeatSelectionPage.page';
import { observer } from 'mobx-react-lite';

const Home = observer(() => {
    const { data: allBuses } = useQuery({
      queryKey: ["all buses"],
      queryFn: () => fetchBuses(),
    });

    allBus.setAllBuses(allBuses);
    return (
        <div className="home-page">
            <Header />
            <HomePage />
            {/* <SeatSelectionPage /> */}
      </div>
  )
})

export default Home