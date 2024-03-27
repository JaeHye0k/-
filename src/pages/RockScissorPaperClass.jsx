import React, { Component } from "react";
import ScoreBoardClass from "../component/RockScissorPaperClassComponent/ScoreBoardClass";
import BoxClass from "../component/RockScissorPaperClassComponent/BoxClass";
import ButtonClass from "../component/RockScissorPaperClassComponent/ButtonClass";
import style from "../styles/RockScissorPaper.module.css";
import IndexButton from "../component/IndexComponent/IndexButton";

const choice = {
  rock: {
    name: "Rock",
    img: "./assets/images/rockscissorpaper/rock.png",
  },
  scissor: {
    name: "Scissor",
    img: "./assets/images/rockscissorpaper/scissor.png",
  },
  paper: {
    name: "Paper",
    img: "./assets/images/rockscissorpaper/paper.png",
  },
};

const player = {
  user: {
    name: "User",
    img: "./assets/images/rockscissorpaper/user.png",
  },
  computer: {
    name: "Computer",
    img: "./assets/images/rockscissorpaper/robot.png",
  },
};

const gameList = ["Rock Scissor Paper", "Quickness Test"];
let pointGap = 20;
let interval = 2000;
let goalLevel = 5;
let intervalId;
let isFirst = true;
const loseSound = new Audio("./assets/sounds/lose1.mp3");
const winSound = new Audio("./assets/sounds/win1.mp3");

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      userResult: "",
      computerResult: "",
      currentGameIdx: 0,
      currentGameName: "Rock Scissor Paper",
      userScore: 0,
      computerScore: 0,
      isLastGame: false,
      isFirstGame: true,
      isStart: false,
      point: 0,
      level: 1,
      btnDisable: false,
      isEmpty: true,
      isEnd: false,
    };
  }
  games = {
    "Rock Scissor Paper": {
      name: "Rock Scissor Paper",
      isCurrent: true,
      func: (userChoice) => {
        let computerChoice = this.randomChoice();
        let user = this.judgement(choice[userChoice], choice[computerChoice]);
        let computer = user === "Tie" ? "Tie" : user === "Win" ? "Lose" : "Win";
        this.increaseScore(user, computer);
        this.setState({
          userSelect: choice[userChoice],
          computerSelect: choice[computerChoice],
          userResult: user,
          computerResult: computer,
        });
      },
    },
    "Quickness Test": {
      name: "Quickness Test",
      isCurrent: false,
      result: "",
      func: (userChoice) => {
        let user = this.judgement(
          choice[userChoice],
          this.state.computerSelect
        );
        let computer = user === "Tie" ? "Tie" : user === "Win" ? "Lose" : "Win";
        this.adjustPoint(user);
        isFirst = false;
        this.setState({
          userSelect: choice[userChoice],
          userResult: user,
          computerResult: computer,
          btnDisable: true,
          isEmpty: false,
        });
      },
    },
  };

  start = (currentGame) => {
    this.setState({ isStart: true });
    if (currentGame === "Quickness Test") {
      intervalId = setInterval(this.intervalSelect, interval);
      // 아직 대기중일 때 버튼이 활성화되지 않도록 하기
      this.setState({ btnDisable: true });
    }
  };
  play = (userChoice) => {
    this.games[this.state.currentGameName].func(userChoice);
  };
  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    return itemArray[randomItem];
  };
  //prettier_ignore
  judgement = (user, computer) => {
    if (user.name === computer.name) return "Tie";
    else if (user.name === "Scissor")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Rock")
      return computer.name === "Scissor" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };
  increaseScore = (user, computer) => {
    this.setState({
      userScore:
        user === "Win" ? this.state.userScore + 1 : this.state.userScore,
      computerScore:
        computer === "Win"
          ? this.state.computerScore + 1
          : this.state.computerScore,
    });
  };
  intervalSelect = () => {
    // 최종 레벨에 도달했을 경우
    if (this.state.level === goalLevel) {
      this.games["Quickness Test"].result = "Win";
      clearInterval(intervalId);
      winSound.play();
      winSound.currentTime = 0;
      this.setState({ isEnd: true });
      return;
    }
    let computerChoice = this.randomChoice();

    // 버튼 활성화, 검정 테두리로 초기화, 이미지 비우기
    this.setState({
      btnDisable: false,
      userResult: "Tie",
      computerResult: "Tie",
      userSelect: "",
      computerSelect: choice[computerChoice],
      isEmpty: !this.state.isEmpty,
    });
    // 유저가 내지 않았을 경우
    if (this.state.isEmpty && !isFirst) {
      this.setState({
        userResult: "Lose",
        computerResult: "Win",
        computerSelect: this.state.computerSelect,
      });
      this.adjustPoint("Lose");
    }
  };

  levelUp = () => {
    interval *= 0.75; // 4분의 1씩 줄임
    clearInterval(intervalId);
    intervalId = setInterval(this.intervalSelect, interval);
    this.setState({
      point: 0,
      level: this.state.level + 1,
    });
  };
  adjustPoint = (user) => {
    if (user === "Win") {
      this.setState({ point: this.state.point + pointGap });
      if (this.state.point + pointGap >= 100) this.levelUp();
    } else if (user === "Lose") {
      this.setState({ point: this.state.point - pointGap });
      if (this.state.point - pointGap < 0) {
        this.games["Quickness Test"].result = "Lose";
        clearInterval(intervalId);
        loseSound.play();
        loseSound.currentTime = 0;
        this.setState({
          isEnd: true,
          btnDisable: true,
        });
      }
    }
  };
  clickNextGame = () => {
    if (this.state.currentGameIdx < gameList.length - 1) {
      let curGame = this.games[gameList[this.state.currentGameIdx]];
      let nextGame = this.games[gameList[this.state.currentGameIdx + 1]];
      curGame.isCurrent = false;
      nextGame.isCurrent = true;
      this.setState({
        currentGameName: nextGame.name,
        currentGameIdx: this.state.currentGameIdx + 1,
      });
      if (this.state.currentGameIdx === gameList.length - 2) {
        this.setState({
          isLastGame: true,
          isFirstGame: false,
        });
      } else this.setState({ isFirstGame: false });
    }
  };
  clickPreGame = () => {
    if (this.state.currentGameIdx > 0) {
      let curGame = this.games[gameList[this.state.currentGameIdx]];
      let preGame = this.games[gameList[this.state.currentGameIdx - 1]];
      curGame.isCurrent = false;
      preGame.isCurrent = true;
      this.setState({
        currentGameName: preGame.name,
        currentGameIdx: this.state.currentGameIdx - 1,
      });
      if (this.state.currentGameIdx === 1) {
        this.setState({
          isFirstGame: true,
          isLastGame: false,
        });
      } else this.setState({ isLastGame: false });
    }
  };
  moveGameSelect = () => {
    this.setState({
      userSelect: null,
      computerSelect: null,
      userResult: "",
      computerResult: "",
      userScore: 0,
      computerScore: 0,
      isStart: false,
      point: 0,
      level: 1,
      btnDisable: false,
      isEmpty: true,
      isEnd: false,
    });
    interval = 2000;
    isFirst = true;
    clearInterval(intervalId);
  };
  render() {
    return (
      <div className={style.dongle_font}>
        <IndexButton />
        {this.state.isStart && (
          <button
            onClick={() => this.moveGameSelect()}
            className={`${style.game_select_button}`}
          >
            <div className={style.game_select_button_content}>
              <div className={style.game_select_button_text}>
                게임 선택 화면으로
              </div>
            </div>
          </button>
        )}
        {/* 점수판 */}
        <div className={style.score_container}>
          {this.state.currentGameName === "Rock Scissor Paper" && (
            <ScoreBoardClass
              score={this.state.userScore}
              player={player.user.name}
              result={this.state.userResult}
              className={style.score_component}
            />
          )}

          {/* 순발력 테스트 레벨 표시 */}
          {this.state.currentGameName === "Quickness Test" &&
            this.state.isStart && (
              <ScoreBoardClass
                goal={goalLevel}
                score={this.state.level}
                player={"Level"}
                className={style.level_board}
              />
            )}
          {/* 순발력 테스트 결과 표시 */}
          {this.state.isEnd && (
            <div
              className={`${style.quickness_result} ${
                this.games["Quickness Test"].result === "Win"
                  ? style.Win
                  : style.Lose
              }`}
            >
              {this.games["Quickness Test"].result === "Win"
                ? "Win! :)"
                : "Game Over :("}
            </div>
          )}

          {this.state.currentGameName === "Rock Scissor Paper" && (
            <ScoreBoardClass
              score={this.state.computerScore}
              player={player.computer.name}
              result={this.state.computerResult}
              className={style.score_component}
            />
          )}
        </div>
        <div className={style.game_container}>
          {!this.state.isStart && (
            <div className={style.game_header}>
              <button
                onClick={() => this.clickPreGame()}
                className={`${style.arrow_button} ${
                  this.state.isFirstGame && style.disabled
                }`}
              >
                <img
                  src="./assets/images/rockscissorpaper/left_arrow.png"
                  className={style.pre_button}
                  alt="left arrow"
                ></img>
              </button>
              <div className={style.game_name}>
                {this.state.currentGameName}
              </div>
              <button
                onClick={() => this.clickNextGame()}
                className={`${style.arrow_button} ${
                  this.state.isLastGame && style.disabled
                }`}
              >
                <img
                  src="./assets/images/rockscissorpaper/right_arrow.png"
                  className={style.next_button}
                  alt="right arrow"
                ></img>
              </button>
            </div>
          )}

          <div className={style.main}>
            <BoxClass
              player={player.user}
              item={this.state.userSelect}
              result={this.state.userResult}
            />
            <img
              className={style.versus}
              src="./assets/images/rockscissorpaper/versus.png"
              alt="versus"
            ></img>
            <BoxClass
              player={player.computer}
              item={this.state.computerSelect}
              result={this.state.computerResult}
            />
          </div>

          {this.state.currentGameName === "Quickness Test" && (
            <div className={style.progress_outter}>
              <div
                className={style.progress_inner}
                style={{ width: this.state.point + "%" }}
              ></div>
            </div>
          )}

          <div className={style.button_container}>
            {/* 시작 버튼 */}
            {!this.state.isStart && (
              <button
                className={style.start_button}
                onClick={() => this.start(this.state.currentGameName)}
              >
                <div className={style.start_button_content}>
                  <div className={style.start_button_text}>START</div>
                </div>
              </button>
            )}
            {/* 가위 바위 보 버튼 */}
            {this.state.isStart && (
              <button
                onClick={() => this.play("scissor")}
                className={`${this.state.btnDisable ? style.btn_disabled : ""}`}
                disabled={this.state.btnDisable}
              >
                <ButtonClass item={choice.scissor} />
              </button>
            )}

            {this.state.isStart && (
              <button
                onClick={() => this.play("rock")}
                className={`${this.state.btnDisable ? style.btn_disabled : ""}`}
                disabled={this.state.btnDisable}
              >
                <ButtonClass item={choice.rock} />
              </button>
            )}

            {this.state.isStart && (
              <button
                onClick={() => this.play("paper")}
                className={`${this.state.btnDisable ? style.btn_disabled : ""}`}
                disabled={this.state.btnDisable}
              >
                <ButtonClass item={choice.paper} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
