import React, { useState, useEffect } from "react";
import { Slides } from "./Slides/Slides";
import { Arrows } from "./Arrows/Arrows";
import { JumpTo } from "./JumpTo/JumpTo";
import { ViewCount } from "./ViewCount/ViewCount";
import "./index.css";

export const App = () => {
  const _SLIDECOUNT = 8;

  const [slides] = useState(
    Array.from({ length: _SLIDECOUNT }, (key, i) => "Slide " + (i + 1))
  );
  const [count, setCount] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swipe, setSwiped] = useState({
    x: 50,
    touchStartLocation: {
      x: null,
    },
  });

  /**
   * Registers users first touch coordinates and saves them in state
   * @param e event when user first touches screen
   */
  const onTouchStart = (e) => {
    const firstTouchEvent = e.touches[0];

    const location = {
      x: firstTouchEvent.clientX,
    };
    setSwiped({ x: 50, touchStartLocation: location });
  };

  /**
   * Registers when users finger leaves screen and saves difference from start point in state
   * @param e event when user lifts his finger
   */
  const onTouchEnd = (e) => {
    const firstTouchEvent = e.changedTouches[0];
    const location = {
      x: firstTouchEvent.clientX,
    };
    const differences = {
      x: swipe.touchStartLocation.x - location.x,
    };
    console.log(differences);
    const newPosition = {
      x: swipe.x + -1 * differences.x * 0.05,
    };

    if (differences.x > 200) {
      handleCurrentSlides(currentSlide + 1);
    }
    if (differences.x < -200) {
      handleCurrentSlides(currentSlide - 1);
    }
  };

  /**
   * Sets state with increased or decreased count value to show more or less slides
   * @param newCount new count value
   */
  const handleNewCount = (newCount) => {
    if (newCount <= slides.length && newCount > 0) {
      if (currentSlide + count < slides.length) {
        setCount(newCount);
      } else if (newCount < count) {
        setCount(newCount);
      }
    }
  };

  /**
   * Shows next or previous slide based param recieved
   * @param newSlide new slide value
   */
  const handleCurrentSlides = (newSlide) => {
    if (newSlide <= slides.length - 1 && newSlide >= 0) {
      if (newSlide + count < slides.length + 1) {
        setCurrentSlide(newSlide);
      }
    }

    if (currentSlide === 0 && newSlide === currentSlide - 1) {
      setCount(1);
      setCurrentSlide(slides.length - 1);
    }

    if (
      currentSlide + count === slides.length &&
      newSlide === currentSlide + 1
    ) {
      setCount(1);
      setCurrentSlide(0);
    }
  };

  /**
   * Sets state with new slide number to show
   * @param jumpTo number recieved from JumpTo component
   */
  const handleJump = (jumpTo) => {
    const j = parseInt(jumpTo);
    if (j >= 1 && j <= slides.length) {
      setCount(1);
      setCurrentSlide(j - 1);
    }
  };

  return (
    <div className="container">
      <div
        className="carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
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
      <JumpTo slides={slides} handleJump={(jump) => handleJump(jump)} />
    </div>
  );
};
