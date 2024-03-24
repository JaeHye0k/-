import React from "react";
import { useEffect, useState, useRef } from "react";
import WeatherBox from "../component/Weather/WeatherBox";
import WeatherButton from "../component/Weather/WeatherButton";
import style from "../styles/Weather.module.css";
import IndexButton from "../component/IndexButton";

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
// 2. 날씨 정보에는 도시 이름, 섭씨 온도, 화씨 온도, 날씨 상태
// 3. 5개의 버튼이 있다. (1개는 현재 위치, 나머지는 다른 나라, 도시 이름)
// 4. 버튼을 누를 때마다 해당 위치의 날씨 정보가 화면에 출력된다.
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다. (얘만 좀 다름)
// 6. 날씨 정보 데이터를 가져오는 동안 로딩 스피너가 돈다.

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [btnX, setBtnX] = useState(20);
  // const [curCarousel, setCurCarousel] = useState(1);
  // const [carouselTransition, setCarouselTransition] = useState(
  //   "transform 500ms ease-in-out"
  // );

  const cities = [
    "",
    "Osaka",
    "Tokyo",
    "Seoul",
    "Sapporo",
    "Los Angeles",
    "Las Vegas",
  ];
  const apiKey = "37145ca12efe07b866fade0a0ab89107";

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };

  const getWeatherByCityName = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };
  // const makeNewCarouselItem = (arr) => {
  //   const itemStart = arr[0];
  //   const itemEnd = arr[arr.length - 1];
  //   const newCarousel = [itemEnd, ...arr, itemStart];
  //   return newCarousel;
  // };
  // const MyComponent = () => {
  //   const ref = useRef(null);
  //   useEffect(() => {
  //     console.log(ref.current);
  //   }, [ref.current]);
  //   return <div ref={ref}>Hello</div>;
  // };
  const clickNextButton = () => {
    setBtnX(btnX - 20);
  };
  const clickPreButton = () => {
    setBtnX(btnX + 20);
  };

  useEffect(() => {
    if (city === "") getCurrentLocation();
    else getWeatherByCityName(city);
    console.log(city);
  }, [city]);

  return (
    <div className={style.weather_container}>
      <IndexButton />
      <div className={style.weather_screen}>
        <div className={style.weather_contents}>
          <div className={style.weather_box}>
            <WeatherBox weather={weather} />
          </div>
          <div className={style.carousel_button}>
            <div className={style.weather_button_container}>
              {btnX < 20 && (
                <button
                  className={style.pre_button}
                  onClick={() => clickPreButton()}
                >
                  &lt;
                </button>
              )}

              <WeatherButton cities={cities} setCity={setCity} btnX={btnX} />
              <button
                className={style.next_button}
                onClick={() => clickNextButton()}
              >
                {" "}
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
