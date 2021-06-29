import "../styles/ShopRange.css";
import pillow from "../images/pillow_photo.jpg";
import stickers from "../images/stickers.jpg";
import tshirt from "../images/t-shirt.jpg";

const ProductRange = () => {
  return (
    <section>
      <div className="shop-range-container">
        <h1>Shop Product Range</h1>
        <div className="shop-range-grid">
          {/* 1st row */}
          <div className="shop-range-item-container">
            <a href="#">
              <img src={pillow} alt="Shop Pillow" />
            </a>
            <div className="shop-button-container">
              <a href="#">Shop Pillows</a>
            </div>
          </div>
          <div className="shop-range-item-container">
            <a href="#">
              <img src={stickers} alt="Shop Sticker" />
            </a>
            <div className="shop-button-container">
              <a href="#">Shop Stickers</a>
            </div>
          </div>
          <div className="shop-range-item-container">
            <a href="#">
              <img src={tshirt} alt="Shop Pillow" />
            </a>
            <div className="shop-button-container">
              <a href="#">Shop T-Shirts</a>
            </div>
          </div>
          {/* 3rd row */}
          <div className="shop-range-item-container">
            <a href="#">
              <img src={stickers} alt="Shop Pillow" />
              <div className="shop-button-container">
                <a href="#">Shop Stickers</a>
              </div>
            </a>
          </div>
          <div className="shop-range-item-container">
            <a href="#">
              <img src={pillow} alt="Shop Sticker" />
              <div className="shop-button-container">
                <a href="#">Shop Pillows</a>
              </div>
            </a>
          </div>
          <div className="shop-range-item-container">
            <a href="#">
              <img src={stickers} alt="Shop Pillow" />
              <div className="shop-button-container">
                <a href="#">Shop Stickers</a>
              </div>
            </a>
          </div>
          {/* 4th row */}
          <div className="shop-range-item-container">
            <a href="#">
              <img src={pillow} alt="Shop Pillow" />
              <div className="shop-button-container">
                <a href="#">Shop Pillows</a>
              </div>
            </a>
          </div>
          <div className="shop-range-item-container">
            <a href="#">
              <img src={stickers} alt="Shop Sticker" />
              <div className="shop-button-container">
                <a href="#">Shop Stickers</a>
              </div>
            </a>
          </div>
          <div className="shop-range-item-container">
            <a href="#">
              <img src={pillow} alt="Shop Pillow" />
              <div className="shop-button-container">
                <a href="#">Shop Pillows</a>
              </div>
            </a>
          </div>
          {/* 2nd row */}
          <div className="shop-range-info">
            <i class="fa fa-image"></i>
            <div>
              <h3>Weirdly meaningful art</h3>
              <p>Millions of designs on over 70 high quality products.</p>
            </div>
          </div>
          <div className="shop-range-info">
            <i class="fa fa-thumbs-up"></i>
            <div>
              <h3>Purchases pay artists</h3>
              <p>Money goes directly into a creative person's pocket.</p>
            </div>
          </div>
          <div className="shop-range-info">
            <i class="fa fa-envira"></i>
            <div>
              <h3>Socially responsible production</h3>
              <p>We're investing in programs to offset all carbon emissions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
