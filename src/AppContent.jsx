// import {useState,useRef, useEffect} from 'react';
import  { Context } from "./context/context";
import { useContext, useEffect,useRef } from "react";
import './AppContent.scss'
// import Logo from './images/Logo.png';
// import bg from './images/Hero.png';
import Header from './header/header';
import Hero1 from './hero1/hero1';
import Popular from './hero2/hero2';
import Section3 from './sec3/sec3';
import NavigationBar from './header/navigationBar';
import Hidden from './header/hiddenpart';
// import Card from './card/card';
// import data from './assets/data.json';




function AppContent() {

  
const { scroll } = useContext(Context);
const bigCont = useRef(null);
const hidden = useRef(null);
useEffect(() => {
  console.log("scroll changed:", scroll);

  if (bigCont.current && hidden.current) {
    if (scroll) {
      bigCont.current.style.overflowY = "auto";
      hidden.current.style.display = "none";
    } else {
      bigCont.current.style.overflowY = "hidden";
      hidden.current.style.display = "flex";
    }
  }
}, [scroll]);

  return (
  <>
  <div className="bigCont" ref={bigCont}>
    <div className="navBar">
       <NavigationBar></NavigationBar>
    </div>

  <Header />
  <Hero1 />
  {/* <Card /> */}
    {/* {
      data
      .filter((n)=> n.category=="popular")
      // .filter((n)=> n.category=="new")
      .map((p, i) => (
          <Card 
          key={i}
          id={p.id}
          title ={p.name}
          img={p.image} 
          price={p.price}/>
       ))
    } */}
    <Popular />
    <Section3 />
    <div className="hiddenNav" ref={hidden}>
        <Hidden  />
    </div>
   
    </div>
    </>
  );
}

export default AppContent