import React, { useState } from 'react';
import HamburgerMenu from "react-hamburger-menu"
import "./NavMobile.css"

const NavMobile = ({refs}) => {

  const [menu, setMenu] = useState(false)

  const jumpToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setMenu(false)
  }

  return (
    <div>
      <HamburgerMenu
        className="hamburger"
        isOpen={menu}
        menuClicked={() => setMenu(!menu)}
        width={50}
        height={30}
        strokeWidth={5}
        color={menu ? "black" : "white"}
      />
      <nav className={menu ? "visible" : "hidden"}>
        <button onClick={() => jumpToRef(refs.aboutRef)}>
          About
        </button>
        <button onClick={() => jumpToRef(refs.lessonsRef)}>
          Lessons
        </button>
        <button onClick={() => jumpToRef(refs.gigsRef)}>
          Gigs
        </button>
        <button onClick={() => jumpToRef(refs.contactRef)}>
          Contact
        </button>
      </nav>
    </div>
  );
};

export default NavMobile