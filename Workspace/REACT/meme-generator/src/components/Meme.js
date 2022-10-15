import React from "react";
import "../style.css";
import memesData from "../memesData";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "so so",
    bottomText: "no no",
    randomImage: "https://picsum.photos/200/300",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="meme-input" placeholder="toptext"></input>
        <input
          type="text"
          className="meme-input"
          placeholder="bottomtext"
        ></input>
        <button className="search-button" onClick={getMeme}>
          Get a new meme image 🖼
        </button>
      </div>

      <img src={meme.randomImage} className="meme-img"></img>
    </main>
  );
};

export default Meme;
