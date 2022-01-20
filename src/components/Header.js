import React from "react";
import Logo from "../trollFace.png";
function Header() {
  return (
    <header className="header">
      <div className="header-right">
        <img src={Logo} alt="logo" className="logo" />
        <h3 className="logo-title">Meme Generator</h3>
      </div>
      <h3>React Course - Project 3</h3>
    </header>
  );
}

export default Header;
