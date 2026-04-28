import "./footer.scss";
import logo from "/Logo.png";
import insta from "/Instagram.svg";
import facebook from "/Vector.svg";
import x from "/X.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__logo">
          <img src={logo}></img>
        </div>

        <div className="footer__columns">
          <div className="footer__column">
            <h1>Company</h1>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h1>Support</h1>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Return & Exchange</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h1>Social</h1>
            <ul>
              <li>
                <a href="#">
                  <img src={insta}></img>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebook}></img>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={x}></img>
                  <span>X</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h1>Subscribe</h1>
            <p className="footer__subscribe-description">
              Subscribe to receive information on exclusive offers, new product
              launch, and exciting events.
            </p>
            <div className="footer__subscribe-form">
              <input type="text" placeholder="Email Address"></input>
              <button>Submit</button>
            </div>
            <span className="footer__privacy-note">
              By joining, you agree on the terms in our
              <a href="#"> privacy policy</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
