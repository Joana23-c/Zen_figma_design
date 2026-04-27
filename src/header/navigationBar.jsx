import CartIcon from "../assets/simple-cart.svg?react";
import SearchIcon from "../assets/search.svg?react";
import "./navigationBar.scss";
import Logo from "/images/Logo.png";
import cart from "/simple-cart.svg";
import search from "/search.svg";
import heart from "/heart.svg";
import user from "/user.svg";
import { Context } from "../context/context";
import { useContext } from "react";

function NavigationBar() {
  const { setScroll } = useContext(Context);

  const handleOpenNav = () => {
    setScroll(false);
  };

  return (
    <>
      <div className="navbar-wrapper">
        <nav className="navbar">
          <a className="navbar__title">
            <img src={Logo} />
          </a>
          <ul className="navbar__tabs">
            <li className="navbar__item">
              <a href="#">Candles</a>
            </li>
            <li className="navbar__item">
              <a href="#">Diffusers</a>
            </li>
            <li className="navbar__item">
              <a href="#">Spray</a>
            </li>
            <li className="navbar__item">
              <a href="#">Zen Living</a>
            </li>
            <li className="navbar__item">
              <a href="#">About Us</a>
            </li>
          </ul>

          <ul className="navbar__util">
            <li className="navbar__util-item">
              <div className="navbar__cart">
                <img src={cart} />
                <div className="navbar__cart-details">
                  <span className="navbar__cart-title">Cart</span>(
                  <span className="navbar__cart-count">3</span>)
                </div>
              </div>
            </li>
            <li className="navbar__util-item">
              <img src={search} />
            </li>
            <li className="navbar__util-item">
              <img src={heart} />
            </li>
            <li className="navbar__util-item">
              <img src={user} />
            </li>

            <button className="navbar__toggle" onClick={handleOpenNav}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavigationBar;
