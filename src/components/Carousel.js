import { useState, useEffect, useRef } from "react";

import "../styles/Carousel.css";

const Carousel = ({ children, height, columnGap }) => {
  // STATE
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);

  // REFS
  const carousel = useRef(null);
  const track = useRef(null);
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  const nextButtonClick = () => {
    setIndex(
      track.current.offsetWidth - index * carouselWidth < index * carouselWidth
        ? index
        : index + 1
    );

    prevButton.current.classList.add("show-carousel-nav-button");
  };

  const prevButtonClick = () => {
    setIndex(index <= 0 ? 0 : index - 1);
  };

  useEffect(() => {
    setSlide(index * -carouselWidth);
  }, [index, carouselWidth]);

  useEffect(() => {
    setCarouselWidth(carousel.current.offsetWidth + columnGap);

    window.addEventListener("resize", () => {
      setCarouselWidth(carousel.current.offsetWidth + columnGap);
    });
  }, []);

  return (
    <div ref={carousel} style={{ height }} className="carousel">
      <div
        ref={track}
        style={{
          transform: `translateX(${slide}px)`,
          columnGap: `${columnGap}px`,
        }}
        className="carousel-track"
      >
        {children}
      </div>
      <div className="carousel-nav">
        <button
          onClick={prevButtonClick}
          ref={prevButton}
          className="carousel-prev-button"
        >
          <i className="fa fa-chevron-left"></i>
        </button>
        <button
          onClick={nextButtonClick}
          ref={nextButton}
          className="carousel-next-button"
        >
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
