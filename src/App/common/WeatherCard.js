import React from 'react';

import './WeatherCard.scss';

const WeatherCard = props => {
    const { day, date, minTemp, maxTemp, dayIcon, nightIcon, units } = props;

    return (
        <div className="weather-card">
            <div className="weather-card__day">
                <div className="day__day">{day}</div>
                <div className="day__date">{date}</div>
            </div>
            <div className="weather-card__temp">
                <div className="temp__elem">
                    <p className="elem__text">{`${minTemp}${units}`}</p>
                    <img className="elem__icon" src={require(`../../assets/images/${dayIcon}.png`)} />
                </div>
                <div className="temp__sep">
                    <p className="sep__text">{'\t-\t'}</p>
                </div>
                <div className="temp__elem">
                    <p className="elem__text">{`${maxTemp}${units}`}</p>
                    <img className="elem__icon" src={require(`../../assets/images/${nightIcon}.png`)} />
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
