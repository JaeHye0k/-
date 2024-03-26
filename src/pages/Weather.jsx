import React from "react";
import { useEffect, useState } from "react";
import WeatherBox from "../component/WeatherComponent/WeatherBox";
import WeatherButton from "../component/WeatherComponent/WeatherButton";
import IndexButton from "../component/IndexComponent/IndexButton";
import { Spinner } from "react-bootstrap";
import style from "../styles/Weather.module.css";

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
// 2. 날씨 정보에는 도시 이름, 섭씨 온도, 화씨 온도, 날씨 상태
// 3. 5개의 버튼이 있다. (1개는 현재 위치, 나머지는 다른 나라, 도시 이름)
// 4. 버튼을 누를 때마다 해당 위치의 날씨 정보가 화면에 출력된다.
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다. (얘만 좀 다름)
// 6. 날씨 정보 데이터를 가져오는 동안 로딩 스피너가 돈다.
const backgroundWeather = [
  "broken_clouds",
  "clear_sky",
  "overcast_clouds",
  "rain",
  "mist",
  "snow",
];

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [btnX, setBtnX] = useState(20);
  const [loading, setLoading] = useState(true);
  const [apiError, setAPIError] = useState("");
  const [weatherDescription, setWeatherDescription] = useState(null);

  const cities = [
    "",
    "Osaka",
    "Tokyo",
    "Seoul",
    "Sapporo",
    "Los Angeles",
    "Las Vegas",
    "Paris",
    "New York",
    "Cebu",
  ];
  const API_KEY = "37145ca12efe07b866fade0a0ab89107";
  // 현재 위치 구하기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  // 현재 위치 날씨 구하기
  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setWeather(data);
      formatDescription(data.weather[0].description);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };
  // 도시 날씨 구하기
  const getWeatherByCityName = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setWeather(data);
      formatDescription(data.weather[0].description);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };
  const formatDescription = (description) => {
    let formatted = description.split(" ");
    let fullName = formatted.join("_");
    let partOfName = formatted.at(-1);
    // 완전히 일치하는 날씨 배경 이미지가 있다면 해당 날씨 배경으로 변경
    if (backgroundWeather.includes(fullName)) {
      setWeatherDescription(fullName);
    }
    // 완전히 일치하는 게 없으면 비슷한 날씨로라도 변경.
    else {
      partOfName = backgroundWeather.find((e) => e.includes(partOfName));
      setWeatherDescription(partOfName);
    }
  };

  const clickNextButton = () => {
    setBtnX(btnX - 20);
  };
  const clickPreButton = () => {
    setBtnX(btnX + 20);
  };

  useEffect(() => {
    if (city === "") getCurrentLocation();
    else getWeatherByCityName(city);
  }, [city]);

  return (
    <div className={style.weather_container}>
      <IndexButton />
      <video
        src={
          process.env.PUBLIC_URL + `/assets/videos/${weatherDescription}.mov`
        }
        className={style.video_background}
        autoPlay={true}
        loop={true}
        muted={true}
      ></video>
      <div className={style.weather_screen}>
        <div className={style.weather_contents}>
          <div className={style.weather_box}>
            {loading ? (
              <Spinner animation="border" className={style.bs_spinner} />
            ) : (
              <WeatherBox weather={weather} />
            )}
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

              <WeatherButton
                cities={cities}
                setCity={setCity}
                btnX={btnX}
                selectedCity={city}
              />
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
