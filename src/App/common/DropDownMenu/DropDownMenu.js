import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

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
        const { iconName, children } = this.props;
        const { expandMenu } = this.state;

        return (
            <div className="dropdown-menu" ref={(element) => { this.dropdownMenu = element }}>
                <Icon className={`dropdown-menu__icon ${iconName} icon`} onClick={this.displayMenu} />
                <div className={`dropdown-menu__modal${expandMenu ? ' dropdown-menu__modal--visible' : ''}`}>
                    {children}
                </div>
            </div>
        );
    }
}

export default DropDownMenu;
