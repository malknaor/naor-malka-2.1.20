import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LocationDiplayCard from '../common/LocationDiplayCard/LocationDiplayCard';
import LocalStorageService from '../../services/localStorageService';
import { addToFavorites, removeFromFavorites } from '../../actions';

const LocationDisplayCardContainer = props => {
    const {
        currentLocation,
        currentWeather,
        locationForecast
    } = props;

    const addToFavorites = locationToAdd => {
        const { addToFavorites } = props;

        LocalStorageService.addToFavorites(locationToAdd);
        addToFavorites(locationToAdd);
    }
    
    const removeFromFavorites = () => {
        const { removeFromFavorites } = props;

        LocalStorageService.removeFromFavorites(currentLocation.Key);
        removeFromFavorites(currentLocation);
    }

    return (
        <LocationDiplayCard
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            currentLocation={currentLocation}
            currentWeather={currentWeather}
            locationForecast={locationForecast}
        />
    );
};

const mapStateToProps = ({ forecast, favorites }) => {
    return {
        currentLocation: forecast.currentLocation,
        currentWeather: forecast.currentWeather,
        locationForecast: forecast.locationForecast,
        favorites: favorites.favorites
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addToFavorites,
        removeFromFavorites
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationDisplayCardContainer);
