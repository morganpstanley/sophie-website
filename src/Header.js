import React from "react";
import "./Header.css"
import logo from "./assets/sophie-sig.png"
import NavDesktop from "./NavDesktop"
import NavMobile from "./NavMobile"


const Header = ({isDesktop, refs}) => {

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