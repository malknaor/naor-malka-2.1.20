import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import './ToggleButton.scss';

class ToggleButton extends Component {
    state = { isActive: false, text: 'off' };

    toggle = () => {
        const { onToggle } = this.props;
        const { isActive } = this.state;

        this.setState({ isActive: !isActive, text: isActive? 'off' : 'on' });

        if (onToggle) {
            onToggle();
        }
    }

    render() {
        const { isActive, text } = this.state;

        return (
            <Button
                toggle
                className="menu-toggle-button"
                active={isActive}
                onClick={this.toggle}
                floated="right"
                size="tiny">
                {text}
            </Button>
        )
    }
}

export default ToggleButton;
