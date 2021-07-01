import "../styles/FeaturedCarousel.css";

import product from "../images/products/black_pillow.jpg";

const FeaturedCarousel = () => {
  return (
    <section>
      <div className="featured-products-container">
        <h1>Featured products</h1>
        <div className="featured-products-carousel">
          <div className="featured-product-card">
            <div>
              <img src={product} alt="Black Pillow" />
            </div>
            <div>
              <h5>Product Name</h5>
              <p>by John Doe</p>
              <h4>From $4.20</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
