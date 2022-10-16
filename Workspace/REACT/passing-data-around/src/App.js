import "./style.css";
import React from "react";
import boxes from "./boxes.js";
import Box from "./Box";

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const sqColumn = squares.map((sq) => (
    <Box key={sq.id} id={sq.id} on={sq.on} toggle={toggle} />
  ));

  return (
    <main>
      <h1>Boxes will go here</h1>
      {sqColumn}
    </main>
  );
}
