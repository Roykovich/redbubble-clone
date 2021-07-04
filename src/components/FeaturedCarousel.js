import "../styles/FeaturedCarousel.css";
import FeaturedCard from "./FeaturedCard";

import product from "../images/products/black_pillow.jpg";

const FeaturedCarousel = () => {
  return (
    <section>
      <div className="featured-products-container">
        <h1>Featured products</h1>
        <div className="featured-products-carousel">
          <div className="featured-column">
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
          </div>
          <div className="featured-column">
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
          </div>
          <div className="featured-column">
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
          </div>
          <div className="featured-column">
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
          </div>
          <div className="featured-column">
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
          </div>
          <div className="featured-column">
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
          </div>
          <div className="featured-column">
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
          </div>
          <div className="featured-column">
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
          </div>
          <div className="featured-column">
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
            <FeaturedCard
              alt={"Black Pillow"}
              artist={"John Dow"}
              cost={6.66}
              image={product}
              productName={"Incrediblo Black Pillow"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
