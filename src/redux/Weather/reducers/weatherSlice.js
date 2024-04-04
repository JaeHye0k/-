import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { backgroundWeather } from "../../../pages/Weather";
import { API_KEY } from "../../../pages/Weather";

const initialState = {
  isLoading: false,
  city: "",
  weather: null,
  weatherDescription: "",
  error: null,
  currentLocation: {},
};

export const fetchWeatherByCityName = createAsyncThunk(
  "weather/fetcCityName",
  async (city, thunkAPI) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&&units=metric`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWeatherByCurrentLocation = createAsyncThunk(
  "weather/fetchCurrentLocation",
  async ({ lat, lon }, thunkAPI) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&&units=metric`;
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCurrentLocation: (state, action) => {
      const { lat, lon } = action.payload;
      state.currentLocation = { lat, lon };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCityName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeatherByCityName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weather = action.payload;
        const description = action.payload.weather[0].description
          .split(" ")
          .join("_");
        let partOfName = description.split("_").at(-1);
        // 완전히 일치하는 날씨 배경 이미지가 있다면 해당 날씨 배경으로 변경
        if (backgroundWeather.includes(description)) {
          state.weatherDescription = description;
        }
        // 완전히 일치하는 게 없으면 비슷한 날씨로라도 변경.
        else {
          partOfName = backgroundWeather.find((e) => e.includes(partOfName));
          state.weatherDescription = partOfName;
        }
      })
      .addCase(fetchWeatherByCityName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchWeatherByCurrentLocation.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchWeatherByCurrentLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weather = action.payload;
        const description = action.payload.weather[0].description
          .split(" ")
          .join("_");
        let partOfName = description.split("_").at(-1);
        // 완전히 일치하는 날씨 배경 이미지가 있다면 해당 날씨 배경으로 변경
        if (backgroundWeather.includes(description)) {
          state.weatherDescription = description;
        }
        // 완전히 일치하는 게 없으면 비슷한 날씨로라도 변경.
        else {
          partOfName = backgroundWeather.find((e) => e.includes(partOfName));
          state.weatherDescription = partOfName;
        }
      })
      .addCase(fetchWeatherByCurrentLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// function weatherReducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case "SET_CITY":
//       return { ...state, city: payload.city };
//     case "GET_WEATHER":
//       return {
//         ...state,
//         weather: payload.data,
//         weatherDescription: payload.description,
//       };
//     default:
//       return { ...state };
//   }
// }

export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;
