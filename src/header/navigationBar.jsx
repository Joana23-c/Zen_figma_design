// import {useRef, useEffect} from 'react';

import { useRef, useEffect } from "react";
import CartIcon from "../assets/simple-cart.svg?react";
import SearchIcon from "../assets/search.svg?react";
import "./navigationBar.scss";
import Logo from "/images/Logo.png";
import cart from "/simple-cart.svg";
import search from "/search.svg";
import heart from "/heart.svg";
import user from "/user.svg";
import home from "/home.png";
// import bar from '/bars-solid.svg';
import  { Context } from "../context/context";
import { useContext } from "react";


function NavigationBar() {
  const { setScroll } = useContext(Context);
  let login = false;
  login = true;

  const hiddenNav = useRef(null);
  const hiddenNavLoged = useRef(null);
  const notLoged = useRef(null);

  useEffect(() => {
    if (hiddenNav.current) {
      hiddenNav.current.style.display = "none";
    }
    if (hiddenNavLoged.current) {
      hiddenNavLoged.current.style.display = "none";
    }
    if (notLoged.current) {
      notLoged.current.style.display = "none";
    }
  }, []);

  const handleOpenNav = () => {
    setScroll(false);
    if (hiddenNav.current) {
        hiddenNav.current.style.display = "flex";
       if(!login)
         notLoged.current.style.display = "block";
        else
         hiddenNavLoged.current.style.display = "block";   
  };
}

  const XhiddenNavBtn = () => {
    setScroll(true);
    hiddenNav.current.style.display = "none";
    hiddenNavLoged.current.style.display = "none";
    notLoged.current.style.display = "none";
  };


  return (
    <>
      <div className="global">
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
              <div className="cart">
                <img src={cart} />
                <div className="cart-details">
                  <span className="cart__tlt">Cart</span>(
                  <span className="cart__nr">3</span>)
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

            <button className="navbar-toggle" onClick={handleOpenNav}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </ul>
        </nav>
      </div>

      {/* <section className="hiddenNav" ref={hiddenNav}> */}
      <div className="global2">
        <section className="hiddenNav" ref={hiddenNav}>
          <div className="hiddenNav__list">
            <ul>
              <li className="xli">
                <button id="xbtn" className="xbtn" onClick={XhiddenNavBtn}>
                  <i className="fa-solid fa-x" width={22} height={22}></i>
                </button>
              </li>
              {/* <li><button id="xbtn" className="xbtn" > <i className="fa-solid fa-x"></i></button></li> */}
              <li>
                <div className="home">
                  <div className="hImg">
                    <img src={home} width={22} height={22} />
                  </div>
                  <span>Home</span>
                </div>
              </li>
              <li>
                <a href="#">Candles</a>
              </li>
              <li>
                <a href="#">Diffusers</a>
              </li>
              <li>
                <a href="#">Spray</a>
              </li>
              <li>
                <a href="#">Zen Living</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <hr />
              <li>
                <div className="search">
                  <div className="sImg">
                    {" "}
                    <SearchIcon className="searchimg" width={24} height={24} />
                  </div>
                  <span>Search</span>
                </div>
              </li>
              <li>
                <div className="hCart">
                  <CartIcon className="cartimg" width={22} height={22} />
                  <span className="cart-details">
                    <span className="cart__tlt">
                      Cart(<span className="cart__nr">3</span>)
                    </span>
                  </span>
                </div>
              </li>
              <hr />
            </ul>


            <section className="notLoged" ref={notLoged}>
            <p>Create an account or log in to start shopping at Zen</p>
            <div className="btns">
              <a href="#" className="btns__Reg">
                Create an account
              </a>
              <br />
              <a href="#" className="btns__Log">
                Log In
              </a>
            </div>
          </section>

          
        <section className="hiddenNavLoged" ref={hiddenNavLoged}>
          <div className="hiddenNavLoged__list">
            <ul>
              <li>
                <a href="#">
                  <i className="fa-regular fa-user"></i>Account Information
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-file-lines"></i>My Order
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-heart"></i>My Wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-location-dot"></i>My Adress
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>Log
                  Out
                </a>
              </li>
            </ul>
          </div>
        </section>

          </div>
        </section>

      </div>
    </>
  );
}

export default NavigationBar;
