// import {useState,useRef, useEffect} from 'react';
import { Context } from "./context/context";
import { useContext, useEffect, useRef } from "react";
import "./AppContent.scss";
import Header from "./header/header";
// import Hero1 from "./hero1/hero1";
import Popular from "./hero2/hero2";
import Section3 from "./sec3/sec3";
import NavigationBar from "./header/navigationBar";
import Hidden from "./header/hiddenpart";
// import Season from "./hero1/heroSeason";
import Hero from "./hero1/heroprop";
import Reviews from "./reviews/reviews";
import Block from "./reviews/block";
import Features from "./features/features";
import Footer from "./footer/footer";
import End from "./footer/end";

function AppContent() {
  const { scroll } = useContext(Context);
  const bigCont = useRef(null);
  const hidden = useRef(null);
  useEffect(() => {
    // console.log("scroll changed:", scroll);

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
    
      <div className="page-wrapper" ref={bigCont}>
        <div className="nav-bar">
          <NavigationBar></NavigationBar>
        </div>
        <Header />
        <Hero 
          title="New Arrivals"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur."
        category="new"/>
        <Popular />
        <Section3 />

        {/* <Season /> */}
              <Hero
        title="‘Tis The Season"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur."
        category="season"
      />

        <div className="mobile-nav" ref={hidden}>
          <Hidden />
        </div>

        <Reviews />
        <Features />
        <Footer />
        <End />
      </div>
    
  );
}

export default AppContent;
