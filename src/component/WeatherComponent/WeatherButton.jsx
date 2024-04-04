import React from "react";
import { Button } from "react-bootstrap";
import style from "../../styles/Weather.module.css";
import { useDispatch } from "react-redux";
import { cities } from "../../pages/Weather";
import { weatherActions } from "../../redux/Weather/reducers/weatherSlice";

const WeatherButton = ({ btnX, selectedCity }) => {
  const dispatch = useDispatch();

  const handleClick = (city) => {
    if (city) {
      dispatch(weatherActions.setCity(city));
    } else {
      dispatch(weatherActions.setCity(""));
    }
  };
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
          onClick={() => handleClick(city)}
          key={idx}
        >
          {city === "" ? "Current Location" : city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
