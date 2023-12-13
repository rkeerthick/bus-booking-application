import React from 'react'
import Header from '../components/Header/Header'
import HomeSearch from '../components/HomeSearch/HomeSearch'
import HomePage from '../container/HomePage.container'

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <HomePage />
      </div>
  )
}

export default Home