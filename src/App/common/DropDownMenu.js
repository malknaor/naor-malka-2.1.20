import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import changeCurrentTheme from '../theme';
import ToggleButton from './ToggleButton';
import './DropDownMenu.scss';

class DropDownMenu extends Component {
    state = { expandMenu: false }

    displayMenu = (event) => {
        event.preventDefault();

        this.setState({ expandMenu: true }, () => {
            document.addEventListener('click', this.hideMenu);
        });
    }

    hideMenu = (event) => {
        if (!this.dropdownMenu.contains(event.target) || event.target.classList.contains('dropdown-menu__icon')) {

            this.setState({ expandMenu: false }, () => {
                document.removeEventListener('click', this.hideMenu);
            });
        }
    }

    render() {
        const { changeTheme, changeMetric } = this.props;
        const { expandMenu } = this.state;

        return (
            <div className="dropdown-menu" ref={(element) => { this.dropdownMenu = element }}>
                <Icon className="dropdown-menu__icon cog icon" onClick={this.displayMenu} />
                <div className={`dropdown-menu__modal${expandMenu ? ' dropdown-menu__modal--visible' : ''}`}>
                    <div className="modal__item">
                        <ToggleButton label="dark theme" onToggle={() => {
                            changeTheme();
                            changeCurrentTheme();
                        }} />
                    </div>
                    <div className="modal__item">
                        <ToggleButton label="metric" onToggle={changeMetric} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DropDownMenu;
