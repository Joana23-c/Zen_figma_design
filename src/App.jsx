// import {useState,useRef, useEffect} from 'react';
// import './App.scss'
// import Logo from './images/Logo.png';
// import bg from './images/Hero.png';
import Header from './header/header';
import Hero1 from './hero1/hero1';
import Popular from './hero2/hero2';
import Section3 from './sec3/sec3';
// import Card from './card/card';
// import data from './assets/data.json';

import './App.scss'

function App() {


  return (
  <>

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
    
    </>
  );
}

export default App