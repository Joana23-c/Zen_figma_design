// import {useState,useRef, useEffect} from 'react';
import { Context } from "./context/context";
import { useContext, useEffect, useRef } from "react";
import "./AppContent.scss";
import Header from "./header/header";
import Hero1 from "./hero1/hero1";
import Popular from "./hero2/hero2";
import Section3 from "./sec3/sec3";
import NavigationBar from "./header/navigationBar";
import Hidden from "./header/hiddenpart";
import Season from "./hero1/heroSeason";
import Reviews from "./reviews/reviews";
import Block from "./reviews/block";
import FFooter from "./footer1/footer1";
import Footer from "./footer/footer";
import End from "./footer/end";

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
        <Popular />
        <Section3 />

        <Season />

        <div className="hiddenNav" ref={hidden}>
          <Hidden />
        </div>

        <Reviews />
        <FFooter />
        <Footer />
        <End />
      </div>
    </>
  );
}

export default AppContent;
