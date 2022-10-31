import "./App.css";
import React, { useState, useEffect } from "react";
import WindowTracker from "./WindowTracker";

function App() {
  const [show, setShow] = useState(true);
  function handleToggle() {
    setShow((prevShow) => !prevShow);
  }

  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

  return (
    <div className="container">
      <button onClick={handleToggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
