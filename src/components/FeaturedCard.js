import "../styles/FeaturedCarousel.css";

const FeaturedCard = ({ image, alt, productName, artist, cost }) => {
  return (
    <div className="featured-product-card">
      <div>
        <img src={image} alt={alt} />
      </div>
      <div>
        <h5>{productName}</h5>
        <p>by {artist}</p>
        <h4>From ${cost}</h4>
      </div>
    </div>
  );
};

export default FeaturedCard;
