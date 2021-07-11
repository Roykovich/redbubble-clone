import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

import "../styles/DesignsFourUserCarousel.css";

import product from "../images/products/evangelion_design.png";

const DesignsForUserCarousel = () => {
  const [designProducts, setDesignProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const [carouselwWidth, setCarouselWidth] = useState(null);
  const [slide, setSlide] = useState(0);

  const carouselContainer = useRef(null);
  const prevButton = useRef(null);
  const nextButton = useRef(null);
  const carouselTrack = useRef(null);

  const DATA = [
    {
      alt: "Incredible Black Pillow",
      artist: "Charles Leclerc",
      amountProducts: "58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Antoine Harrison",
      amountProducts: "24",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Ruuri Miyazaki",
      amountProducts: "37",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Charles Leclerc",
      amountProducts: "14",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Mick Schumacher",
      amountProducts: "29",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Lex Freedman",
      amountProducts: "64",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Antoine Harrison",
      amountProducts: "14",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Ruuri Miyazaki",
      amountProducts: "29",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Lex Freedman",
      amountProducts: "97",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Ruuri Miyazaki",
      amountProducts: "47",
      image: product,
      productName: "Incredible Black Pillow",
    },
  ];

  const nextButtonClick = () => {
    setIndex(
      carouselTrack.current.offsetWidth - index * carouselwWidth <
        index * carouselwWidth
        ? index
        : index + 1
    );

    prevButton.current.classList.add("show");
  };

  const prevButtonClick = () => {
    setIndex(index <= 0 ? 0 : index - 1);
  };

  useEffect(() => {
    setSlide(index * -carouselwWidth);
  }, [index, carouselwWidth]);

  useEffect(() => {
    setDesignProducts(DATA);

    setCarouselWidth(carouselContainer.current.offsetWidth);

    window.addEventListener("resize", () => {
      setCarouselWidth(carouselContainer.current.offsetWidth);
    });
  }, []);

  return (
    <section>
      <div className="designs-for-user-container">
        <div className="designs-for-user-header">
          <h1>Explore designs picked for you</h1>
          <a href="/">See more</a>
        </div>
        <div ref={carouselContainer} className="designs-for-user-carousel">
          <div
            ref={carouselTrack}
            style={{ transform: `translateX(${slide}px)` }}
            className="designs-for-user-track"
          >
            {designProducts.map((item) => {
              return (
                <ProductCard
                  alt={item.alt}
                  artist={item.artist}
                  favoriteButon={true}
                  image={item.image}
                  productAmount={item.amountProducts}
                  productName={item.productName}
                  style={{
                    height: "100%",
                    width: "calc(((100% + 16px) / 5) - 16px)",
                    minWidth: "calc(((100% + 16px) / 5) - 16px)",
                    marginRight: "16px",
                  }}
                />
              );
            })}
          </div>
          <div className="designs-for-user-nav">
            <button onClick={prevButtonClick} ref={prevButton} className="prev">
              <i className="fa fa-chevron-left"></i>
            </button>
            <button onClick={nextButtonClick} ref={nextButton} className="next">
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignsForUserCarousel;
