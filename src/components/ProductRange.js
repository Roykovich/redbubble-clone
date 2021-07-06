import "../styles/ShopRange.css";

import pillow from "../images/pillow_photo.jpg";
import stickers from "../images/stickers.jpg";
import tshirt from "../images/t-shirt.jpg";
import poster from "../images/posters.jpg";
import wall_art from "../images/wall_art.jpg";
import clothing from "../images/clothing.jpg";
import phone_cases from "../images/phone_cases.jpg";
import home_and_living from "../images/home_&_living.jpg";
import masks from "../images/masks.jpg";
import accessories from "../images/accessories.jpg";
import stationery from "../images/stationery.jpg";
import gifts from "../images/gifts.jpg";

const ProductRange = () => {
  return (
    <section>
      <div className="shop-range-container">
        <h1>Shop Product Range</h1>
        <div className="shop-range-grid">
          {/* 1st row */}
          <div className="shop-range-item-container">
            <a href="/">
              <img src={pillow} alt="Shop Pillow" />
              <div className="shop-button-container">
                <span>Shop Pillows</span>
              </div>
            </a>
          </div>
          <div className="shop-range-item-container">
            <a href="/">
              <img src={stickers} alt="Shop Sticker" />
              <div className="shop-button-container">
                <span>Shop Stickers</span>
              </div>
            </a>
          </div>
          <div className="shop-range-item-container">
            <a href="/">
              <img src={tshirt} alt="Shop T-shirts" />
              <div className="shop-button-container">
                <span>Shop T-Shirts</span>
              </div>
            </a>
          </div>
          {/* 3rd row */}
          <div className="shop-range-item-container">
            <a href="/">
              <img src={poster} alt="Shop Posters" />
              <div className="shop-button-container">
                <span>Shop Posters</span>
              </div>
            </a>
          </div>
          <div className="shop-range-item-container">
            <a href="/">
              <img src={wall_art} alt="Shop Wall Art" />
              <div className="shop-button-container">
                <span>Shop Wall Arts</span>
              </div>
            </a>
          </div>
          <div className="shop-range-item-container">
            <a href="/">
              <img src={clothing} alt="Shop Clothing" />
              <div className="shop-button-container">
                <span>Shop Clothing</span>
              </div>
            </a>
          </div>
          {/* 4th row */}
          <div className="shop-range-item-container">
            <a href="/">
              <img src={phone_cases} alt="Shop Phone Cases" />
              <div className="shop-button-container">
                <span>Shop Phone Cases</span>
              </div>
            </a>
          </div>
          <div className="shop-range-item-container">
            <a href="/">
              <img src={home_and_living} alt="Shop Home & Living" />
              <div className="shop-button-container">
                <span>Shop Home & Living</span>
              </div>
            </a>
          </div>
          <div className="shop-range-item-container">
            <a href="/">
              <img src={masks} alt="Shop Masks" />
              <div className="shop-button-container">
                <span>Shop Masks</span>
              </div>
            </a>
          </div>
          {/* 5th row */}
          <div className="shop-range-item-container">
            <a href="/">
              <img src={accessories} alt="Shop Accessories" />
              <div className="shop-button-container">
                <span>Shop Accessories</span>
              </div>
            </a>
          </div>
          <div className="shop-range-item-container">
            <a href="/">
              <img src={stationery} alt="Shop Stationery" />
              <div className="shop-button-container">
                <span>Shop Stationery</span>
              </div>
            </a>
          </div>
          <div className="shop-range-item-container">
            <a href="/">
              <img src={gifts} alt="Shop Gifts" />
              <div className="shop-button-container">
                <span>Shop Gifts</span>
              </div>
            </a>
          </div>
          {/* 2nd row */}
          <div className="shop-range-info">
            <i className="fa fa-image"></i>
            <div>
              <h3>Weirdly meaningful art</h3>
              <p>Millions of designs on over 70 high quality products.</p>
            </div>
          </div>
          <div className="shop-range-info">
            <i className="fa fa-thumbs-up"></i>
            <div>
              <h3>Purchases pay artists</h3>
              <p>Money goes directly into a creative person's pocket.</p>
            </div>
          </div>
          <div className="shop-range-info">
            <i className="fa fa-envira"></i>
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
