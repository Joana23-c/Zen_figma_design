// import {useState,useRef, useEffect} from 'react';
// import { useContext } from "react";
// import './App.scss'
import AppContent from './AppContent';
import  Ctx from "./context/context";




function App() {


  return (
  <>
  <Ctx>
    <AppContent />
  </Ctx>
    </>
  );
}

export default App