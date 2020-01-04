import { CHANGE_THEME } from '../actions/actionTypes';
import { CHANGE_UNITS } from '../actions/actionTypes';

const initialThemeState = {
    themeMode: 'light',
    isMetric: false
};

const settingsReducer = (state = initialThemeState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, themeMode: state.themeMode === 'light'? 'dark' : 'light' };
        case CHANGE_UNITS:
            console.log("TCL: settingsReducer -> isMetric", !state.isMetric)
            return { ...state, isMetric: !state.isMetric };
        default:
            return state;
    };
};

export default settingsReducer;