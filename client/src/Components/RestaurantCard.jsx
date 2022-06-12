import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const RestaurantCard = () => {
  return (
    <>
      <div className="bg-white p-2 w-full mb-40 rounded-2xl transititon duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/3">
        <div className="w-full h-56 lg:h-64 relative">
          <div className="absolute flex items-end bottom-4 w-full justify-between">
            <div className="flex flex-col gap-2 items-start">
              <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">Pro extra 10% off</span>
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">₹80 OFF</span>
            </div>
            <span className="bg-white bg-opacity-75 p-1 rounded mr-2">42 min</span>
          </div>
          <img
            src="https://b.zmtcdn.com/data/pictures/0/19231470/a8dcc85ed12716b54fd26611f66e7707_o2_featured_v2.jpg?output-format=webp"
            alt="food"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="my-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">Behrouz Biryani</h4>
            <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center">
              4.1 <AiTwotoneStar />
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <p>biryani, north indian, mughlai</p>
            <p>₹320</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;