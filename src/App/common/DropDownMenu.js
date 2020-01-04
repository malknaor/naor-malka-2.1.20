import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import ToggleButton from './ToggleButton';
import './DropDownMenu.scss';

const DropDownMenu = props => {
    const { themeMode, isDarkMode, isMetric, changeTheme, changeMetric } = props;

    return (
        <Dropdown className={`navigation__menu-icon theme--${themeMode}`} item icon="cog" simple>
            <Dropdown.Menu className={`navigation__menu theme--${themeMode}`} direction="left">
                <Dropdown.Item className="navigation__menu-item">
                    dark mode
                    <ToggleButton isActive={isDarkMode} onToggle={changeTheme} />
                </Dropdown.Item>
                <Dropdown.Item className="navigation__menu-item">
                    metric
                    <ToggleButton isActive={isMetric} onToggle={changeMetric} />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropDownMenu;
