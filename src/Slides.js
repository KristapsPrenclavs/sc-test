import React from "react";
import "./index.css";

export const Slides = (props) => {
  const showSlides = [];
  const cpoy = [...props.slides];

  for (let i = props.currentSlide; i < props.count + props.currentSlide; i++) {
    showSlides.push(props.slides[i]);
  }

  // console.log(slides);
  // console.log(props.slides);

  return (
    <div className="slides" style={{ width: props.slides.length * 500 }}>
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
