import { SEARCH_AUTOCOMPLETE, SET_CURRENT_LOCATION, FETCH_CURRENT_WEATHER, FETCH_FORECAST_5D } from '../actions/actionTypes';

const forecastInitState = {
    autoComplete: [],
    currentLocation: null,
    currentWeather: null,
    forecast: null
};

const forecastReducer = (state = forecastInitState, action) => {
    switch (action.type) {
        case SEARCH_AUTOCOMPLETE:
            return { ...state, autoComplete: action.payload };
        case SET_CURRENT_LOCATION:
            return { ...state, currentLocation: action.payload };
        case FETCH_CURRENT_WEATHER:
            return { ...state, currentWeather: action.payload };
        case FETCH_FORECAST_5D:
            return { ...state, forecast: action.payload };
        default:
            return state;
    }
};

export default forecastReducer;