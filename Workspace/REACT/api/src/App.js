import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
    </div>
  );
}

export default App;
