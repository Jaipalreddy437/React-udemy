import React from "react";
import InvesrMentLogo from "../../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={InvesrMentLogo} alt="logo showing a money bag" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};

export default Header;
