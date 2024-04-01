import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../styles/PhoneBook/PhoneBook.module.css";
import "../styles/PhoneBook/PhoneBook.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../component/PhoneBook/ContactForm";
import SearchBox from "../component/PhoneBook/SearchBox";
import ContactList from "../component/PhoneBook/ContactList";
import KakaoMap from "../component/PhoneBook/KakaoMap";

const PhoneBook = () => {
  return (
    <div>
      <h1 className={style.title}>나만의 작은 맛집 연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <SearchBox />
            <ContactList />
          </Col>
        </Row>
        <Row>
          <Col>
            <KakaoMap />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PhoneBook;
