import React, { useState } from 'react'

import FavoriteButton from '../FavoriteButton/FavoriteButton';
import appDataProvider from '../../../appDataprovider';

const CurrentWeatherCard = ({ location }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentWeather, setCurrentWeather] = useState(null);

    const fetchCurrentWether = async () => {
        try {
            setIsLoading(true);
            const weather = await appDataProvider.getCurrentWeather(location.Key);

            setCurrentWeather(weather);
            setIsLoading(false);
        } catch (error) {
            alert(error);
            setIsLoading(false);
        }
    }

    return (
        <div className="current-weather">
            {
                currentWeather ?
                    (
                        <>
                            {/* <div className="current-weather__city">
                                <p className="city__p">
                                    {'current weather in'}``
                                </p>
                                <div className="city__title">
                                    {` ${location.EnglishName}, ${location.Country.ID}`}
                                </div>
                                <div className="city__description">
                                    {`${currentWeather.WeatherText}`}
                                </div>
                                <div className="city__temperature">
                                    <p className="temperature__text">
                                        {isMetric ? Temperature.Metric.Value : Temperature.Imperial.Value}{units}
                                    </p>
                                    <img
                                        className="temperature__icon"
                                        alt="temp_icon"
                                        src={require(`../../../assets/images/${currentWeather.WeatherIcon}.png`)}
                                    />
                                </div>
                            </div>
                            <div className="current-weather__fav">
                                <FavoriteButton location={currentLocation} />
                            </div> */}
                        </>
                    ) :
                    <div>

                    </div>

            }
        </div>
    );
};

export default CurrentWeatherCard;
