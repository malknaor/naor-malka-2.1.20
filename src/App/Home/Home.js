import React from 'react';

import SearchBarContainer from '../Containers/SearchBarContainer';
import LocationDiplayCard from '../common/LocationDiplayCard';
import './Home.scss';

const Home = props => {
    const { 
        isMetric, 
        currentLocation, 
        currentWeather, 
        locationForecast 
    } = props;

    return (
        <div className="home-container">
            <div className="home-container__Search">
                <SearchBarContainer />
            </div>
            <div className="home-container__content">
                <LocationDiplayCard 
                    isMetric={isMetric} 
                    currentLocation={currentLocation} 
                    currentWeather={currentWeather} 
                    locationForecast={locationForecast} 
                />
            </div>
        </div>
    );
};

export default Home;
