import * as actionTypes from './actionTypes';
import { accuWeather, accuWeatherRoutes } from '../api/accuWeather';

export const changeTheme = () => {
    return { type: actionTypes.CHANGE_THEME };
};

export const changeMetric = () => {
    return { type: actionTypes.CHANGE_UNITS };
};

export const searchAutoComplete = searchValue => async dispatch => {
    try {
        const { AUTOCOMPLETE } = accuWeatherRoutes;
        const response = await accuWeather.get(`${AUTOCOMPLETE}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                q: searchValue
            }
        });

        console.log("TCL: searchAutoComplete -> response", response);
        dispatch({ type: actionTypes.SEARCH_AUTOCOMPLETE, payload: response });
    } catch (error) {
        console.error("TCL: searchAutoComplete -> error", error);
    }
};

const getLocationKey = async location => {
    try {
        const { LOCATION_KEY } = accuWeatherRoutes;
        const { data } = await accuWeather.get(`${LOCATION_KEY}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                q: location
            }
        });

        return data;
    } catch (error) {
        console.error("TCL: getLocationKey -> error", error);
    }
};

export const getLocationKeyGeoposition = async (latitude, longitude) => {
    try {
        const { GEOPOSITION_SEARCH } = accuWeatherRoutes;
        const { data } = await accuWeather.get(GEOPOSITION_SEARCH, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                q: `${latitude},${longitude}`
            }
        });

        return data;
    } catch (error) {
        console.error("TCL: getDefaultLocation -> error", error);
    }
};

export const getCurrentWeather = (city, isMetric = false) => async dispatch => {
    try {
        const { CURRENT_WEATHER } = accuWeatherRoutes;
        let cityKey;

        if (parseInt(city)) {
            cityKey = city;
        } else {
            cityKey = await getLocationKey(city).then(response => response.Key);
        }

        const { data } = await accuWeather.get(`${CURRENT_WEATHER}${cityKey}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                metric: isMetric
            }
        });

        dispatch({ type: actionTypes.FETCH_CURRENT_WEATHER, payload: data });
    } catch (error) {
        console.error("TCL: getLocationKey -> error", error);
    }
};

export const getLocationForecast = (city, isMetric = false) => async dispatch => {
    try {
        const { LOCATION_FORECAST } = accuWeatherRoutes;
        let cityKey;

        if (parseInt(city)) {
            cityKey = city;
        } else {
            cityKey = await getLocationKey(city).then(response => response.Key);
        }

        const { data } = await accuWeather.get(`${LOCATION_FORECAST}${cityKey}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                metric: isMetric
            }
        });

        dispatch({ type: actionTypes.FETCH_FORECAST_5D, payload: data });
    } catch (error) {
        console.error("TCL: getLocationForecast -> error", error);
    }
};
