const INITIALE_STATE = {
  forecast: {},
  loader: false,
  input: '',
};

const forecastReducer = (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case "UPDATE_FORECAST":
      return {
        ...state,
        forecast: action.forecast,
      };
    case "TOGGLE_LOADER":
      return {
        ...state,
        loader: action.status,
      };
    case "UPDATE_INPUT":
      return {
        ...state,
        input: action.input,
      };
      case 'CLEAR_INPUT':
        return {
          ...state,
          input: action.input,
        };
    default:
      return state;
  }
};

export default forecastReducer;
