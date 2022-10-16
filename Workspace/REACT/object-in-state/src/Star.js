import React from "react";

const Star = (props) => {
  const starIcon = props.isFilled
    ? "../images/starred-filled.png"
    : "../images/star-empty.png";

  return (
    <img
      src={`./images/${starIcon}`}
      className="card--favorite"
      onClick={props.handleClick}
    />
  );
};

export default Star;
