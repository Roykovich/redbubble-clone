import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import ArtistCard from "./ArtistCard";

import image from "../images/products/Kurisuvaporwave.jpg";
import pfp from "../images/gifts.jpg";

import "../styles/FeaturedArtists.css";

const FeaturedArtists = () => {
  const [featuredArtists, setFeaturedArtists] = useState([]);

  const gap = 16;

  const DATA = [
    {
      artistName: "Max Verstappen",
      image,
      pfp,
    },
    {
      artistName: "Lewis Hamilton",
      image,
      pfp,
    },
    {
      artistName: "Valterri Bottas",
      image,
      pfp,
    },
    {
      artistName: "Sebastian Vettel",
      image,
      pfp,
    },
    {
      artistName: "Kimi Räikkönen",
      image,
      pfp,
    },
    {
      artistName: "Piere Gasly",
      image,
      pfp,
    },
    {
      artistName: "Lando Norris",
      image,
      pfp,
    },
    {
      artistName: "Daniel Ricciardo",
      image,
      pfp,
    },
    {
      artistName: "Yuki Tsunoda",
      image,
      pfp,
    },
    {
      artistName: "George Russel",
      image,
      pfp,
    },
  ];

  useEffect(() => {
    setFeaturedArtists(DATA);
  }, []);

  return (
    <section>
      <div className="featured-artists-container">
        <h1>Featured artists</h1>
        <Carousel height="420px" columnGap={gap}>
          {featuredArtists.map((artist) => {
            return (
              <ArtistCard
                alt="background"
                artistName={artist.artistName}
                image={artist.image}
                pfp={artist.pfp}
                pfpAlt="artist profile picture"
                style={{
                  height: "100%",
                  width: `calc(((100% + ${gap}px) / 4) - ${gap}px)`,
                  minWidth: `calc(((100% + ${gap}px) / 4) - ${gap}px)`,
                }}
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedArtists;
