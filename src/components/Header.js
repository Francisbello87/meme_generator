import React from "react";
import Logo from "../Logo.png";
function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <h3>React Course - Project 3</h3>
    </header>
  );
}

export default Header;
