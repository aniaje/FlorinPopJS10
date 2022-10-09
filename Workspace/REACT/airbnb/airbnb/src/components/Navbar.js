import React from "react";
import style from "../style.css";
import Logo from "../images/Airbnb-Logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} className="nav--logo" />
    </nav>
  );
};

export default Navbar;
