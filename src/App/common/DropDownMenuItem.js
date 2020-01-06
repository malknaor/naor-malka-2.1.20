import React from 'react';

import './DropDownMenu.scss';

const DropDownMenuItem = props => {
    return (
        <div className="modal__item">
            {props.children}
        </div>
    )
};

export default DropDownMenuItem;
