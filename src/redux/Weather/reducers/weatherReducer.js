const initialState = {
  isLoading: false,
  city: "",
  weather: null,
  weatherDescription: "",
};

function weatherReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_CITY":
      return { ...state, city: payload.city };
    case "GET_WEATHER":
      return {
        ...state,
        weather: payload.data,
        weatherDescription: payload.description,
      };
    default:
      return { ...state };
  }
}

export default weatherReducer;
