import React, { useState } from "react";
import "./Header.css"
import logo from "./assets/sophie-sig.png"

const Header = ({aboutRef, gigsRef, lessonsRef, contactRef}) => {

  const [mobile, setMobile] = useState(false)
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  const jumpToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="header">
      <div id="logo-and-nav">
        <div id="logo-box">
          <img src={logo} alt="" id="sig"/> 
        </div>
        <div className={`hamburger ${mobileMenuIsOpen ? "is-active" : ''}`} id="hamburger" onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div>
          <button className={`nav-button ${!mobile || mobileMenuIsOpen ? "visible" : "hidden"}`} id="about-button" onClick={() => jumpToRef(aboutRef)}>
            About
          </button>
          <button className={`nav-button ${!mobile || mobileMenuIsOpen ? "visible" : "hidden"}`} id="lesson-button" onClick={() => jumpToRef(lessonsRef)}>
            Lessons
          </button>
          <button className={`nav-button ${!mobile || mobileMenuIsOpen ? "visible" : "hidden"}`} id="gigs-button" onClick={() => jumpToRef(gigsRef)}>
            Gigs
          </button>
          <button className={`nav-button ${!mobile || mobileMenuIsOpen ? "visible" : "hidden"}`} id="contact-button" onClick={() => jumpToRef(contactRef)}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;