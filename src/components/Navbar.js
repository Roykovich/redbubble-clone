import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="burger-container">
        <a className="burger">
          <i className="fa fa-bars"></i>
        </a>
        <a className="search-icon">
          <i className="fa fa-search"></i>
        </a>
      </div>
      <div className="logo-container">
        <a>Redbubble</a>
      </div>
      <div className="search-bar">
        <input type="text" name="search" id="search" placeholder="Search" />
        <div>
          <i class="fa fa-search"></i>
        </div>
      </div>
      <div className="buttons-container">
        <a>
          <i className="fa fa-shopping-cart"></i>
        </a>
        <a>
          <i class="fa fa-heart"></i>
        </a>
      </div>
    </nav>
  );
};

/**
 * TODO
 *
 * ? Revisar el navbard de redbubble para ver la propiedad order de la flex box
 */

export default Navbar;
