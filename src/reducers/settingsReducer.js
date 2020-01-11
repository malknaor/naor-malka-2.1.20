import { CHANGE_THEME, CHANGE_UNITS } from '../actions/actionTypes';

import localStorageService from '../services/localStorageService';
const initialThemeState = {
    isDarkMode: localStorageService.getIsDarkMode(),
    isMetric: localStorageService.getIsMetric()
};

const settingsReducer = (state = initialThemeState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, isDarkMode: !state.isDarkMode };
        case CHANGE_UNITS:
            return { ...state, isMetric: !state.isMetric };
        default:
            return state;
    };
};

export default settingsReducer;