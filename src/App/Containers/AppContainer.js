import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeTheme, changeMetric } from '../../actions';
import App from '../App';

const AppContainer = props => {
    const { 
        isDarkMode, 
        isMetric, 
        changeTheme, 
        changeMetric 
    } = props;

    return (
        <App 
            isDarkMode={isDarkMode} 
            isMetric={isMetric} 
            changeTheme={changeTheme} 
            changeMetric={changeMetric} />
    );
};

const mapStateToProps = state => {
    return { ...state.settings };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ 
        changeTheme, 
        changeMetric 
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
