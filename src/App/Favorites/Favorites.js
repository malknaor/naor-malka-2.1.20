import React from 'react';

import CurrentWeatherCard from '../common/CurrentWeatherCard/CurrentWeatherCard';
import './Favorites.scss';

const Favorites = props => {
    const { isMetric, favorites, removeFavorite, updateFavoriteWeather } = props;

    const renderFavorites = () => {
        if (favorites && favorites.length > 0) {
            return favorites.map(favorite => {
                return (
                    <CurrentWeatherCard
                        key={favorite.Key}
                        isMetric={isMetric}
                        location={favorite.location}
                        currentWeather={favorite.weather}
                        removeFavorite={removeFavorite}
                        updateFavoriteWeather={updateFavoriteWeather}
                    />
                );
            });
        } else {
            return (
                <div className="favorites-container__no-favorites">
                    No favorites locations...
                    Try adding one by clicking the ♥ in home page
                </div>
            );
        }
    }

    return (
        <div className="favorites-container">
            {renderFavorites()}
        </div>
    );
};

export default Favorites;
