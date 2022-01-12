import React from "react";
import memeData from "../memeData";

function Meme() {
  let url;
  function getMemeImage() {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    url = memeArray[randomNumber].url;
    console.log(url);
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
    </main>
  );
}

export default Meme;
