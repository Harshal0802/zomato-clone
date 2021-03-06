import React from "react";

//components
import NightLifeCarousel from "./NightLifeCarousel";
const NightLife = () => {
  return (
    <div>
      <NightLifeCarousel />
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Night Life Restaurants in Nagar
      </h1>
    </div>
  );
};

export default NightLife;
