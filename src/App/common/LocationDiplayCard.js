import React from 'react';
import { Icon } from 'semantic-ui-react';

import { convertFahrenheitToCelcius } from '../../utils';
import './LocationDiplayCard.scss';

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const LocationDiplayCard = props => {
    const { isFavorite, isMetric, currentLocation, currentWeather, locationForecast } = props;
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
                            {isMetric ? Temperature.Metric.Value : Temperature.Imperial.Value}{units}
                        </div>
                    </div>
                    <Icon className={`fav-icon heart ${isFavorite ? '' : 'outline'} icon`}></Icon>
                </div>
                <div className="location__forecast">
                    <div className="forecast__headline">
                        <p>
                            {locationForecast.Headline.Text}
                        </p>
                    </div>
                    <ul className="forecast__daily">{locationForecast.DailyForecasts.map((dailyForecast, index) => {
                        const { Temperature } = dailyForecast;
                        const dateString = dailyForecast.Date.split('T');
                        const date = new Date(dateString[0]);
                        const { Minimum, Maximum } = Temperature;
                        // const tempRange = isMetric? 
                        //     `${convertFahrenheitToCelcius(Minimum.Value)} - ${convertFahrenheitToCelcius(Maximum.Value)}` : 
                        //     `${Minimum.Value} - ${Maximum.Value}`;

                        return (
                            <li className="daily" key={index}>
                                <div className="daily__date">
                                    <div className="date__day">{weekDays[date.getDay()]}</div>
                                    <div className="date__date">{dateString[0]}</div>
                                </div>
                                <div className="daily__weather">
                                    <div className="weather__minmax">
                                        {`${Minimum.Value} - ${Maximum.Value}`}{units}
                                    </div>
                                    <div className="weather__day">
                                        day icon
                                    </div>
                                    <div className="weather__night">
                                        night icon
                                    </div>
                                </div>
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