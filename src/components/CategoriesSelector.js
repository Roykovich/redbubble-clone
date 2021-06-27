import "../styles/CategoriesSelector.css";

const CategoriesSelector = () => {
  return (
    <section className="categories-selector">
      <ul className="categories-navbar">
        <li className="categories-navbar-list" id="Clothing">
          Clothing
          <div className="categories-dropdown" id="clothingContent">
            <a href="#">All clothing</a>
            <a href="#">Dresses</a>
            <a href="#">Hoodies & Sweatshirts</a>
            <a href="#">Leggigns</a>
            <a href="#">Skirts</a>
            <a href="#">Socks</a>
            <a href="#">T-shirts</a>
            <a href="#">Tank Tops</a>
          </div>
        </li>
        <li className="categories-navbar-list" id="Stickers">
          Stickers
          <div className="categories-dropdown" id="stickersContent">
            <a href="#">All Stickers</a>
            <a href="#">Car Stickers</a>
            <a href="#">Helmet Stickers</a>
            <a href="#">Hydro Flask Stickers</a>
            <a href="#">Laptop Stickers</a>
            <a href="#">Magnet</a>
          </div>
        </li>
        <li className="categories-navbar-list" id="Masks">
          Masks
          <div className="categories-dropdown" id="masksContent">
            <a href="#">All Masks</a>
            <a href="#">Fitted Masks</a>
            <a href="#">Flat Masks</a>
            <a href="#">Kids Masks</a>
          </div>
        </li>
        <li className="categories-navbar-list" id="PhoneCases">
          Phone Cases
          <div className="categories-dropdown" id="phoneCasesContent">
            <a href="#">All Phone Cases</a>
            <a href="#">iPhone Cases</a>
            <a href="#">Samsung Galaxy</a>
          </div>
        </li>
        <li className="categories-navbar-list" id="WallArt">
          Wall Art
          <div className="categories-dropdown" id="wallArtContent">
            <a href="#">All Wall Art</a>
            <a href="#">Art Board Prints</a>
            <a href="#">Art Prints</a>
            <a href="#">Canvas Prints</a>
            <a href="#">Frame Prints</a>
            <a href="#">Metal Prints</a>
            <a href="#">Mounted Prints</a>
            <a href="#">Photographic Prints</a>
            <a href="#">Posters</a>
            <a href="#">Tapestries</a>
          </div>
        </li>
        <li className="categories-navbar-list" id="HomeAndLiving">
          Home & Living
          <div className="categories-dropdown" id="homeAndLivingContent">
            <a href="#">All Home & Living</a>
            <a href="#">Acrylic Blocks</a>
            <a href="#">Aprons</a>
            <a href="#">Bath Mats</a>
            <a href="#">Clocks</a>
            <a href="#">Coasters</a>
            <a href="#">Comforters</a>
            <a href="#">Duvet Covers</a>
            <a href="#">Floor Pillows</a>
            <a href="#">Jigsaw Puzzles</a>
            <a href="#">Magnets</a>
            <a href="#">Mugs</a>
            <a href="#">Shower Curtains</a>
            <a href="#">Tapestries</a>
            <a href="#">Throw Blankets</a>
            <a href="#">Throw Pillows</a>
          </div>
        </li>
        <li className="categories-navbar-list" id="KidsAndBabies">
          Kids & Babies
          <div className="categories-dropdown" id="kidsAndBabiesContent">
            <a href="#">All Kids Clothes</a>
            <a href="#">Baby One-Pieces</a>
            <a href="#">Baby T-Shirts</a>
            <a href="#">Kids Masks</a>
            <a href="#">Kids Pullover Hoodies</a>
            <a href="#">Kids T-Shirts</a>
            <a href="#">Toddler Pullover Hoodies</a>
          </div>
        </li>
        <li className="categories-navbar-list" id="Accessories">
          Accessories
          <div className="categories-dropdown" id="accessoriesContent">
            <a href="#">All Accessories</a>
            <a href="#">Backpacks</a>
            <a href="#">Drawstring Bags</a>
            <a href="#">Duffle Bags</a>
            <a href="#">Makeup Bags</a>
            <a href="#">Masks</a>
            <a href="#">Pins</a>
            <a href="#">Scarves</a>
            <a href="#">Socks</a>
            <a href="#">Tech Accessories</a>
            <a href="#">Toiletry Bags</a>
            <a href="#">Tote Bag</a>
            <a href="#">Travel Mugs</a>
            <a href="#">Water Bottles</a>
            <a href="#">Zipper Pouches</a>
          </div>
        </li>
        <li className="categories-navbar-list" id="Stationery">
          Stationery
          <div className="categories-dropdown" id="stationaryContent">
            <a href="#">All Stationery</a>
            <a href="#">Greeting Cards</a>
            <a href="#">Hardcover Journals</a>
            <a href="#">Postcards</a>
            <a href="#">Spiral Notebooks</a>
          </div>
        </li>
        <li className="categories-navbar-list" id="Gifts">
          Gifts
          <div className="categories-dropdown" id="giftsContent">
            <a href="#">All Gifts</a>
            <a href="#">Gift Certificates</a>
            <a href="#">Gifts for Friends</a>
            <a href="#">Gifts for Her</a>
            <a href="#">Gifts for Him</a>
            <a href="#">Gifts for Teens</a>
            <a href="#">Gifts for Them</a>
            <a href="#">Gifts on a Budget</a>
          </div>
        </li>
        <li className="categories-navbar-list">Explore designs</li>
      </ul>
    </section>
  );
};

export default CategoriesSelector;
