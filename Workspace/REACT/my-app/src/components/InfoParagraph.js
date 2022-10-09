import React from "react";
import style from "../style.css";

const InfoParagraph = (props) => {
  return (
    <div className="info-p">
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default InfoParagraph;
