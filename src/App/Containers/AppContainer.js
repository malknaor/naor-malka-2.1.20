import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../App';
import appDataProvider from '../../appDataprovider';
import {
    changeTheme,
    changeMetric,
    setLocationForecast
} from '../../actions';

const AppContainer = props => {
    const {
        isDarkMode,
        isMetric,
        changeTheme,
        changeMetric
    } = props;

    const onUnitsChange = async () => {
        try {
            const {
                isMetric,
                currentLocation,
                setLocationForecast
            } = props;

            const locationForecast = await appDataProvider.getLocationForecast(currentLocation.Key, !isMetric);

            setLocationForecast(locationForecast);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <App
            isDarkMode={isDarkMode}
            isMetric={isMetric}
            changeTheme={changeTheme}
            changeMetric={() => {
                changeMetric();
                onUnitsChange();
            }}
            onUnitsChange={onUnitsChange}
        />
    );
};

const mapStateToProps = ({ settings, forecast }) => {
    return {
        isDarkMode: settings.isDarkMode,
        isMetric: settings.isMetric,
        currentLocation: forecast.currentLocation
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeTheme,
        changeMetric,
        setLocationForecast
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
