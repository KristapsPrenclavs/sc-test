import React from "react";
import "./index.css";

export const ViewCount = (props) => {
  const increaseSlides = () => {
    props.setCount(props.count + 1);
  };
  const decreaseSlides = () => {
    props.setCount(props.count - 1);
  };
  return (
    <div className="plus-minus">
      <button className="decrease" onClick={() => decreaseSlides()}>
        -
      </button>
      <button className="increase" onClick={() => increaseSlides()}>
        +
      </button>
    </div>
  );
};
