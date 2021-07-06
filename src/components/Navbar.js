import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [focusSearchBar, setFocusSearchBar] = useState(false);

  const itsFocused = () => {
    setFocusSearchBar(!focusSearchBar);
  };

  return (
    <nav>
      <div className="burger-container">
        <a href="/" className="burger">
          <i className="fa fa-bars"></i>
        </a>
        <a href="/" className="search-icon">
          <i className="fa fa-search"></i>
        </a>
      </div>
      <div className="logo-container">
        <a href="/" tabIndex="-1">
          Redbubble
        </a>
      </div>
      <div className={`search-bar ${focusSearchBar ? "search-bar-focus" : ""}`}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          autoComplete={"off"}
          onFocus={itsFocused}
          onBlur={itsFocused}
        />
        <i className="fa fa-search"></i>
      </div>
      <div className="navigation-container">
        <a href="/">Sell your art</a>
        <a href="/">Login</a>
        <a href="/">Signup</a>
      </div>
      <div className="buttons-container">
        <a href="/">
          <i className="fa fa-shopping-cart"></i>
        </a>
        <a href="/">
          <i className="fa fa-heart"></i>
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
