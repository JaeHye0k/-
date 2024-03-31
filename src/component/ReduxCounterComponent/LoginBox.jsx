import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "../../styles/ReduxCounter.module.css";

const mapleAudio = new Audio("/assets/sounds/maple_bgm.mp3");

const LoginBox = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const input = e.target;
    setValues({
      ...values,
      [input.name]: input.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName || values.lastName) {
      dispatch({
        type: "LOGIN",
        payload: { name: values },
      });
      setValues({
        firstName: "",
        lastName: "",
      });
      mapleAudio.play();
    }
  };
  return (
    <div id={style.naming_box}>
      <h2>이름을 입력하세요</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">성</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">이름</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
          />
        </div>
        <button type="submit" className={style.submit_button}>
          제출
        </button>
      </form>
    </div>
  );
};

export default LoginBox;
