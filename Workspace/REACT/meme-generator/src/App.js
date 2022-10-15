import "./style.css";
import Navbar from "./components/Navbar.js";
import Search from "./components/Search";
import Meme from "./components/Meme";

function App() {
  return (
    <>
      <Navbar />
      <section className="content-wrap">
        <Search />
        <Meme />
      </section>
    </>
  );
}

export default App;
