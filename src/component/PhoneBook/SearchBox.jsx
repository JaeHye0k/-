import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import style from "../../styles/PhoneBook/PhoneBook.module.css";

// 1. 유저가 searchBox 에 찾을 이름을 입력한 뒤에 버튼을 누른다.
// 2. onSearch 함수가 실행되며 유저가 입력한 이름을 불러온다.
// 3. contactList 와 비교하여 동일한 이름을 가진 객체만 따로 searchList 에 저장한다.
// 4. ContactList 컴포넌트에서 searchList가 비어있지 않으면 searchList에 있는 값을 출력하도록 한다.

const SearchBox = () => {
  const [serachName, setSearchName] = useState("");
  const contactList = useSelector((state) => state.contactList);
  const dispatch = useDispatch();

  const onSearch = (e) => {
    const searchList = contactList.filter(
      (item) => item.name.includes(serachName) || item.tel.includes(serachName)
    );

    dispatch({
      type: "SEARCH_CONTACT",
      payload: searchList,
    });
  };
  return (
    <div className={style.search_box}>
      <div>
        <Form.Control
          type="text"
          placeholder="이름 또는 연락처"
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
      </div>
      <div>
        <Button onClick={onSearch}>찾기</Button>
      </div>
    </div>
  );
};

export default SearchBox;
