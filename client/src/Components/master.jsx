import React from "react";
import { useParams } from "react-router-dom";

import Delivery from "./Delivery/index";
import Dining from "./Dining/index";
import NightLife from "./NightLife/index";


const Master = () => {
  const { type } = useParams();

  return (
    <div className="my-5">
      {type === "delivery" && <Delivery />}
      {type === "dining" && <Dining />}
      {type === "night" && <NightLife />}
    </div>
  );
};

export default Master;
