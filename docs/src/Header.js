import React from "react";
import "./Header.css"
import logo from "./assets/sophie-sig.png"

const Header = ({aboutRef, gigsRef, lessonsRef, contactRef}) => {

  const jumpToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="header">
      <div id="logo-and-nav">
        <div id="logo-box">
          <img src={logo} alt="" id="sig"/> 
        </div>
        <button id="about-button" onClick={() => jumpToRef(aboutRef)}>
          About
        </button>
        <button id="lesson-button" onClick={() => jumpToRef(lessonsRef)}>
          Lessons
        </button>
        <button id="gigs-button" onClick={() => jumpToRef(gigsRef)}>
          Gigs
        </button>
        <button id="contact-button" onClick={() => jumpToRef(contactRef)}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;