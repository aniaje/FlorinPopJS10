import "./style.css";
import jokesData from "./jokesData.js";
import Joke from "./Joke.js";

function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });

  return <div>{jokeElements}</div>;
}

export default App;
