import { combineReducers } from 'redux';

import settingsReducer from './settingsReducer';
import forecastReducer from './forecastReducer';

export default combineReducers({
    settings: settingsReducer,
    forecast: forecastReducer
});
