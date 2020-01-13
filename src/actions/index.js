import * as actionTypes from './actionTypes';

/***** SETTINGS ACTIONS ******/
export const changeTheme = () => {
    return { type: actionTypes.CHANGE_THEME };
};

export const changeMetric = () => {
    return { type: actionTypes.CHANGE_UNITS };
};

/***** SEARCH FETCHING ******/
export const setSuggestions = suggestions => {
    return { type: actionTypes.SET_SEARCH_SUGGESTIONS, payload: suggestions };
};

export const setCurrentSearch = searchValue => {
    return { type: actionTypes.SET_CURRENT_SEARCH, payload: searchValue };
};

/***** WEATHER ACTIONS ******/
export const setCurrentLocation = currentLocation => {
    return { type: actionTypes.SET_CURRENT_LOCATION, payload: currentLocation };
};

export const setCurrentWeather = currentWeather => {
    return { type: actionTypes.SET_CURRENT_WEATHER, payload: currentWeather };
};

export const setLocationForecast = locationForecast => {
    return { type: actionTypes.SET_LOCATION_FORECAST, payload: locationForecast };
};

/***** FAVORITES ACTIONS ******/
export const setFavorites = newFavorites => {
    return { type: actionTypes.SET_FAVORITES, payload: newFavorites };
};

export const addToFavorites = location => {
    return { type: actionTypes.ADD_TO_FAVROITES, payload: location };
};

export const removeFromFavorites = location => {
    return { type: actionTypes.REMOVE_FROM_FAVROITES, payload: location };
};
