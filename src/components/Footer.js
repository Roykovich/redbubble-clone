import { useState } from "react";

import "../styles/Footer.css";

const Footer = () => {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English");
  const [matureContent, setMatureContent] = useState(false);
  return (
    <footer>
      <div className="footer-email">
        <div className="footer-email-form-container">
          <div className="footer-email-header">
            <img
              src="https://www.redbubble.com/explore/client/78d4d2ca3f697289b521a4fc3fb07e22.svg"
              alt=""
            />
            <h4>10% off, promos, and the best indie art ever!</h4>
          </div>
          <form action="">
            <input
              type="email"
              name="newsletter"
              id=""
              placeholder="Your email address"
            />
            <button>
              <i className="fa fa-paper-plane"></i>
            </button>
          </form>
        </div>
        <hr />
        <div className="footer-email-location-settings">
          <div>
            <div></div>
            <a href="/">
              {currency} - {language}
            </a>
          </div>
          <button>
            Mature Content: {matureContent ? "Visible" : "Hidden"}
          </button>
        </div>
      </div>
      <div className="footer-info">
        <div>
          <h4>Shop</h4>
          <a href="/">Gift Guides </a>
          <a href="/">Fan Art </a>
          <a href="/">New Works</a>
          <a href="/">Blog </a>
          <a href="/">Student Discount</a>
          <a href="/">Login </a>
          <a href="/">Signup </a>
          <a href="/">Bulk orders </a>
        </div>
        <div>
          <h4>About</h4>
          <a href="/">About Us</a>
          <a href="/">Social Responsibility</a>
          <a href="/">Partner Program</a>
          <a href="/">Affiliates</a>
          <a href="/">Sell your art</a>
          <a href="/">Jobs</a>
          <a href="/">Artist Blog</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Delivery</a>
          <a href="/">Returns</a>
          <a href="/">Help Center</a>
          <a href="/">Guidelines</a>
          <a href="/">Copyright</a>
          <a href="/">Investor Center</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Social</h4>
          <a href="/">Instagram</a>
          <a href="/">Facebook</a>
          <a href="/">Twitter</a>
          <a href="/">Tumblr</a>
          <a href="/">Pinterest</a>
        </div>
      </div>
      <div className="footer-policies"></div>
      <div className="footer-copyright"></div>
    </footer>
  );
};

export default Footer;
