import React from "react";
import "./Header.css"

const Header = ({aboutRef, gigsRef, lessonsRef, contactRef}) => {

  const jumpToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="header">
      <h1 id="logo">Sophie Stanley</h1>
      <button onClick={() => jumpToRef(aboutRef)}>
        About
      </button>
      <button onClick={() => jumpToRef(lessonsRef)}>
        Lessons
      </button>
      <button onClick={() => jumpToRef(gigsRef)}>
        Gigs
      </button>
      <button onClick={() => jumpToRef(contactRef)}>
        Contact
      </button>
    </div>
  );
};

export default Header;