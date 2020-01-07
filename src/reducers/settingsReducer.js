import { CHANGE_THEME, CHANGE_UNITS } from '../actions/actionTypes';

const initialThemeState = {
    themeMode: 'light',
    isMetric: false
};

const settingsReducer = (state = initialThemeState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, themeMode: state.themeMode === 'light'? 'dark' : 'light' };
        case CHANGE_UNITS:
            return { ...state, isMetric: !state.isMetric };
        default:
            return state;
    };
};

export default settingsReducer;