import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import DropDownMenuContainer from '../App/common/DropDownMenuContainer';
import './Navigation.scss';

const Navigation = props => {
    return (
        <div className="navigation">
            <div className="navigation__title">
                <h2 className="navigation__title-header">
                    Weather App
                    <Icon className="navigation__title-icon sun outline icon" />
                </h2>
            </div>
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
            <DropDownMenuContainer />
        </div>
    );
};

export default Navigation;
