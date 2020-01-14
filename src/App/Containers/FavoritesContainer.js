import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LocalStorageService from '../../services/localStorageService';
import appDataPriveder from '../../appDataprovider';
import Favorites from '../Favorites/Favorites';
import { setFavorites, removeFromFavorites } from '../../actions';

class FavoritesContainer extends Component {
    state = { hasError: false, errorDetails: null }

    getFavoritesCurrnetWeather = async () => {
        const { favorites, setFavorites } = this.props;
        const favoritesErrors = [];
        const newFavorites = [];

        Promise.all(
            favorites.map(async favorite => {
                try {
                    if (!favorite.weather) {
                        const weather = await appDataPriveder.getCurrentWeather(favorite.location.Key);

                        newFavorites.push({ location: favorite.location, weather });
                    } else {
                        newFavorites.push({ location: favorite.location, weather: favorite.weather });
                    }
                } catch (error) {
                    favoritesErrors.push(error);
                }
            })
        ).then(() => {
            if (favoritesErrors.length > 0) {
                this.setState({ hasError: true, errorDetails: favoritesErrors[0] });
            } else if (newFavorites.length > 0) {
                setFavorites(newFavorites);
            }
        });
    }

    removeFromFavorites = locationToRemove => {
        const { removeFromFavorites } = this.props;

        LocalStorageService.removeFromFavorites(locationToRemove.Key);
        removeFromFavorites(locationToRemove);
    }

    updateFavoriteWeather = (location, weather) => {
        const { updateFavoriteCurrentWeather } = this.props;

        updateFavoriteCurrentWeather(location, weather);
    }

    componentDidMount() {
        const { favorites } = this.props;

        if (favorites.length > 0) {
            this.getFavoritesCurrnetWeather();
        }
    }

    render() {
        const { hasError, errorDetails } = this.state;

        if (hasError) {
            throw errorDetails;
        }

        const { isMetric, favorites } = this.props;

        return (
            <Favorites
                isMetric={isMetric}
                favorites={favorites}
                removeFavorite={this.removeFromFavorites}
                updateFavoriteWeather={this.updateFavoriteWeather}
            />
        );
    }
}

const mapStateToProps = ({ favorites, settings }) => {
    return {
        isMetric: settings.isMetric,
        favorites: favorites.favorites
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setFavorites,
        removeFromFavorites
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer)
