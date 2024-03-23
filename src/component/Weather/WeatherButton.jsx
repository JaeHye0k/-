import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, btnX }) => {
  return (
    <div
      className="weather-buttons"
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
