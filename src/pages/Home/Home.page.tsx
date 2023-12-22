import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import HomePage from '../../container/HomePage.container'
import { useQuery } from '@tanstack/react-query';
import { fetchBuses } from '../../apis/apis';
import allBus from '../../store/allBusesStore';
import { observer } from 'mobx-react-lite';
import UserDetails from '../../store/userStore';

const Home = observer(() => {
  useEffect(() => {
    UserDetails.userDetails.bookedSeats = [];
  }, [])
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