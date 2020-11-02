import React, { useState, useEffect } from "react";
import { Slides } from "./Slides";
import { Arrows } from "./Arrows";
import { JumpTo } from "./JumpTo";
import { ViewCount } from "./ViewCount";

export const App = () => {
  const _SLIDECOUNT = 8;

  const [slides] = useState(
    Array.from({ length: _SLIDECOUNT }, (key, i) => "Slide " + (i + 1))
  );
  const [count, setCount] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNewCount = (newCount) => {
    if (newCount <= slides.length && newCount > 0) {
      setCount(newCount);
    }
  };

  const handleCurrentSlides = (newSlide) => {
    if (newSlide <= slides.length - 1 && newSlide >= 0) {
      setCurrentSlide(newSlide);
    }
  };

  return (
    <div className="container">
      <div className="carousel">
        <Slides currentSlide={currentSlide} count={count} slides={slides} />
        <Arrows
          currentSlide={currentSlide}
          setCurrentSlide={(newSlide) => handleCurrentSlides(newSlide)}
        />
      </div>
      <ViewCount
        count={count}
        setCount={(newCount) => handleNewCount(newCount)}
      />
      <JumpTo slides={slides} />
    </div>
  );
};
