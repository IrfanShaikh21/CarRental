import React from 'react'
import hero from "/src/assets/images/about-image.png";
import './Hero.css'
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <img src={hero} alt="Hero" />
        <div className="hero-text">
          <p>New Arrivals</p>
          <p>Car Rentals for You</p>
        </div>
      </div>
    </div>
  );
}

export default Hero
