import React from "react";
import IndexList from "../component/IndexComponent/IndexList";
import style from "../styles/index.module.css";

const Index = () => {
  const assignmentArray = [
    {
      id: 1,
      week: 1,
      title: "가위바위보 게임 (function Component)",
      url: "rock-scissor-paper",
    },
    {
      id: 2,
      week: 1,
      title: "가위바위보 게임 (Class Component)",
      url: "rock-scissor-paper-class",
    },
    {
      id: 3,
      week: 1,
      title: "날씨앱",
      url: "weather",
    },
  ];
  return (
    <div className={style.wrap}>
      <h1>
        <strong>코딩알려주는누나 리액트 스터디 1기</strong>
        <div>이재혁 / 2024.03.18 ~ 2024.04.21</div>
      </h1>
      <ul className={style.list}>
        {assignmentArray.map((assignment) => (
          <IndexList
            key={assignment.id}
            week={assignment.week}
            title={assignment.title}
            url={assignment.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default Index;
