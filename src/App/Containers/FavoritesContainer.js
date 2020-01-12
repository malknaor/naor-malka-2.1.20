import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LocalStorageService from '../../services/localStorageService';
import appDataPriveder from '../../appDataprovider';
import Favorites from '../Favorites/Favorites';
import { setFavorites, addToFavorites, removeFromFavorites } from '../../actions';

class FavoritesContainer extends Component {
    getFavoritesCurrnetWeather = () => {
        // const { favorites, setFavorites } = this.props;

        // favorites.forEach(async favorite => {
        //     if (!favorite.weather) {
        //         favorite.weather = await appDataPriveder.getCurrentWeather(favorite.location.Key);
        //     }
        // });

        // setFavorites(favorites);
    }

    removeFromFavorites = locationToRemove => {
        // const { removeFromFavorites } = this.props;

        // LocalStorageService.removeFromFavorites(locationToRemove.Key);
        // removeFromFavorites(locationToRemove);
    }

    render() {
        const { favorites, removeFromFavorites } = this.props;

        return (
            <Favorites
                favorites={favorites}
                removeFromFavorites={removeFromFavorites}
            />
        );
    }
}

const mapStateToProps = ({ favorites }) => {
    return {
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
