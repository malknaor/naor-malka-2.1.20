import { accuWeather, accuWeatherRoutes } from '../api/accuWeather';

const appDataPriveder = (() => {
    const createError = ({ response }) => {
        return {
            code: response.status,
            statusText: response.statusText,
            message: response.data.Message
        };
    };

    const getGeoposition = (onSuccess, onError) => {
        window.navigator.geolocation && window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };

    const getSearchSuggestions = async searchValue => {
        const { AUTOCOMPLETE } = accuWeatherRoutes;
        const response = await accuWeather.get(`${AUTOCOMPLETE}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                q: searchValue
            }
        })
            .then(res => res.data)
            .catch(err => {
                throw createError(err);
            });

        return response;
    };

    const getLocation = async (location) => {
        const { LOCATION_KEY } = accuWeatherRoutes;
        const response = await accuWeather.get(`${LOCATION_KEY}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                q: location
            }
        })
            .then(res => res.data[0])
            .catch(err => {
                throw createError(err);
            });

        return response;
    };

    const getLocationGeoposition = async (latitude, longitude) => {
        const { GEOPOSITION_SEARCH } = accuWeatherRoutes;
        const response = await accuWeather.get(GEOPOSITION_SEARCH, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                q: `${latitude},${longitude}`
            }
        })
            .then(res => res.data)
            .catch(err => {
                throw createError(err);
            });

        return response;
    };

    const getCurrentWeather = async (locationKey, isMetric) => {
        const { CURRENT_WEATHER } = accuWeatherRoutes;
        const response = await accuWeather.get(`${CURRENT_WEATHER}${locationKey}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                metric: isMetric
            }
        })
            .then(res => res.data[0])
            .catch(err => {
                throw createError(err);
            });

        return response;
    };

    const getLocationForecast = async (locationKey, isMetric) => {
        const { LOCATION_FORECAST } = accuWeatherRoutes;
        const response = await accuWeather.get(`${LOCATION_FORECAST}${locationKey}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                metric: isMetric
            }
        })
            .then(res => res.data)
            .catch(err => {
                throw createError(err);
            });

        return response;
    };

    return {
        createError,
        getGeoposition,
        getSearchSuggestions,
        getLocation,
        getLocationGeoposition,
        getCurrentWeather,
        getLocationForecast
    }
})();

export default appDataPriveder;