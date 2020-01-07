import { SEARCH_AUTOCOMPLETE, FETCH_CURRENT_WEATHER, FETCH_FORECAST_5D } from '../actions/actionTypes';

const forecastInitState = {
    autoComplete: [],
    currentLocationWeather: null,
    locationForecast: null
};

const forecastReducer = (state = forecastInitState, action) => {
    switch (action.type) {
        case SEARCH_AUTOCOMPLETE:
            return { ...state, autoComplete: action.payload };
        case FETCH_CURRENT_WEATHER:
            return { ...state, currentLocationWeather: action.payload };
        case FETCH_FORECAST_5D:
            return { ...state, locationForecast: action.payload };
        default:
            return state;
    }
};

export default forecastReducer;