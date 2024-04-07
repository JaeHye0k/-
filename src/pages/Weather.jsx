import React from "react";
import { useEffect, useState } from "react";
import WeatherBox from "../component/WeatherComponent/WeatherBox";
import WeatherButton from "../component/WeatherComponent/WeatherButton";
import IndexButton from "./IndexPage/component/IndexButton/IndexButton";
import { Spinner } from "react-bootstrap";
import style from "../styles/Weather.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWeatherByCityName,
  fetchWeatherByCurrentLocation,
} from "../redux/Weather/reducers/weatherSlice";
import { weatherActions } from "../redux/Weather/reducers/weatherSlice";

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
// 2. 날씨 정보에는 도시 이름, 섭씨 온도, 화씨 온도, 날씨 상태
// 3. 5개의 버튼이 있다. (1개는 현재 위치, 나머지는 다른 나라, 도시 이름)
// 4. 버튼을 누를 때마다 해당 위치의 날씨 정보가 화면에 출력된다.
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다. (얘만 좀 다름)
// 6. 날씨 정보 데이터를 가져오는 동안 로딩 스피너가 돈다.
export const backgroundWeather = [
  "broken_clouds",
  "clear_sky",
  "overcast_clouds",
  "rain",
  "mist_fog",
  "snow",
];

export const cities = [
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

const Weather = () => {
  const [btnX, setBtnX] = useState(20);
  const city = useSelector((state) => state.weather.city);
  const weatherDescription = useSelector(
    (state) => state.weather.weatherDescription
  );
  const isLoading = useSelector((state) => state.weather.isLoading);
  const dispatch = useDispatch();

  // 현재 위치 구하기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      dispatch(weatherActions.setCurrentLocation({ lat, lon }));
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  // 현재 위치 날씨 구하기
  const getWeatherByCurrentLocation = (lat, lon) => {
    dispatch(fetchWeatherByCurrentLocation({ lat, lon }));
  };
  // 도시 날씨 구하기
  const getWeatherByCityName = (city) => {
    dispatch(fetchWeatherByCityName(city));
  };

  const clickNextButton = () => {
    setBtnX(btnX - 20);
  };
  const clickPreButton = () => {
    setBtnX(btnX + 20);
  };

  useEffect(() => {
    if (!city) getCurrentLocation();
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
            {isLoading ? (
              <Spinner animation="border" className={style.bs_spinner} />
            ) : (
              <WeatherBox />
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

              <WeatherButton btnX={btnX} selectedCity={city} />
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
