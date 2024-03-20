import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import Button from "./component/Button";
import ScoreBoard from "./component/ScoreBoard";

const choice = {
  rock: {
    name: "Rock",
    img: "./image/rock.png",
  },
  scissor: {
    name: "Scissor",
    img: "./image/scissor.png",
  },
  paper: {
    name: "Paper",
    img: "./image/paper.png",
  },
};

const player = {
  user: {
    name: "User",
    img: "./image/user.png",
  },
  computer: {
    name: "Computer",
    img: "./image/robot.png",
  },
};
const games = {
  v1: {
    name: "Rock Scissor Paper",
    isCurrent: true,
  },
  v2: {
    name: "Quickness Test",
    isCurrent: false,
  },
};
const gameList = ["v1", "v2"];
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");
  const [currentGameIdx, setCurrentGameIdx] = useState(0);
  const [currentGameName, setCurrentGameName] = useState("Rock Scissor Paper");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const [isStart, setIsStart] = useState(false);
  const [exp, setExp] = useState(0);
  // 1. start 버튼을 누른다.
  // 2. currentGameName에 따라 게임이 변해야 한다.
  const start = () => {
    setIsStart(true);
  };
  //prettier-ignore
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);
    let user = judgement(choice[userChoice], choice[computerChoice]);
    let computer = user === "Tie"? "Tie": user === "Win"? "Lose": "Win"
    setUserResult(user);
    setComputerResult(computer);
    increaseScore(user,computer);
  };
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    return itemArray[randomItem];
  };
  //prettier-ignore
  const judgement = (user, computer) => {
    if (user.name === computer.name) return "Tie";
    else if (user.name === "Scissor") return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Rock") return computer.name === "Scissor" ? "Win" : "Lose";
    else if (user.name === "Paper") return computer.name === "Rock" ? "Win" : "Lose";
  };
  const increaseScore = (user, computer) => {
    setUserScore(user === "Win" ? userScore + 1 : userScore);
    setComputerScore(computer === "Win" ? computerScore + 1 : computerScore);
  };
  const clickNextGame = () => {
    if (currentGameIdx < gameList.length - 1) {
      let curGame = games[gameList[currentGameIdx]];
      let nextGame = games[gameList[currentGameIdx + 1]];
      curGame.isCurrent = false;
      nextGame.isCurrent = true;
      setCurrentGameName(nextGame.name);
      setCurrentGameIdx(currentGameIdx + 1);
      if (currentGameIdx === gameList.length - 2) {
        setIsLast(true);
        setIsFirst(false);
      } else setIsFirst(false);
    }
  };
  const clickPreGame = () => {
    if (currentGameIdx > 0) {
      let curGame = games[gameList[currentGameIdx]];
      let preGame = games[gameList[currentGameIdx - 1]];
      curGame.isCurrent = false;
      preGame.isCurrent = true;
      setCurrentGameName(preGame.name);
      setCurrentGameIdx(currentGameIdx - 1);
      if (currentGameIdx === 1) {
        setIsFirst(true);
        setIsLast(false);
      } else setIsLast(false);
    }
  };
  return (
    <div>
      {/* 점수판 */}
      <div
        className={`score-container ${
          currentGameName === "Rock Scissor Paper" ? "" : "display-none"
        }`}
      >
        <ScoreBoard
          score={userScore}
          player={player.user}
          result={userResult}
        />
        <ScoreBoard
          score={computerScore}
          player={player.computer}
          result={computerResult}
        />
      </div>
      <div className="game-container">
        <div className={`game-header ${isStart ? "display-none" : ""}`}>
          <button
            onClick={() => clickPreGame()}
            className={`arrow-button ${isFirst ? "disabled" : ""}`}
          >
            <img src="./image/left_arrow.png" className="pre-button"></img>
          </button>
          <div className={`game-name`}>{currentGameName}</div>
          <button
            onClick={() => clickNextGame()}
            className={`arrow-button ${isLast ? "disabled" : ""}`}
          >
            <img src="./image/right_arrow.png" className="next-button"></img>
          </button>
        </div>
        <div className="main">
          <Box player={player.user} item={userSelect} result={userResult} />
          <img className="versus" src="./image/versus.png"></img>
          <Box
            player={player.computer}
            item={computerSelect}
            result={computerResult}
          />
        </div>
        <div
          className={`exp-box ${
            currentGameName === "Quickness Test" ? "" : "display-none"
          }`}
        >
          <progress max={100} value={50}></progress>
        </div>

        <div className={`button-container`}>
          <button
            className={`start-button ${isStart ? "display-none" : ""}`}
            onClick={() => start()}
          >
            <div className="start-button-content">
              <div className="start-button-text">START</div>
            </div>
          </button>
          <div
            onClick={() => play("scissor")}
            className={`${isStart ? "" : "display-none"}`}
          >
            <Button item={choice.scissor} />
          </div>
          <div
            onClick={() => play("rock")}
            className={`${isStart ? "" : "display-none"}`}
          >
            <Button item={choice.rock} />
          </div>
          <div
            onClick={() => play("paper")}
            className={`${isStart ? "" : "display-none"}`}
          >
            <Button item={choice.paper} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
