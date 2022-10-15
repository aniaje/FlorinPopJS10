import React from "react";
import style from "./style.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Card = ({ travel }) => {
  let endDateText;
  if (travel.dates.end == "") {
    endDateText = "ongoing!";
  } else {
    endDateText = travel.dates.end;
  }

  return (
    <div className="card">
      <img src={travel.coverImg} className="card--img"></img>
      <div className="card--info">
        <p className="card-entry-info">
          <FaMapMarkerAlt
            style={{ color: "red", height: "10px", width: "7px" }}
          />
          <span className="card--country">{travel.country}</span>
          <span className="card--google">View on Google Maps</span>
        </p>
        <h1 className="card--title"> {travel.title}</h1>
        <p className="card--dates">
          {travel.dates.start} - {endDateText}
        </p>
        <p className="card--desc">{travel.description}</p>
      </div>
    </div>
  );
};

export default Card;
