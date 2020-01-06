import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeTheme, changeMetric } from '../../actions';
import DropDownMenu from './DropDownMenu';

const DropDownMenuContainer = props => {
    const { settings, changeTheme, changeMetric, iconName } = props;
    const { isMetric } = settings;

    return (
        <DropDownMenu 
            className="dropdown-menu"
            iconName={iconName}
            themeMode={settings.themeMode}
            changeTheme={changeTheme} 
            isMetric={isMetric} 
            changeMetric={changeMetric} 
        >
            {props.children}
        </DropDownMenu>
    );
};

const mapStateTopProps = state => {
    return { settings: state.settings };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ changeTheme, changeMetric }, dispatch);
};

export default connect(mapStateTopProps, mapDispatchToProps)(DropDownMenuContainer);
