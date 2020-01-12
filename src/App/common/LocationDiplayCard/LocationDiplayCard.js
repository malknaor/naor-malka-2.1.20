import React from 'react';

import WeatherCard from '../WeatherCard/WeatherCard';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './LocationDiplayCard.scss';

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const LocationDiplayCard = props => {
    const { 
        isMetric, 
        currentLocation, 
        currentWeather, 
        locationForecast,
        addToFavorites, 
        removeFromFavorites 
    } = props;
    const units = isMetric ? '\u{2103}' : '\u{2109}';

    if (currentLocation && currentWeather && locationForecast) {
        const { Temperature } = currentWeather;

        return (
            <div className="location">
                <div className="location__current">
                    <div className="current-weather__city">
                        <p className="city__p">current weather in</p>
                        <div className="city__title">
                            {` ${currentLocation.EnglishName}, ${currentLocation.Country.ID}`}
                        </div>
                        <div className="city__description">{`${currentWeather.WeatherText}`}</div>
                        <div className="city__temperature">
                            <p className="temperature__text">{isMetric ? Temperature.Metric.Value : Temperature.Imperial.Value}{units}</p>
                            <img className="temperature__icon" alt="temp_icon" src={require(`../../../assets/images/${currentWeather.WeatherIcon}.png`)} />
                        </div>
                    </div>
                    <FavoriteButton location={currentLocation} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />
                </div>
                <div className="location__forecast">
                    <div className="forecast__headline">
                        <p>
                            {locationForecast.Headline.Text}
                        </p>
                    </div>
                    <ul className="forecast__daily">{locationForecast.DailyForecasts.map((dailyForecast, index) => {
                        const { Temperature, Day, Night } = dailyForecast;
                        const dateString = dailyForecast.Date.split('T');
                        const date = new Date(dateString[0]);
                        const { Minimum, Maximum } = Temperature;

                        return (
                            <li className="daily__item" key={index}>
                                <WeatherCard
                                    day={weekDays[date.getDay()]}
                                    date={dateString[0]}
                                    minTemp={Minimum.Value}
                                    maxTemp={Maximum.Value}
                                    units={units}
                                    dayIcon={Day.Icon}
                                    nightIcon={Night.Icon}
                                />
                            </li>
                        );
                    })}
                    </ul>
                </div>
            </div>
        );
    }

    return null;
};

export default LocationDiplayCard;