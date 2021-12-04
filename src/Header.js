import React from "react";

const Header = ({aboutRef, gigsRef, lessonsRef}) => {

  const jumpToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <h1>SOPHIE STANLEY</h1>
      <button onClick={() => jumpToRef(aboutRef)}>
        About
      </button>
      <button onClick={() => jumpToRef(lessonsRef)}>
        Lessons
      </button>
      <button onClick={() => jumpToRef(gigsRef)}>
        Gigs
      </button>
      <button onClick={jumpToRef}>
        Contact
      </button>
    </div>
  );
};

export default Header;