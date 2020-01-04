import * as actionTypes from './actionTypes';

export const changeTheme = () => {
    return { type: actionTypes.CHANGE_THEME };
};

export const changeMetric = () => {
    return { type: actionTypes.CHANGE_UNITS };
};
