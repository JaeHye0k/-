import React from "react";
import "./Intro.style.css";

const Intro = () => {
  const arr = "NETFLIX".split("");
  const randomIdx = Math.floor(Math.random() * arr.length);
  const letter = arr[randomIdx];
  // 브러쉬 털 하나하나를 나타내는 span 태그 생성
  const fur = (arr = []) => {
    for (let i = 31; i >= 1; i--) {
      arr.push(<span className={`fur-${i}`} key={i} />);
    }
    return arr;
  };
  const lamp = (arr = []) => {
    for (let i = 1; i <= 28; i++) {
      arr.push(<span className={`lamp-${i}`} key={i} />);
    }
    return arr;
  };
  return (
    <div id="container">
      <div letter={letter} className="netflixintro">
        <div className="helper-1">
          <div className="effect-brush">{fur()}</div>
          <div className="effect-lumieres">{lamp()}</div>
        </div>
        <div className="helper-2">
          <div className="effect-brush">{fur()}</div>
        </div>
        <div className="helper-3">
          <div className="effect-brush">{fur()}</div>
        </div>
        <div className="helper-4">
          <div className="effect-brush">{fur()}</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
