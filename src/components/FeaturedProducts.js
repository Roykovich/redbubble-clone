import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";

import product from "../images/products/black_pillow.jpg";

const FeaturedCarousel = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const gap = 16;

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
      artist: "Kimi R??ikk??nen",
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

  useEffect(() => {
    setFeaturedProducts(DATA);
  }, []);

  const createFeaturedProducts = (data) => {
    let result = [];
    for (let i = 0; i < data.length; i += 2) {
      result.push(
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            minWidth: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
            width: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
          }}
          key={i}
        >
          <ProductCard
            alt={DATA[i].alt}
            artist={DATA[i].artist}
            cost={DATA[i].cost}
            image={DATA[i].image}
            productName={DATA[i].productName}
            style={{
              height: "250px",
              width: "100%",
              marginBottom: "40px",
            }}
          />
          <ProductCard
            alt={DATA[i + 1].alt}
            artist={DATA[i + 1].artist}
            cost={DATA[i + 1].cost}
            image={DATA[i + 1].image}
            productName={DATA[i + 1].productName}
            style={{
              height: "250px",
              width: "100%",
            }}
          />
        </div>
      );
    }

    return result;
  };

  return (
    <section>
      <div className="landing-page-section-container">
        <h1>Featured products</h1>
        <Carousel height="540px" columnGap={gap}>
          {createFeaturedProducts(featuredProducts)}
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
