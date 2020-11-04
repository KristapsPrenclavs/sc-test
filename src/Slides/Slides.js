import React from "react";
import "./Slides.css";

export const Slides = (props) => {
  const showSlides = [];

  for (let i = props.currentSlide; i < props.count + props.currentSlide; i++) {
    showSlides.push(props.slides[i]);
  }

  return (
    <div className="slides">
      {showSlides.map((slide) => {
        return (
          <section className="slide" key={slide}>
            {slide}
          </section>
        );
      })}
    </div>
  );
};
