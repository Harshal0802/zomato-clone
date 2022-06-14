import React from "react";

export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "#808080" }}
      onClick={props.onClick}
    />
  );
};

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "#808080" }}
      onClick={props.onClick}
    />
  );
};
