import { getDefaultLocation } from '../actions/index';

const geoPosition = (window => {
    let currentGeoLocation, geoError;

    const onSuccess = position => {
        geoError = null;
        currentGeoLocation = position;
        
        getDefaultLocation();
    };

    const onError = error => {
        currentGeoLocation = null;
        geoError = error;

        console.error("TCL: geoLocation -> error", error);
    };

    window.navigator.geolocation.getCurrentPosition(onSuccess, onError, []);

    const result = () => {
        if (currentGeoLocation && !geoError) {
            return currentGeoLocation;
        } 

        return null;
    };

    return result;
})(window);

export default geoPosition;