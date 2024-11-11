import React from 'react'
import HeroSection from '../../components/HeroSection.jsx';
import WelcomeSection from '../../components/WelcomeSection.jsx';
import CardsSection from '../../components/CardsSection.jsx';
import ImageSlider from '../../components/ImageSlider/ImageSlider.jsx';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ImageSlider />
      <WelcomeSection />
      <CardsSection />
    </div>
  )
}

export default Home
