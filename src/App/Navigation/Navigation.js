import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import changeCurrentTheme from '../../services/theme';
import ToggleButton from '../common/ToggleButton';
import DropDownMenuContainer from '../common/DropDownMenuContainer';
import DropDownMenuItem from '../common/DropDownMenuItem';
import './Navigation.scss';

const Navigation = props => {
    const { themeMode, changeTheme, changeMetric } = props;

    return (
        <div className="navigation">
            <div className="navigation__title">
                <h2 className="navigation__title-header">
                    <Icon className={`navigation__title-icon${themeMode === 'light' ? '--sun sun' : '--moon moon'} icon`} />
                    forecaster
                </h2>
            </div>
            <div className="navigation__nav">
                <ul className="navigation__nav-list">
                    <li className="navigation__nav-item">
                        <NavLink className="navigation__nav-link" activeClassName="navigation__nav-link--active" to="/home">
                            Home
                        </NavLink>
                    </li>
                    <li className="navigation__nav-item">
                        <NavLink className="navigation__nav-link" activeClassName="navigation__nav-link--active" to="/favorites">
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navigation__settings">
                <DropDownMenuContainer iconName='cog'>
                    <DropDownMenuItem>
                        <ToggleButton label="dark theme" onToggle={() => {
                            changeTheme();
                            changeCurrentTheme();
                        }} />
                    </DropDownMenuItem>
                    <DropDownMenuItem>
                        <ToggleButton label="metric" onToggle={changeMetric} />
                    </DropDownMenuItem>
                </DropDownMenuContainer>
            </div>
        </div>
    );
};

export default Navigation;
