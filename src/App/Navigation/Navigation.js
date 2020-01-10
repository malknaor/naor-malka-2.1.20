import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import changeCurrentTheme from '../../services/theme';
import ToggleButton from '../common/ToggleButton/ToggleButton';
import DropDownMenuContainer from '../Containers/DropDownMenuContainer';
import DropDownMenuItem from '../common/DropDownMenu/DropDownMenuItem';
import './Navigation.scss';

const Navigation = props => {
    const {
        isDarkMode,
        isMetric,
        changeTheme,
        changeMetric
    } = props;

    return (
        <div className="navigation">
            <div className="navigation__title">
                <Icon className={`navigation__title-icon${!isDarkMode ? '--sun sun' : '--moon moon'} icon`}>forecaster</Icon>
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
                        <ToggleButton
                            defaultChecked={isDarkMode}
                            label="dark theme" onToggle={() => {
                                changeTheme();
                                changeCurrentTheme();
                            }}
                        />
                    </DropDownMenuItem>
                    <DropDownMenuItem>
                        <ToggleButton
                            defaultChecked={isMetric}
                            label="metric"
                            onToggle={changeMetric}
                        />
                    </DropDownMenuItem>
                </DropDownMenuContainer>
            </div>
        </div>
    );
};

export default Navigation;
