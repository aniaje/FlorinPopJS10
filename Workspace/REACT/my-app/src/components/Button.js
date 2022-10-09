import React from "react";
import style from "../style.css";
import { FaLinkedin } from "react-icons/fa";

const Button = (props) => {
  return (
    <button type={props.tyle || "button"} className="button">
      <FaLinkedin />
      <span className="button-text">{props.text}</span>
    </button>
  );
};

export default Button;
