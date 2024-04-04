import React from "react";
import { useSelector } from "react-redux";

const WeatherBox = () => {
  const weather = useSelector((state) => state.weather.weather);
  return (
    <div>
      <div>{weather?.name}</div>
      <div>
        {weather?.main.temp} °C / {Math.floor(weather?.main.temp * 1.8 + 32)} °F
      </div>
      <div>{weather?.weather[0].description}</div>
    </div>
  );
};

export default WeatherBox;
