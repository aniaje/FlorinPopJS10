import React from "react";
import style from "../style.css";

const Card = ({ experience }) => {
  let badgeText;
  if (experience.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (experience.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = "";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={experience.coverImg} className="card--photo" />

      <div className="rank">
        <img src="../images/star 1.png" className="card--star" />
        <p>
          {experience.stats.rating}
          <span>
            ({experience.stats.reviewCount}) {experience.location}
          </span>
        </p>
      </div>
      <p>{experience.title}</p>
      <p className="card--price">
        <span>
          <b>From ${experience.price}</b> / person
        </span>
      </p>
    </div>
  );
};

export default Card;
