import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBar from '../common/SearchBar/SearchBar';
import appDataProvider from '../../appDataprovider';
import {
    setCurrentSearch,
    setCurrentLocation,
    setCurrentWeather,
    setLocationForecast
} from '../../actions';

class SearchBarContainer extends Component {
    state = { haseError: false, errorDetailes: null };

    onSearchError = error => {
        this.setState({ haseError: true, errorDetailes: error });
    }

    onSearchSubmit = async locationName => {
        const {
            isMetric,
            setCurrentLocation,
            setCurrentWeather,
            setLocationForecast
        } = this.props;

        const location = await appDataProvider.getLocation(locationName)
            .catch(this.onSearchError);

        const currentweather = await appDataProvider.getCurrentWeather(location.Key, isMetric)
            .catch(this.onSearchError);

        const locationForecast = await appDataProvider.getLocationForecast(location.Key, isMetric)
            .catch(this.onSearchError);

        setCurrentLocation(location);
        setCurrentWeather(currentweather);
        setLocationForecast(locationForecast);
    }

    render() {
        const { haseError, errorDetailes } = this.state;

        if (haseError) {
            throw errorDetailes;
        }

        const { currentSearch, setCurrentSearch } = this.props;

        return (
            <SearchBar
                onSearchError={this.onSearchError}
                currentSearch={currentSearch}
                onSearchSubmit={this.onSearchSubmit}
                onSearchChange={setCurrentSearch}
            />
        );
    }
};

const mapStateToProps = ({ settings, search }) => {
    return {
        isMetric: settings.isMetric,
        currentSearch: search.currentSearch,
        suggestions: search.suggestions
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setCurrentSearch,
        setCurrentLocation,
        setCurrentWeather,
        setLocationForecast
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
