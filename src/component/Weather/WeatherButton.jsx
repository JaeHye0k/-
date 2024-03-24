import React from "react";
import { Button } from "react-bootstrap";
import style from "../../styles/Weather.module.css";

const WeatherButton = ({ cities, setCity, btnX }) => {
  return (
    <div
      className={style.weather_buttons}
      style={{ transform: `translateX(${btnX}vw)` }}
    >
      {cities.map((item, idx) => (
        <Button variant="warning" onClick={() => setCity(item)} key={idx}>
          {item === "" ? "Current Location" : item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
