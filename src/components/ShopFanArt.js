import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import ProductCard from "./ProductCard";

import product from "../images/products/evangelion_design.png";

const ShopFanArt = () => {
  const gap = 16;
  return (
    <section>
      <div className="landing-page-section-container">
        <h1>Shop fan art made by artist who love it too</h1>
        <div className="shop-fan-art-header">
          <div className="shop-fan-art-header-buttons">
            <button>Hamilton</button>
            <button>Pokemon</button>
            <button>Adventure Time</button>
            <button>Star Wars</button>
            <button>Gravity Falls</button>
          </div>
          <a href="/" className="shop-fan-art-header-seemore">
            Shop Hamilton
          </a>
        </div>
        <Carousel height="320px" columnGap={gap}>
          <ProductCard
            alt="a"
            artist="Rubén Ortiz"
            image={product}
            cost={24}
            productName="PussyDestroyer Chanchote"
            style={{
              height: "100%",
              width: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
              minWidth: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
            }}
          />
        </Carousel>
      </div>
    </section>
  );
};

export default ShopFanArt;
