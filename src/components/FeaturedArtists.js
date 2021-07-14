import { useState, useEffect } from "react";
import Carousel from "./Carousel";

import image from "../images/masks.jpg";
import pfp from "../images/gifts.jpg";

import "../styles/FeaturedArtists.css";

const FeaturedArtists = () => {
  return (
    <section>
      <div className="featured-artists-container">
        <h1>Featured artists</h1>
        <Carousel height="540px">
          <div className="artist-card">
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <div>
                <img src={pfp} alt="" />
              </div>
              <a href="/">John Doe</a>
              <a href="/">View Shop</a>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedArtists;
