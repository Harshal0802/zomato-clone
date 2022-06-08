import React from "react";

//Component
import Navbar from "../Components/Navbar/index";
import FoodTab from "../Components/FoodTab/index";

const HomeLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-36">{props.children}</div>
      <FoodTab />
    </>
  );
};

export default HomeLayout;