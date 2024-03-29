import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import style from "../../styles/ShoppingMall.module.css";

const Login = ({ setAuth }) => {
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState();
  const onInput = ({ target: { value } }) => setValue(value);

  const navigate = useNavigate();
  const loginUser = () => {
    setAuth(true);
    navigate("/shopping-mall");
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    localStorage.setItem("id", value);
    console.log(value);
    setValue();

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      loginUser();
    }
    setValidated(true);
    return false;
  };
  return (
    <Container id={style.login_container}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nick Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nickname"
            required
            onChange={onInput}
            value={value}
          />
          <Form.Control.Feedback type="invalid">
            닉네임을 입력해주세요
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            패스워드를 입력해주세요
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
