import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "../../styles/PhoneBook/PhoneBook.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItem = (e, tel) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: { tel },
    });
  };

  return (
    <Row id={style.list_item}>
      <Col lg={2}>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
          alt="person"
        />
      </Col>
      <Col lg={8}>
        <div>{item.name}</div>
        <div>{item.tel}</div>
      </Col>
      <Col lg={2} className={style.delete_box}>
        <button
          className={style.delete_button}
          onClick={(e) => deleteItem(e, item.tel)}
        >
          <FontAwesomeIcon icon={faTrash} />
          <div className={style.delete}>삭제</div>
        </button>
      </Col>
    </Row>
  );
};

export default ContactItem;
