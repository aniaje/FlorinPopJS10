import React from "react";
import style from "../style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src="./images/troll.png" className="logo" />
        <span className="nav--title">Meme Generator</span>
      </div>
      <p className="subtitle">React Course -Project 3</p>
    </div>
  );
};

export default Navbar;
