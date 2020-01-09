import { 
    SET_CURRENT_LOCATION,
    SET_CURRENT_WEATHER, 
    SET_LOCATION_FORECAST 
} from '../actions/actionTypes';

const forecastInitState = {
    currentLocation: null,
    currentWeather: null,
    locationForecast: null
};

const forecastReducer = (state = forecastInitState, action) => {
    switch (action.type) {
        case SET_CURRENT_LOCATION:
            return { ...state, currentLocation: action.payload };
        case SET_CURRENT_WEATHER:
            return { ...state, currentWeather: action.payload };
        case SET_LOCATION_FORECAST:
            return { ...state, locationForecast: action.payload };
        default:
            return state;
    }
};

export default forecastReducer;