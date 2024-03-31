import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "../../styles/ReduxCounter.module.css";
import CounterBox from "./CounterBox";
import { useSelector } from "react-redux";

const characrter = {
  level: 1,
  job: "개발자",
  detail: "웹 프론트엔드",
  stack: ["React", "Redux", "Javascript"],
};

const CharacterCard = () => {
  const fullName = useSelector((state) => state.fullName);
  return (
    <Container id={style.character_card}>
      <Row>
        <Col className={style.left}>
          <img src="/assets/images/reduxcounter/characrter.png" />
          <div className={style.name_container}>
            <div className={style.fullName}>{fullName}</div>
          </div>
        </Col>
        <Col className={style.right}>
          <Row className={style.right_up}>
            <a href="https://github.com/">깃허브</a>
            <a href="https://velog.io/">블로그</a>
          </Row>
          <Row className={style.right_down}>
            <ul>
              <li>
                <span>레벨</span>
                <div>{characrter.level}</div>
              </li>
              <li>
                <span>직업</span>
                <div>{characrter.job}</div>
              </li>
              <li>
                <span>인기도</span>
                <CounterBox />
              </li>
              <li>
                <span>분야</span>
                <div>{characrter.detail}</div>
              </li>
              {characrter.stack.map((e, i) => (
                <li>
                  <span>스택{i + 1}</span>
                  <div>{e}</div>
                </li>
              ))}
            </ul>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterCard;
