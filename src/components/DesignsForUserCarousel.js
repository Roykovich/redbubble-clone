import "../styles/DesignsFourUserCarousel.css";
import DesignForUserCard from "./DesignForUserCard";
import { useState, useEffect, useRef } from "react";

import product from "../images/products/evangelion_design.png";

const DesignsForUserCarousel = () => {
  const [designProducts, setDesignProducts] = useState([]);

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
  ];

  useEffect(() => {
    setDesignProducts(DATA);
  }, []);

  return (
    <section>
      <div className="designs-for-user-container">
        <div className="designs-for-user-header">
          <h1>Explore designs picked for you</h1>
          <a href="/">See more</a>
        </div>
        <div className="designs-for-user-carousel">
          <div className="designs-for-user-track">
            {designProducts.map((item) => {
              return (
                <DesignForUserCard
                  alt={item.alt}
                  artist={item.artist}
                  cost={item.cost}
                  image={item.image}
                  productName={item.productName}
                />
              );
            })}
          </div>
          <div className="designs-for-user-nav">
            <button
              // onClick={}
              // ref={}
              className="prev"
            >
              <i className="fa fa-chevron-left"></i>
            </button>
            <button
              // onClick={}
              // ref={}
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

export default DesignsForUserCarousel;
