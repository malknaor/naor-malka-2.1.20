import React from 'react'

import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './CurrentWeatherCard.scss';

const CurrentWeatherCard = props => {
    const { isMetric, location, currentWeather, removeFavorite } = props;
    const units = isMetric ? '\u{2103}' : '\u{2109}';

    return (
        <div className="favorite">
            {location && currentWeather ?
                <>
                    <div className="favorite__location">
                        <p className="location__p">
                            {'current weather in'}
                        </p>
                        <div className="location__title">
                            {` ${location.EnglishName}, ${location.Country.ID}`}
                        </div>
                        <p className="location__p">
                            {`${currentWeather.WeatherText}`}
                        </p>
                        <p className="location__p">
                            {isMetric ? currentWeather.Temperature.Metric.Value : currentWeather.Temperature.Imperial.Value}{units}
                        </p>
                        <img
                            className="location__icon"
                            alt="temp_icon"
                            src={require(`../../../assets/images/${currentWeather.WeatherIcon}.png`)}
                        />
                    </div>
                    <FavoriteButton location={location} removeFavorite={removeFavorite} />
                </>
                :
                <p className="location__p">Loading...</p>
            }
        </div>
    );
};

export default CurrentWeatherCard;
