import "../styles/ProductCard.css";

const ProductCard = ({
  alt,
  artist,
  cost,
  favoriteButon,
  image,
  productName,
  productAmount,
  style,
}) => {
  return (
    <div style={style} className="product-card">
      {favoriteButon ? (
        <button className="product-card-favorite-button">
          <i className="fa fa-heart"></i>
        </button>
      ) : (
        ""
      )}
      <div className="product-card-image-container">
        <img src={image} alt={alt} />
      </div>
      <div className="product-card-info-container">
        <h5>{productName}</h5>
        <p>by {artist}</p>
        <h4>
          {cost
            ? `From $${cost}`
            : productAmount
            ? `${productAmount} products`
            : ""}
        </h4>
      </div>
    </div>
  );
};

export default ProductCard;
