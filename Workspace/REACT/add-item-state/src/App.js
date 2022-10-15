import React from "react";

export default function App() {
  /**
   * Challenge:
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the div.state--value flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */

  const [isGoingOut, setGoingOut] = React.useState(true);

  function changeMind() {
    setGoingOut((prevState) => !prevState);
  }

  return (
    <div className="state" onClick={changeMind}>
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value">
        <h1>{isGoingOut ? "yes" : "no"}</h1>
      </div>
    </div>
  );
}
