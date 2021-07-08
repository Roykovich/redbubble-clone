import "../styles/FeaturedCarousel.css";
import FeaturedCard from "./FeaturedCard";
import { useState, useEffect, useRef } from "react";

import product from "../images/products/black_pillow.jpg";

const FeaturedCarousel = () => {
  /**
   * States
   */
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const [carouselwWidth, setCarouselWidth] = useState(null);
  const [slide, setSlide] = useState(0);
  /**
   * Refs
   */
  const carouselContainer = useRef(null);
  const prevButton = useRef(null);
  const nextButton = useRef(null);
  const carouselTrack = useRef(null);

  const DATA = [
    {
      alt: "Incredible Black Pillow",
      artist: "Charles Leclerc",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Antoine Harrison",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Ruuri Miyazaki",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Charles Leclerc",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Mick Schumacher",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Lex Freedman",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Antoine Harrison",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Ruuri Miyazaki",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Lex Freedman",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Ruuri Miyazaki",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Antoine Harrison",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Mick Schumacher",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Charles Leclerc",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Carmen Meme",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Abby Rager",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Lex Freedman",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Ruuri Miyazaki",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Carmen Meme",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Mick Schumacher",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Abby Rager",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Lex Freedman",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Ruuri Miyazaki",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Mick Schumacher",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Charles Leclerc",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Abby Rager",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Lex Freedman",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Ruuri Miyazaki",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Mick Schumacher",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Kimi Räikkönen",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
    {
      alt: "Incredible Black Pillow",
      artist: "Lando Norris",
      cost: "24.58",
      image: product,
      productName: "Incredible Black Pillow",
    },
  ];

  const nextButtonClick = () => {
    setIndex(
      carouselTrack.current.offsetWidth - index * -carouselwWidth <
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
    setFeaturedProducts(DATA);
    setCarouselWidth(carouselContainer.current.offsetWidth);

    window.addEventListener("resize", () => {
      setCarouselWidth(carouselContainer.current.offsetWidth);
    });
  }, []);

  const createFeaturedProducts = (data) => {
    let result = [];
    for (let i = 0; i < data.length; i += 2) {
      result.push(
        <div className="featured-products-column" key={i}>
          <FeaturedCard
            alt={DATA[i].alt}
            artist={DATA[i].artist}
            cost={DATA[i].cost}
            image={DATA[i].image}
            productName={DATA[i].productName}
          />
          <FeaturedCard
            alt={DATA[i + 1].alt}
            artist={DATA[i + 1].artist}
            cost={DATA[i + 1].cost}
            image={DATA[i + 1].image}
            productName={DATA[i + 1].productName}
          />
        </div>
      );
    }

    return result;
  };

  return (
    <section>
      <div className="featured-products-container">
        <h1>Featured products</h1>
        <div ref={carouselContainer} className="featured-products-carousel">
          <div
            ref={carouselTrack}
            style={{ transform: `translateX(${slide}px)` }}
            className="featured-products-track"
          >
            {createFeaturedProducts(featuredProducts)}
          </div>
          <div className="featured-products-nav">
            <button
              onClick={() => prevButtonClick()}
              ref={prevButton}
              className="prev"
            >
              <i className="fa fa-chevron-left"></i>
            </button>
            <button
              onClick={() => nextButtonClick()}
              ref={nextButton}
              className="next"
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
