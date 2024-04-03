import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import style from "../../styles/ShoppingMallRedux/ShoppingMallRedux.module.css";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../../redux/ShoppingMallRedux/actions/authenticateAction";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = () => {
    dispatch(authenticateAction.login(id, password));
    navigate("/shopping-mall-redux");
  };

  const handleSubmit = (e) => {
    const form = e.target;
    localStorage.setItem("id", id);
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
            onChange={(e) => setId(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            닉네임을 입력해주세요
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
