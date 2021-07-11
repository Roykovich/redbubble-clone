import "../styles/DesignsFourUserCarousel.css";

const DesignForUserCard = ({
  alt,
  artist,
  amountProducts,
  image,
  productName,
}) => {
  return (
    <div className="designs-for-user-card">
      <div>
        <img src={image} alt={alt} />
      </div>
      <div>
        <h5>{productName}</h5>
        <p>{artist}</p>
        <h4>{amountProducts} products</h4>
      </div>
    </div>
  );
};

export default DesignForUserCard;
