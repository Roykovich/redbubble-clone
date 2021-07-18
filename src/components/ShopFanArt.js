import { useState, useEffect, useRef } from "react";
import Carousel from "./Carousel";
import ProductCard from "./ProductCard";

import hamilton from "../images/products/hamilton_tshirt.jpg";
import pokemon from "../images/products/pokemon_tshirt.jpg";
import adventureTime from "../images/products/adventure_time_tshirt.jpg";
import starWars from "../images/products/star_wars_tshirt.jpg";
import gravityFalls from "../images/products/gravity_falls_tshirt.png";

const ShopFanArt = () => {
  const [fanArts, setFanArts] = useState([]);
  const [activeCarousel, setActiveCarousel] = useState("");
  const buttonsContainer = useRef(null);
  const gap = 16;

  const DATA = [
    {
      artist: "Samantha Faye",
      image: hamilton,
      cost: Math.floor(Math.random() * (40 - 15) + 15),
      productName: "Hamilton T-Shirt",
    },
    {
      artist: "André Grosjean",
      image: pokemon,
      cost: Math.floor(Math.random() * (40 - 15) + 15),
      productName: "Pokemon T-Shirt",
    },
    {
      artist: "Frederick Carthway",
      image: adventureTime,
      cost: Math.floor(Math.random() * (40 - 15) + 15),
      productName: "Adventure Time T-Shirt",
    },
    {
      artist: "Stefany Mellison",
      image: starWars,
      cost: Math.floor(Math.random() * (40 - 15) + 15),
      productName: "Star Wars T-Shirt",
    },
    {
      artist: "John Laurens",
      image: gravityFalls,
      cost: Math.floor(Math.random() * (40 - 15) + 15),
      productName: "Gravity Falls T-Shirt",
    },
  ];

  const merch = {
    Hamilton: "Hamilton",
    Pokemon: "Pokemon",
    AdventureTime: "Adventure Time",
    StarWars: "Star Wars",
    GravityFalls: "Gravity Falls",
  };

  const HamiltonCarousel = () => {
    let result = [];

    for (let i = 0; i < 10; i++) {
      result.push(
        <ProductCard
          favoriteButon
          alt={DATA[0].productName}
          artist={DATA[0].artist}
          image={DATA[0].image}
          cost={DATA[0].cost}
          productName={DATA[0].productName}
          style={{
            height: "100%",
            width: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
            minWidth: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
          }}
        />
      );
    }

    return result;
  };

  const PokemonCarousel = () => {
    let result = [];

    for (let i = 0; i < 10; i++) {
      result.push(
        <ProductCard
          favoriteButon
          alt={DATA[1].productName}
          artist={DATA[1].artist}
          image={DATA[1].image}
          cost={DATA[1].cost}
          productName={DATA[1].productName}
          style={{
            height: "100%",
            width: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
            minWidth: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
          }}
        />
      );
    }

    return result;
  };

  const AdventureTimeCarousel = () => {
    let result = [];

    for (let i = 0; i < 10; i++) {
      result.push(
        <ProductCard
          favoriteButon
          alt={DATA[2].productName}
          artist={DATA[2].artist}
          image={DATA[2].image}
          cost={DATA[2].cost}
          productName={DATA[2].productName}
          style={{
            height: "100%",
            width: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
            minWidth: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
          }}
        />
      );
    }

    return result;
  };

  const StarWarsCarousel = () => {
    let result = [];

    for (let i = 0; i < 10; i++) {
      result.push(
        <ProductCard
          favoriteButon
          alt={DATA[3].productName}
          artist={DATA[3].artist}
          image={DATA[3].image}
          cost={DATA[3].cost}
          productName={DATA[3].productName}
          style={{
            height: "100%",
            width: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
            minWidth: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
          }}
        />
      );
    }

    return result;
  };

  const GravityFallsCarousel = () => {
    let result = [];

    for (let i = 0; i < 10; i++) {
      result.push(
        <ProductCard
          favoriteButon
          alt={DATA[4].productName}
          artist={DATA[4].artist}
          image={DATA[4].image}
          cost={DATA[4].cost}
          productName={DATA[4].productName}
          style={{
            height: "100%",
            width: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
            minWidth: `calc(((100% + ${gap}px) / 5) - ${gap}px)`,
          }}
        />
      );
    }
    return result;
  };

  const currentCarousel = {
    Hamilton: HamiltonCarousel(),
    Pokemon: PokemonCarousel(),
    AdventureTime: AdventureTimeCarousel(),
    StarWars: StarWarsCarousel(),
    GravityFalls: GravityFallsCarousel(),
  };

  const CurrentCarouselComponent = currentCarousel[activeCarousel];

  const setActive = (e, button) => {
    const buttons = buttonsContainer.current.children;

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace(
        "shop-fan-art-button-active",
        ""
      );
    }
    e.target.className += "shop-fan-art-button-active";
    setActiveCarousel(button);
  };

  useEffect(() => {
    setFanArts(DATA);
    setActiveCarousel("Hamilton");
  }, []);

  return (
    <section>
      <div className="landing-page-section-container">
        <h1>Shop fan art made by artist who love it too</h1>
        <div className="shop-fan-art-header">
          <div ref={buttonsContainer} className="shop-fan-art-header-buttons">
            <button
              className="shop-fan-art-button-active"
              onClick={(e) => setActive(e, "Hamilton")}
            >
              Hamilton
            </button>
            <button onClick={(e) => setActive(e, "Pokemon")}>Pokemon</button>
            <button onClick={(e) => setActive(e, "AdventureTime")}>
              Adventure Time
            </button>
            <button onClick={(e) => setActive(e, "StarWars")}>Star Wars</button>
            <button onClick={(e) => setActive(e, "GravityFalls")}>
              Gravity Falls
            </button>
          </div>
          <a href="/" className="shop-fan-art-header-seemore">
            Shop {merch[activeCarousel]} merch
          </a>
        </div>
        <Carousel height="320px" columnGap={gap}>
          {CurrentCarouselComponent}
        </Carousel>
      </div>
    </section>
  );
};

export default ShopFanArt;
