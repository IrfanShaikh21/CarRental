import React from "react";
import hero from "/src/assets/images/vehicles/toyota/corolla.png";
import "./Populer.css";

function Populer() {
  return (
    <div className="hero">
      <div className="hero-left">
        <img src={hero} alt="Hero" className="hero-image" />
      </div>
      <div className="hero-right">
        <div className="hero-text">
          <p>New Arrivals</p>
          <p>Car Rentals for You</p>
        </div>
      </div>
    </div>
  );
}

export default Populer;
