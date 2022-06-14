import React, { useState } from "react";

//components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
      {
        _id: "123456",
        photos: [
          "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
        ],
        name: "Samosa Party",
        cuisine: ["street food", "beverages", "tea"],
        averageCost: 100,
        isPro: true,
        isOff: 80,
        durationOfdelivery: 42,
        restaurantReviewValue: 4.1,
      },
      {
        _id: "123456-2",
        photos: [
          "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
        ],
        name: "Samosa Party",
        cuisine: ["street food", "beverages", "tea"],
        averageCost: 100,
        isPro: true,
        isOff: 80,
        durationOfdelivery: 42,
        restaurantReviewValue: 4.1,
      },
      {
        _id: "123456-3",
        photos: [
          "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
        ],
        name: "Samosa Party",
        cuisine: ["street food", "beverages", "tea"],
        averageCost: 100,
        isPro: true,
        isOff: 80,
        durationOfdelivery: 42,
        restaurantReviewValue: 4.1,
      }
  ]);

  return (
    <>
      <DeliveryCarousel />
      <div className="flex justify-between flex-wrap">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;
