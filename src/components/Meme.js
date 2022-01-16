import React from "react";
import memeData from "../memeData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memeData);
  function getMemeImage() {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  }
  return (
    <main>
      <div className="meme">
        <span className="input">
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
        </span>
        <button type="submit" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} alt="meme" className="meme-image" />
    </main>
  );
}

export default Meme;
