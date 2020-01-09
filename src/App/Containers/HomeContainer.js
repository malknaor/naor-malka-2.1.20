import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../Home/Home';
import appDataProvider from '../../appDataprovider';
import {
    setCurrentLocation,
    setCurrentWeather,
    setLocationForecast
} from '../../actions';

class HomeContainer extends Component {
    onLocationReady = async location => {
        try {
            const { 
                isMetric, 
                setCurrentLocation, 
                setCurrentWeather, 
                setLocationForecast 
            } = this.props;

            const currentweather = await appDataProvider.getCurrentWeather(location.Key, isMetric);
            const locationForecast = await appDataProvider.getLocationForecast(location.Key, isMetric);
            
            setCurrentLocation(location);
            setCurrentWeather(currentweather);
            setLocationForecast(locationForecast);
        } catch (error) {
            alert(error);
        }
    }

    onPositionReady = async ({ coords }) => {
        try {
            const { latitude, longitude } = coords;
            const location = await appDataProvider.getLocationGeoposition(latitude, longitude);

            this.onLocationReady(location);
        } catch (error) {
            alert(error);
        }
    }

    onPositionError = async () => {
        try {
            const defaultCity = 'tel aviv';
            const location = await appDataProvider.getLocation(defaultCity);

            this.onLocationReady(location);
        } catch (error) {
            alert(error);
        }
    }

    componentDidMount() {
        // appDataProvider.getGeoposition(this.onPositionReady, this.onPositionReady);
    }

    render() {
        const {
            currentLocation,
            currentWeather,
            locationForecast
        } = this.props;

        return (
            <Home
                currentLocation={currentLocation}
                currentWeather={currentWeather}
                locationForecast={locationForecast}
            />
        );
    }
}

const mapStateToProps = ({ settings, forecast }) => {


    return {
        isMetric: settings.isMetric,
        currentLocation: forecast.currentLocation,
        currentWeather: forecast.currentWeather,
        locationForecast: forecast.locationForecast,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setCurrentLocation,
        setCurrentWeather,
        setLocationForecast
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);