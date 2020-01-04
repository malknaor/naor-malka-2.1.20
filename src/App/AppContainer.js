import React from 'react';
import { connect } from 'react-redux';

import App from './App';

const AppContainer = props => {
    const { settings } = props;

    return (
        <App themeMode={settings.themeMode} />
    );
};

const mapStateToProps = state => {
    return { ...state, settings: state.settings };
};

export default connect(mapStateToProps)(AppContainer)
