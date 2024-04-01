import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

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
    dispatch({
      type: "ADD_CONTACT",
      payload: { ...values },
    });
    setValues({
      name: "",
      tel: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleChange}
          name="name"
          value={values.name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNumber">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="tel"
          placeholder="전화번호를 입력해주세요"
          onChange={handleChange}
          name="tel"
          value={values.tel}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
};

export default ContactForm;
