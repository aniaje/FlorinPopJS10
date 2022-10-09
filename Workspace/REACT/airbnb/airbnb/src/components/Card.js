import React from "react";
import style from "../style.css";
import Star from "../images/card/Star 1.png";

const Card = ({ name, score, image, price, country, reviewCount }) => {
  return (
    <div className="card">
      <img src={`../images/card/${image}`} />

      <div className="rank">
        <img src={Star} className="card--star" />
        <p>
          {score}{" "}
          <span>
            ({reviewCount}) {country}
          </span>
        </p>
      </div>
      <p>{name}</p>
      <p>
        <b>From ${price}</b> / person
      </p>
    </div>
  );
};

export default Card;
