import React from "react"
import Common from "./common"
import Navbar from "./Navbar"


function About(props) {
  return (
    <div>
       <Navbar/>  
  <Common name="Welcome to About Page" 
  imgsrc="./img1.svg"  
  visit="/contact"
   btnname="Contact Now" />
  </div>
  );
}

export default About;