import "../styles/ArtistCard.css";

const ArtistCard = ({ alt, artistName, image, pfp, pfpAlt, style }) => {
  return (
    <div style={style} className="artist-card">
      <div className="artist-card-image-container">
        <img src={image} alt={alt} />
      </div>
      <div className="artist-card-info-container">
        <div className="artist-card-info-pfp">
          <img src={pfp} alt={pfpAlt} />
        </div>
        <a className="artist-card-name" href="/">
          {artistName}
        </a>
        <a className="artist-card-button" href="/">
          View Shop
        </a>
      </div>
    </div>
  );
};

export default ArtistCard;
