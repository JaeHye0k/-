import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import style from "../../styles/PhoneBook/PhoneBook.module.css";

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    tel: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name || values.tel) {
      dispatch({
        type: "ADD_CONTACT",
        payload: { ...values },
      });
      setValues({
        name: "",
        tel: "",
      });
    }
  };

  return (
    <Form id={style.contact_form} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>지역으로 검색</Form.Label>
        <Form.Control
          type="text"
          placeholder="미구현"
          onChange={handleChange}
          name="name"
          value={values.name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNumber">
        <Form.Label>키워드로 검색</Form.Label>
        <Form.Control
          type="tel"
          placeholder="미구현"
          onChange={handleChange}
          name="tel"
          value={values.tel}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        검색
      </Button>
    </Form>
  );
};

export default ContactForm;
