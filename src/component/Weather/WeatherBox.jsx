import React from "react";

const WeatherBox = ({ weather }) => {
  console.log(weather && weather);
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
