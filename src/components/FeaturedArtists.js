import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import ArtistCard from "./ArtistCard";

import image from "../images/products/Kurisuvaporwave.jpg";
import pfp from "../images/gifts.jpg";

import "../styles/FeaturedArtists.css";

const FeaturedArtists = () => {
  return (
    <section>
      <div className="featured-artists-container">
        <h1>Featured artists</h1>
        <Carousel height="420px">
          <ArtistCard
            alt="background"
            artistName="John Doe"
            image={image}
            pfp={pfp}
            pfpAlt="artist profile picture"
            style={{
              height: "100%",
              width: "calc(((100% + 16px) / 5) - 16px)",
              minWidth: "calc(((100% + 16px) / 4) - 16px)",
              marginRight: "16px",
            }}
          />
          <ArtistCard
            alt="background"
            artistName="John Doe"
            image={image}
            pfp={pfp}
            pfpAlt="artist profile picture"
            style={{
              height: "100%",
              width: "calc(((100% + 16px) / 5) - 16px)",
              minWidth: "calc(((100% + 16px) / 4) - 16px)",
              marginRight: "16px",
            }}
          />
          <ArtistCard
            alt="background"
            artistName="John Doe"
            image={image}
            pfp={pfp}
            pfpAlt="artist profile picture"
            style={{
              height: "100%",
              width: "calc(((100% + 16px) / 5) - 16px)",
              minWidth: "calc(((100% + 16px) / 4) - 16px)",
              marginRight: "16px",
            }}
          />
          <ArtistCard
            alt="background"
            artistName="John Doe"
            image={image}
            pfp={pfp}
            pfpAlt="artist profile picture"
            style={{
              height: "100%",
              width: "calc(((100% + 16px) / 5) - 16px)",
              minWidth: "calc(((100% + 16px) / 4) - 16px)",
              marginRight: "16px",
            }}
          />
          <ArtistCard
            alt="background"
            artistName="John Doe"
            image={image}
            pfp={pfp}
            pfpAlt="artist profile picture"
            style={{
              height: "100%",
              width: "calc(((100% + 16px) / 5) - 16px)",
              minWidth: "calc(((100% + 16px) / 4) - 16px)",
              marginRight: "16px",
            }}
          />
          <ArtistCard
            alt="background"
            artistName="John Doe"
            image={image}
            pfp={pfp}
            pfpAlt="artist profile picture"
            style={{
              height: "100%",
              width: "calc(((100% + 16px) / 5) - 16px)",
              minWidth: "calc(((100% + 16px) / 4) - 16px)",
              marginRight: "16px",
            }}
          />
          <ArtistCard
            alt="background"
            artistName="John Doe"
            image={image}
            pfp={pfp}
            pfpAlt="artist profile picture"
            style={{
              height: "100%",
              width: "calc(((100% + 16px) / 5) - 16px)",
              minWidth: "calc(((100% + 16px) / 4) - 16px)",
              marginRight: "16px",
            }}
          />
          <ArtistCard
            alt="background"
            artistName="John Doe"
            image={image}
            pfp={pfp}
            pfpAlt="artist profile picture"
            style={{
              height: "100%",
              width: "calc(((100% + 16px) / 5) - 16px)",
              minWidth: "calc(((100% + 16px) / 4) - 16px)",
              marginRight: "16px",
            }}
          />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedArtists;
