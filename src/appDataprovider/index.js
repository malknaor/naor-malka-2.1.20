import { accuWeather, accuWeatherRoutes } from '../api/accuWeather';

const appDataPriveder = (() => {
    const getGeoposition = (onSuccess, onError) => {
        window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };

    const getSearchSuggestions = searchValue => {
        const { AUTOCOMPLETE } = accuWeatherRoutes;
        return accuWeather.get(`${AUTOCOMPLETE}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                q: searchValue
            }
        }).catch(error => { throw error });
    };

    const getLocation = async (location) => {
        const { LOCATION_KEY } = accuWeatherRoutes;
        const { data } = await accuWeather.get(`${LOCATION_KEY}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                q: location
            }
        }).catch(error => { throw error });

        return data[0];
    };

    const getLocationGeoposition = async (latitude, longitude) => {
        const { GEOPOSITION_SEARCH } = accuWeatherRoutes;
        const { data } = await accuWeather.get(GEOPOSITION_SEARCH, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                q: `${latitude},${longitude}`
            }
        }).catch(error => { throw error });

        return data;
    };

    const getCurrentWeather = async (locationKey, isMetric) => {
        const { CURRENT_WEATHER } = accuWeatherRoutes;
        const { data } = await accuWeather.get(`${CURRENT_WEATHER}${locationKey}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                metric: isMetric
            }
        }).catch(error => { throw error });

        return data[0];
    };

    const getLocationForecast = async (locationKey, isMetric) => {
        const { LOCATION_FORECAST } = accuWeatherRoutes;
        const { data } = await accuWeather.get(`${LOCATION_FORECAST}${locationKey}`, {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                metric: isMetric
            }
        }).catch(error => { throw error });

        return data;
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