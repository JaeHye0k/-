import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import Button from "./component/Button";

// 1. 박스 2개 (타이틀, 이미지, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼 클릭시 선택한 아이템으로 바뀜
// 4. 컴퓨터는 랜덤하게 선택됨
// 5. 3 4 에 따라 승패를 결정한다.
// 6. 승패 결과에 따라 테두리 색 변경 (지면-빨강, 이기면-초록, 비기면-검정)
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

const random = {
  name: "Random",
  img: "./image/question_mark.png",
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
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");
  //prettier-ignore
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);
    let user = judgement(choice[userChoice], choice[computerChoice]);
    let computer = user === "Tie"? "Tie": user === "Win"? "Lose": "Win"
    setUserResult(user);
    setComputerResult(computer);
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
  return (
    <div className="game-container">
      <div className="main">
        <Box title={player.user} item={userSelect} result={userResult} />
        <Box
          title={player.computer}
          item={computerSelect}
          result={computerResult}
        />
      </div>
      <div className="button-container">
        <div onClick={() => play("scissor")}>
          <Button item={choice.scissor} />
        </div>
        <div onClick={() => play("rock")}>
          <Button item={choice.rock} />
        </div>
        <div onClick={() => play("paper")}>
          <Button item={choice.paper} />
        </div>
        <div onClick={() => play(randomChoice())}>
          <Button item={random} />
        </div>
      </div>
    </div>
  );
}

export default App;
/*
<button onClick={() => play("scissor")}>
  <div className="button-content">
    <img src={choice.scissor.img}></img>
  </div>
</button>
*/
