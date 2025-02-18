import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../styles/PhoneBook/PhoneBook.module.css";
import "../styles/PhoneBook/PhoneBook.css";
import ContactForm from "../component/PhoneBook/ContactForm";
import SearchBox from "../component/PhoneBook/SearchBox";
import ContactList from "../component/PhoneBook/ContactList";
import KakaoMap from "../component/PhoneBook/KakaoMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const PhoneBook = () => {
  const [onHamburger, setOnHamburger] = useState(true);

  return (
    <div id={style.phone_book_page}>
      <div id={style.phone_book}>
        <h3 className={style.title}>나만의 작은 맛집 리스트 만들기</h3>
        <div className={style.left}>
          <ContactForm />
          <KakaoMap />
          <h4>*마커를 클릭해보세요!</h4>
        </div>
      </div>
      <div
        className={style.hamburger_icon}
        onClick={() => setOnHamburger(!onHamburger)}
      >
        <FontAwesomeIcon icon={faBars} size="xl" />
      </div>
      <div className={`${style.right} ${onHamburger && style.on}`}>
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};

export default PhoneBook;
