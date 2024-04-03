import { backgroundWeather } from "../../../pages/Weather";

// action creator
function getWeatherByCurrentLocation(lat, lon, API_KEY) {
  return async (dispatch, getState) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const description = data.weather[0].description.split(" ").join("_");
    let partOfName = description.split("_").at(-1);
    // 완전히 일치하는 날씨 배경 이미지가 있다면 해당 날씨 배경으로 변경
    if (backgroundWeather.includes(description)) {
      dispatch({ type: "GET_WEATHER", payload: { data, description } });
    }
    // 완전히 일치하는 게 없으면 비슷한 날씨로라도 변경.
    else {
      partOfName = backgroundWeather.find((e) => e.includes(partOfName));
      dispatch({
        type: "GET_WEATHER",
        payload: { data, description: partOfName },
      });
    }
  };
}

function getWeatherByCityName(city, API_KEY) {
  return async (dispatch, getState) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const description = data.weather[0].description.split(" ").join("_");
    let partOfName = description.split("_").at(-1);
    // 완전히 일치하는 날씨 배경 이미지가 있다면 해당 날씨 배경으로 변경
    if (backgroundWeather.includes(description)) {
      dispatch({ type: "GET_WEATHER", payload: { data, description } });
    }
    // 완전히 일치하는 게 없으면 비슷한 날씨로라도 변경.
    else {
      partOfName = backgroundWeather.find((e) => e.includes(partOfName));
      dispatch({
        type: "GET_WEATHER",
        payload: { data, description: partOfName },
      });
    }
  };
}
export const weatherActions = {
  getWeatherByCurrentLocation,
  getWeatherByCityName,
};
