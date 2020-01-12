import { combineReducers } from 'redux';

import settingsReducer from './settingsReducer';
import forecastReducer from './forecastReducer';
import searchReducer from './searchReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
    settings: settingsReducer,
    forecast: forecastReducer,
    search: searchReducer,
    favorites: favoritesReducer
});
