import React from "react";
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
    <div id={style.list_item}>
      <div>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
          alt="person"
        />
      </div>
      <div>
        <div>{item.name}</div>
        <div>{item.tel}</div>
      </div>
      <div className={style.delete_box}>
        <button
          className={style.delete_button}
          onClick={(e) => deleteItem(e, item.tel)}
        >
          <FontAwesomeIcon icon={faTrash} />
          <div className={style.delete}>삭제</div>
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
