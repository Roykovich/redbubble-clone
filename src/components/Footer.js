import { useState } from "react";

import "../styles/Footer.css";

import playStoreBadge from "../images/google-play-badge.png";
import appStoreBadge from "../images/app-store-badge.png";

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
          <div>
            <a href="/">
              <i className="fa fa-instagram"></i>Instagram
            </a>
          </div>
          <div>
            <a href="/">
              <i className="fa fa-facebook-f"></i>Facebook
            </a>
          </div>
          <div>
            <a href="/">
              <i className="fa fa-twitter"></i>Twitter
            </a>
          </div>
          <div>
            <a href="/">
              <i className="fa fa-tumblr"></i>Tumblr
            </a>
          </div>
          <div>
            <a href="/">
              <i className="fa fa-pinterest"></i>Pinterest
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-policies">
        <h1>Redbubble</h1>
        <div>
          <a href="/">User Agreement</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Redbubble uses cookies: Cookie Policy</a>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <ul>
          <li>
            <img
              src="https://www.redbubble.com/explore/client/2029097457bb7405bd20a4ebb77951a6.svg"
              alt="Visa"
            />
          </li>
          <li>
            <img
              src="https://www.redbubble.com/explore/client/457cb7ab34309bd29d7811ac56925b01.svg"
              alt="Mastercard"
            />
          </li>
          <li>
            <img
              src="https://www.redbubble.com/explore/client/797e58c253acbb057af56059c4024c6f.svg"
              alt="American Express"
            />
          </li>
          <li>
            <img
              src="https://www.redbubble.com/explore/client/5cc90de9009f853e313e431fc8d0843b.svg"
              alt="PayPal"
            />
          </li>
          <li>
            <img
              src="https://www.redbubble.com/explore/client/c1b9089fa25f6706893e8354fa3a2eed.svg"
              alt="Apple Pay"
            />
          </li>
          <li>
            <img
              src="https://www.redbubble.com/explore/client/ce4e7c766f94c0c073df1b4f8268e00d.svg"
              alt="Amazon Pay"
            />
          </li>
        </ul>
        <div className="badge-container">
          <a href="/">
            <img src={appStoreBadge} alt="App Store" />
          </a>
          <a href="/">
            <img src={playStoreBadge} alt="Play Store" />
          </a>
        </div>
        &copy; Redbubble. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
