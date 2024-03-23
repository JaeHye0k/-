import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, getCurrentLocation }) => {
  const clickCurrentLocation = () => {
    getCurrentLocation();
    setCity("");
  };
  return (
    <div>
      <Button variant="warning" onClick={() => clickCurrentLocation()}>
        Current Location
      </Button>
      {cities.map((item, idx) => (
        <Button variant="warning" onClick={() => setCity(item)} key={idx}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
