import { accuWeather, accuWeatherRoutes } from '../api/accuWeather';

const appDataPriveder = (() => {
    const getGeoposition = (onSuccess, onError) => {
        if (!window.navigator.geolocation) {
            throw new Error(`
                Geolocation is disabled. 
                loading default location
            `);
        }

        window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };

    const getSearchSuggestions = searchValue => {
        const { AUTOCOMPLETE } = accuWeatherRoutes;
        return accuWeather.get(`${AUTOCOMPLETE}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                q: searchValue
            }
        });
    };

    const getLocation = async (location) => {
        const { LOCATION_KEY } = accuWeatherRoutes;
        const response = await accuWeather.get(`${LOCATION_KEY}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                q: location
            }
        }).then(res => res.data[0]);

        return response;
    };

    const getLocationGeoposition = async (latitude, longitude) => {
        const { GEOPOSITION_SEARCH } = accuWeatherRoutes;
        const response = await accuWeather.get(GEOPOSITION_SEARCH, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                q: `${latitude},${longitude}`
            }
        }).then(res => res.data);

        return response;
    };

    const getCurrentWeather = async (locationKey, isMetric) => {
        const { CURRENT_WEATHER } = accuWeatherRoutes;
        const response = await accuWeather.get(`${CURRENT_WEATHER}${locationKey}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                metric: isMetric
            }
        }).then(res => res.data[0]);

        return response;
    };

    const getLocationForecast = async (locationKey, isMetric) => {
        const { LOCATION_FORECAST } = accuWeatherRoutes;
        const response = await accuWeather.get(`${LOCATION_FORECAST}${locationKey}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                metric: isMetric
            }
        }).then(res => res.data);

        return response;
    };

    return {
        getGeoposition,
        getSearchSuggestions,
        getLocation,
        getLocationGeoposition,
        getCurrentWeather,
        getLocationForecast
    }
})();

export default appDataPriveder;