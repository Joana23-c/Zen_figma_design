import { useRef, useEffect } from "react";
import CartIcon from "../assets/simple-cart.svg?react";
import SearchIcon from "../assets/search.svg?react";
import "./hiddenpart.scss";
import Logo from "/images/Logo.png";

import home from "/home.png";
// import bar from '/bars-solid.svg';
import  { Context } from "../context/context";
import { useContext } from "react";



export default  function Hidden (){
 
 
   const { scroll, setScroll } = useContext(Context);
  let login = false;
//   login = true;

  const hiddenNav = useRef(null);
  const hiddenNavLoged = useRef(null);
  const notLoged = useRef(null);
  const global2 = useRef(null);


  useEffect(() => {
    
    if (scroll === true) {
       if(!login){
         notLoged.current.style.display = "block";
        hiddenNavLoged.current.style.display = "none";   
       } else{
        notLoged.current.style.display = "none";
         hiddenNavLoged.current.style.display = "block"; 

        }  
    }
  }, [scroll]);
//   useEffect(() => {
    
//     if (scroll === false) {
//         global2.current.style.display = "block";
//             global2.current.style.display = "flex";
//     if (hiddenNav.current) {
//         hiddenNav.current.style.display = "flex";
//        if(!login)
//          notLoged.current.style.display = "block";
//         else
//          hiddenNavLoged.current.style.display = "block";   
//   };
// }
//   }, [scroll]);

//   const handleOpenNav = () => {
//     setScroll(false);
//     global2.current.style.display = "flex";
//     if (hiddenNav.current) {
//         hiddenNav.current.style.display = "flex";
//        if(!login)
//          notLoged.current.style.display = "block";
//         else
//          hiddenNavLoged.current.style.display = "block";   
//   };
// }

  const XhiddenNavBtn = () => {
    
    setScroll(true);
    // console.log(scroll);
    // global2.current.style.display = "none";
    // setScroll(true);
    // hiddenNav.current.style.display = "none";
    // hiddenNavLoged.current.style.display = "none";
    // notLoged.current.style.display = "none";
  };

    return (
        <>
        <div className="global2" ref={global2}>
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
    )
}