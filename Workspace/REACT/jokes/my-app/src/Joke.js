import React from "react";
import "./style.css";

const Joke = ({ setup, punchline }) => {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShow() {
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <>
      {setup && <h1>{setup}</h1>}
      <hr></hr>
      {isShown && <p>{punchline}</p>}

      <button onClick={toggleShow}>show</button>
    </>
  );
};

export default Joke;
