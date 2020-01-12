import React from 'react';

import SearchBarContainer from '../Containers/SearchBarContainer';
import LocationDisplayCardContainer from '../Containers/LocationDisplayCardContainer';
import './Home.scss';

const Home = props => {
    return (
        <div className="home-container">
            <div className="home-container__Search">
                <SearchBarContainer />
            </div>
            <div className="home-container__content">
                <LocationDisplayCardContainer /> 
            </div>
        </div>
    );
};

export default Home;
