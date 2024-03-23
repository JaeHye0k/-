import React from "react";
import IndexList from "../component/IndexList";
import "../styles/index.css";

const Index = () => {
  const assignmentArray = [
    {
      id: 1,
      week: 1,
      title: "가위바위보 게임 5강~6강",
      url: "rock-scissor-paper",
    },
    {
      id: 2,
      week: 1,
      title: "클래스 컴포넌트 - 가위바위보 게임",
      url: "rock-scissor-paper-class",
    },
    {
      id: 3,
      week: 1,
      title: "두번째 프로젝트: 날씨앱 만들기 1강~6강",
      url: "weather",
    },
    {
      id: 4,
      week: 1,
      title: "두번째 프로젝트: 날씨앱 만들기 7강~9강",
      url: "",
    },
  ];
  return (
    <div className="wrap">
      <h1>
        <strong>코딩알려주는누나 리액트 스터디 1기</strong>
        <div>이재혁 / 2024.03.18 ~ 2024.04.21</div>
      </h1>
      <ul className="list">
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
