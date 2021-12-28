import React from 'react';
import "./NavDesktop.css"


const  NavDesktop = ({refs}) => {
  const jumpToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav>
      <button className="nav-button" id="about-button" onClick={() => jumpToRef(refs.aboutRef)}>
        About
      </button>
      <button className="nav-button" id="lesson-button" onClick={() => jumpToRef(refs.lessonsRef)}>
        Lessons
      </button>
      <button className="nav-button" id="gigs-button" onClick={() => jumpToRef(refs.gigsRef)}>
        Gigs
      </button>
      <button className="nav-button" id="contact-button" onClick={() => jumpToRef(refs.contactRef)}>
        Contact
      </button>
    </nav>
  );
};

export default NavDesktop