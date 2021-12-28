import React, { useState, useEffect } from "react";
import "./Header.css"
import logo from "./assets/sophie-sig.png"
import NavDesktop from "./NavDesktop"
import NavMobile from "./NavMobile"

const mediaQuery = "(min-width: 600px)";

const Header = (refs) => {

  const mql = window.matchMedia(mediaQuery);
  const [isDesktop, setIsDesktop] = useState(mql.matches);

  useEffect(() => {
    const handleMediaChange = function (MediaQueryList) {
      setIsDesktop(this.matches);
    };
    mql.addEventListener("change", handleMediaChange);
    setIsDesktop(mql.matches);

    return () => {
      mql.removeEventListener("change", handleMediaChange);
    };
  }, [mql]);

  return (
    <div id="header">
      <div id="logo-box">
        <img src={logo} alt="" id="sig"/> 
      </div>
      {isDesktop ? <NavDesktop refs={refs}/> : 
      <NavMobile refs={refs}/>}
    </div>
  );
};

export default Header;