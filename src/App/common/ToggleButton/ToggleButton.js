import React from 'react';
import Toggle from 'react-toggle';

import './ToggleButton.scss';

const ToggleButton = props => {
    const { label, onToggle } = props;

    return (
        <div className="toggle-button">
            <label className="toggle-button__label">{label}</label>
            <Toggle className="toggle-button__button" onChange={onToggle} />
        </div>
    );
};

export default ToggleButton;
