import React from "react";
import "./Arrows.css";

export const Arrows = (props) => {
  const handleNext = () => {
    props.setCurrentSlide(props.currentSlide + 1);
  };
  const handlePrev = () => {
    props.setCurrentSlide(props.currentSlide - 1);
  };
  return (
    <div className="arrows">
      <span className="arrow-prev" onClick={() => handlePrev()}>
        prev
      </span>
      <span className="arrow-next" onClick={() => handleNext()}>
        next
      </span>
    </div>
  );
};
