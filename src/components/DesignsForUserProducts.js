import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";

import product from "../images/products/evangelion_design.png";

const DesignsForUserCarousel = () => {
  const [designProducts, setDesignProducts] = useState([]);

  const gap = 16;

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

  useEffect(() => {
    setDesignProducts(DATA);
  }, []);

  return (
    <section>
      <div className="landing-page-section-container">
        <div className="designs-for-user-header">
          <h1>Explore designs picked for you</h1>
          <a href="/">See more</a>
        </div>
        <Carousel height="320px" columnGap={gap}>
          {designProducts.map((item) => {
            return (
              <ProductCard
                alt={item.alt}
                artist={item.artist}
                favoriteButon
                image={item.image}
                productAmount={item.amountProducts}
                productName={item.productName}
                style={{
                  height: "100%",
                  width: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
                  minWidth: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
                }}
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default DesignsForUserCarousel;
