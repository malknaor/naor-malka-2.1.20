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
    state = { hasError: false, errorDetails: null }

    onLocationReady = async location => {
        const {
            isMetric,
            setCurrentLocation,
            setCurrentWeather,
            setLocationForecast
        } = this.props;

        const currentWeather = await appDataProvider.getCurrentWeather(location.Key, isMetric)
            .catch(err => {
                this.setState({ hasError: true, errorDetails: err.response.data })
            });

        if (this.state.hasError) {
            return;
        }

        const locationForecast = await appDataProvider.getLocationForecast(location.Key, isMetric)
            .catch(err => {
                this.setState({ hasError: true, errorDetails: err.response.data })
            });

        if (!this.state.hasError) {
            setCurrentLocation(location);
            setCurrentWeather(currentWeather);
            setLocationForecast(locationForecast);
        }
    }

    onPositionReady = async ({ coords }) => {
        const { latitude, longitude } = coords;
        const location = await appDataProvider.getLocationGeoposition(latitude, longitude)
            .catch(err => {
                this.setState({ hasError: true, errorDetails: err.response.data })
            });

        if (!this.state.hasError) {
            this.onLocationReady(location);
        }
    }

    onPositionError = async () => {
        const defaultCity = 'tel aviv';
        const location = await appDataProvider.getLocation(defaultCity)
            .catch(err => {
                this.setState({ hasError: true, errorDetails: err.response.data })
            });

        if (!this.state.hasError) {
            this.onLocationReady(location);
        }
    }

    componentDidMount() {
        if (!this.props.currentLocation) {
            appDataProvider.getGeoposition(this.onPositionReady, this.onPositionError);
        }
    }

    render() {
        if (this.state.hasError) {
            throw this.state.errorDetails;
        }

        return (
            <Home />
        );
    }
}

const mapStateToProps = ({ settings, forecast }) => {
    return {
        isMetric: settings.isMetric,
        currentLocation: forecast.currentLocation
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
