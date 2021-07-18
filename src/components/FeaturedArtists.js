import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import ArtistCard from "./ArtistCard";

import image from "../images/products/Kurisuvaporwave.jpg";

const FeaturedArtists = () => {
  const [featuredArtists, setFeaturedArtists] = useState([]);

  const gap = 16;

  const DATA = [
    {
      artistName: "Max Verstappen",
      image,
      pfp: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      artistName: "Lewis Hamilton",
      image,
      pfp: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      artistName: "Valterri Bottas",
      image,
      pfp: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      artistName: "Sebastian Vettel",
      image,
      pfp: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      artistName: "Kimi Räikkönen",
      image,
      pfp: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      artistName: "Piere Gasly",
      image,
      pfp: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      artistName: "Lando Norris",
      image,
      pfp: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      artistName: "Daniel Ricciardo",
      image,
      pfp: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      artistName: "Yuki Tsunoda",
      image,
      pfp: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      artistName: "George Russel",
      image,
      pfp: "https://randomuser.me/api/portraits/women/60.jpg",
    },
  ];

  useEffect(() => {
    setFeaturedArtists(DATA);
  }, []);

  return (
    <section>
      <div className="landing-page-section-container">
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
