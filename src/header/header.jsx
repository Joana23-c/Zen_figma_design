import {useRef, useEffect} from 'react';
// import {useState,useRef, useEffect} from 'react';
import './header.scss';
import Logo from '/images/Logo.png';
import bg from '/images/Hero.png';

function Header() {

  let login = false;
  // login = true;

  
  const hiddenNav = useRef(null);
  const hiddenNavLoged = useRef(null);
  
  useEffect (()=>{
     
      if (hiddenNav.current  ) {
      hiddenNav.current.style.display = "none";
    }
     if (hiddenNavLoged.current ) {
       hiddenNavLoged.current.style.display = "none";
    }
     
  },[]);

  const handleOpenNav = () => {
    // Make sure the element exists
    if (hiddenNav.current && !login) {
      hiddenNav.current.style.display = "flex";
    }else if (hiddenNavLoged.current && login) {
      hiddenNavLoged.current.style.display = "flex";
    }
  };
  const XhiddenNavLogedBtn = () => {
      hiddenNavLoged.current.style.display = "none";
    
  };
  const XhiddenNavBtn = () => {
      hiddenNav.current.style.display = "none";
  };




  return (
  <>
    <div className="global">
      <header style={{ backgroundImage: `url(${bg})` }}>
        <nav className="navbar">
          <a className="navbar__title">
            <img src={Logo}/>
             </a>
             <ul className="navbar__tabs">
              <li className="navbar__item"><a href="#">Candles</a></li>
               <li className="navbar__item"><a href="#">Diffusers</a></li>
               <li className="navbar__item"><a href="#">Spray</a></li>
               <li className="navbar__item"><a href="#">Zen Living</a></li>
               <li className="navbar__item"><a href="#">About Us</a></li>
             </ul>
             <ul className="navbar__util">
               <li className="navbar__util-item">
                 <a href="cart.html"><i className="fa-solid fa-cart-arrow-down"></i></a>
                 <span className="cart-details">
                  <span className="cart__tlt">Cart</span>(<span className="cart__nr">3</span>)
                  </span>
                </li>
                <li className="navbar__util-item"><a><i className="fa-solid fa-magnifying-glass"></i></a></li>
                <li className="navbar__util-item"><a href="favourites.html"><i className="fa-regular fa-heart"></i></a></li>
                <li className="navbar__util-item"><a href="user.html"><i className="fa-regular fa-user"></i></a></li>
                </ul>  
                <button className="navbar-toggle" onClick={handleOpenNav}><i className="fa-solid fa-bars"></i></button>
        </nav>

        <section className="info">
          <h1>Discover Zen Through Fragrance</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, ipsum eget ornare porttitor, ligula metus fermentum lacus, eget consequat ipsum est a nisi.</p>
          <button className="shopBtn">Shop Now</button>
        </section>
      </header>

      <section className="hiddenNav" ref={hiddenNav}>
          <div className="hiddenNav__list">
          <ul>
            <li><button id="xbtn" className="xbtn" onClick={XhiddenNavBtn}> <i className="fa-solid fa-x"></i></button></li>
            <li><a href="index.html"><i className="fa-solid fa-house"></i>Home</a></li>
            <li><a href="#">Candles</a></li>
            <li><a href="#">Diffusers</a></li>
            <li><a href="#">Spray</a></li>
            <li><a href="#">Zen Living</a></li>
            <li><a href="#">About Us</a></li><hr />
            <li><a><i className="fa-solid fa-magnifying-glass"></i>Search</a></li>
             <li>
              <a href="cart.html"><i className="fa-solid fa-cart-arrow-down"></i></a>
              <span className="cart-details">
              <span className="cart__tlt">Cart</span>(<span className="cart__nr">3</span>)
             </span>
            </li>
            <hr />
          </ul>
          <p>Create an account or log in to start shopping at Zen</p>
          <div className="btns">
          <a href="#" className="btns__Reg">Create an account</a><br />
          <a href="#"className="btns__Log">Log In</a>
        </div>
        </div>

      </section>
          <section className="hiddenNavLoged" ref={hiddenNavLoged}>
          <div className="hiddenNavLoged__list">
          <ul>
            <li><button  className="xbtn" onClick={XhiddenNavLogedBtn}> <i className="fa-solid fa-x"></i></button></li>
            <li><a href="index.html"><i className="fa-solid fa-house"></i>Home</a></li>
            <li><a href="#">Candles</a></li>
            <li><a href="#">Diffusers</a></li>
            <li><a href="#">Spray</a></li>
            <li><a href="#">Zen Living</a></li>
            <li><a href="#">About Us</a></li><hr />
            <li><a><i className="fa-solid fa-magnifying-glass"></i>Search</a></li>
             <li>
              <a href="cart.html"><i className="fa-solid fa-cart-arrow-down"></i></a>
              <span className="cart-details">
              <span className="cart__tlt">Cart</span>(<span className="cart__nr">3</span>)
             </span>
            </li>
            <hr />
            <li><a href="#"><i className="fa-regular fa-user"></i>Account Information</a></li>
            <li><a href="#"><i className="fa-regular fa-file-lines"></i>My Order</a></li>
            <li><a href="#"><i className="fa-regular fa-heart"></i>My Wishlist</a></li>
            <li><a href="#"><i className="fa-solid fa-location-dot"></i>My Adress</a></li>
            <li><a href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i>Log Out</a></li>
          </ul>
        </div>

        </section>


    </div>

    
    </>
  );
}

export default Header