// import {useState,useRef, useEffect} from 'react';
import { Context } from "./context/context";
import { useContext, useEffect, useRef } from "react";
import "./AppContent.scss";
// import Logo from './images/Logo.png';
// import bg from './images/Hero.png';
import Header from "./header/header";
import Hero1 from "./hero1/hero1";
import Popular from "./hero2/hero2";
import Section3 from "./sec3/sec3";
import NavigationBar from "./header/navigationBar";
import Hidden from "./header/hiddenpart";
import Season from "./hero1/heroSeason";
import Reviews from "./reviews/reviews";
import Block from "./reviews/block";
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

        <Season />

        <div className="hiddenNav" ref={hidden}>
          <Hidden />
        </div>

        <Reviews />
        {/* <Block
          img="/images/Background(2).png"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, ipsum eget ornare porttitor, ligula metus fermentum lacus, eget consequat ipsum est a nisi. Donec varius dictum eros a facilisis. Fusce at pulvinar ligula. Donec accumsan orci nisl, a sodales ante ultrices vel. Aliquam erat volutpat. Phasellus elit sem, vestibulum ut bibendum accumsan, facilisis sed mi. Suspendisse ut pellentesque risus."
          auth="Sam Caldwell"
          stars={4}
        /> */}
      </div>
    </>
  );
}

export default AppContent;
