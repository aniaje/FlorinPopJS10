import "./style.css";
import Navbar from "./Navbar.js";
import Card from "./Card.js";
import data from "./data.js";

function App() {
  const travels = data.map((travel) => {
    return <Card id={travel.id} travel={travel} />;
  });

  return (
    <>
      <Navbar />
      <section classsName="travel--list">{travels}</section>
    </>
  );
}

export default App;
