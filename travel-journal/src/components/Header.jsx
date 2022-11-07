import React from "react";
import globeIcon from "../assets/images/globe-icon.png";

function Header() {
  return (
    <div className="header-container">
      <img src={globeIcon} className="header-icon" width="24px"/>
      <h2 className="header-title">my travel journal.</h2>
    </div>
  )
}

export default Header;