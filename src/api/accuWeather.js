import axios from 'axios';

export const accuWeather = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

export const accuWeatherRoutes = Object.freeze({
    AUTOCOMPLETE: '/locations/v1/cities/autocomplete', // params: apikey, q
    LOCATION_KEY: '/locations/v1/cities/search', // params: apikey, q
    GEOPOSITION_SEARCH: '/locations/v1/cities/geoposition/search', // params: apikey, q=lat,lon
    CURRENT_WEATHER: '/forecasts/v1/hourly/1hour/', // params: locationKey, metric(bool)
    LOCATION_FORECAST: '/forecasts/v1/daily/5day/', // params: locationKey, metric(bool)
});