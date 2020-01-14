import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../App';
import appDataProvider from '../../appDataprovider';
import {
    changeTheme,
    changeMetric,
    setLocationForecast
} from '../../actions';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const AppContainer = props => {
    const [appError, setAppError] = useState({ hasError: false, errorDetails: null });

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

            if (currentLocation) {
                const locationForecast = await appDataProvider.getLocationForecast(currentLocation.Key, !isMetric)
                    .catch(error => { throw error });

                setLocationForecast(locationForecast);
            }
        } catch (error) {
            setAppError({ hasError: true, errorDetails: error })
        }
    };

    if (appError.hasError) {
        throw appError.errorDetails;
    }

    return (
        <ErrorBoundary>
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
        </ErrorBoundary>
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
