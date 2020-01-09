import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBar from '../common/SearchBar';
import appDataProvider from '../../appDataprovider';
import {
    setCurrentSearch,
    setCurrentLocation,
    setCurrentWeather,
    setLocationForecast
} from '../../actions';

const SearchBarContainer = props => {
    const { currentSearch, setCurrentSearch } = props;

    const onSearchSubmit = async locationName => {
        try {
            const { 
                isMetric, 
                setCurrentLocation, 
                setCurrentWeather, 
                setLocationForecast 
            } = props;

            const location = await appDataProvider.getLocation(locationName);
            const currentweather = await appDataProvider.getCurrentWeather(location.Key, isMetric);
            const locationForecast = await appDataProvider.getLocationForecast(location.Key, isMetric);
            
            setCurrentLocation(location);
            setCurrentWeather(currentweather);
            setLocationForecast(locationForecast);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <SearchBar 
            currentSearch={currentSearch} 
            onSearchSubmit={onSearchSubmit} 
            onSearchChange={setCurrentSearch} 
        />
    );
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
