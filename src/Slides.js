import React from "react";
import "./index.css";

export const Slides = (props) => {
  const slides = [];

  for (let i = props.currentSlide; i < props.count + props.currentSlide; i++) {
    slides.push(props.slides[i]);
  }

  console.log(slides);
  console.log(props.slides);

  return (
    <div className="slides" style={{ width: props.slides.length * 500 }}>
      {slides.map((slide) => {
        return (
          <section className="slide" key={slide}>
            {slide}
          </section>
        );
      })}
    </div>
  );
};
