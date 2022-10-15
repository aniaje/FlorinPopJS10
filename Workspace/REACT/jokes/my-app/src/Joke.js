import React from "react";
import "./style.css";

const Joke = ({ setup, punchline }) => {
  return (
    <>
      {setup && <h1>{setup}</h1>}
      <hr></hr>
      <p>{punchline}</p>
    </>
  );
};

export default Joke;
