import React from "react"
import { NavLink } from "react-router-dom";
import Common from "./common"
import Navbar from "./Navbar"


function Home(props) {
  return (
   <div>
     <Navbar/>    
  <Common name="One-Stop Destination For All Your Online Insurance & Financial Needs" 
  imgsrc="./img.svg" 
  visit="/service"
   btnname="Get Started" />
  </div>
  );
}

export default Home;
