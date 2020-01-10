import { CHANGE_THEME, CHANGE_UNITS } from '../actions/actionTypes';

import localStorage from '../services/localStorage';
const initialThemeState = {
    isDarkMode: localStorage.getIsDarkMode(),
    isMetric: localStorage.getIsMetric()
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