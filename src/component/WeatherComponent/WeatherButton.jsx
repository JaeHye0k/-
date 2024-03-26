import React from "react";
import { Button } from "react-bootstrap";
import style from "../../styles/Weather.module.css";

const WeatherButton = ({ cities, setCity, btnX, selectedCity }) => {
  return (
    <div
      id={style.weather_buttons}
      style={{ transform: `translateX(${btnX}vw)` }}
    >
      {cities.map((city, idx) => (
        <Button
          className={`${style.weather_button} ${
            city === selectedCity && style.selected_button
          }`}
          variant="warning"
          onClick={() => setCity(city)}
          key={idx}
        >
          {city === "" ? "Current Location" : city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
