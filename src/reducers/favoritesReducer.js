import { SET_FAVORITES, ADD_TO_FAVROITES, REMOVE_FROM_FAVROITES } from '../actions/actionTypes';
import LocalStorageService from '../services/localStorageService';

const mapFavorites = LocalStorageService.getFavorites().map(location => {
    return {
        location,
        weather: null
    }
});

const favoritesInitState = {
    favorites: mapFavorites
};

const favoritesReducer = (state = favoritesInitState, action) => {
    switch (action.type) {
        case SET_FAVORITES:
            return { favorites: action.payload };
        case ADD_TO_FAVROITES:
            return { favorites: [...state.favorites, { location: action.payload, weather: null }] };
        case REMOVE_FROM_FAVROITES:
            return { favorites: state.favorites.filter(favorite => favorite.location.Key !== action.payload.Key) };
        default:
            return state;
    }
};

export default favoritesReducer;
