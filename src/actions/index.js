import * as actionTypes from './actionTypes';

export const changeTheme = () => {
    return { type: actionTypes.CHANGE_THEME };
};

export const changeMetric = () => {
    return { type: actionTypes.CHANGE_UNITS };
};

export const setSuggestions = suggestions => {
    return { type: actionTypes.SET_SEARCH_SUGGESTIONS, payload: suggestions };
};

export const setCurrentSearch = searchValue => {
    return { type: actionTypes.SET_CURRENT_SEARCH, payload: searchValue };
};

export const setCurrentLocation = currentLocation => {
    return { type: actionTypes.SET_CURRENT_LOCATION, payload: currentLocation };
};

export const setCurrentWeather = currentWeather => {
    return { type: actionTypes.SET_CURRENT_WEATHER, payload: currentWeather };
};

export const setLocationForecast = locationForecast => {
        return { type: actionTypes.SET_LOCATION_FORECAST, payload: locationForecast };
};
