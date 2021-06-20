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
        <a>ø</a>
        <a>Redbubble</a>
      </div>
      <div className="buttons-container">
        <a>
          <i className="fa fa-shopping-cart"></i>
        </a>
        <a>
          <i className="fas fa-heart"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
