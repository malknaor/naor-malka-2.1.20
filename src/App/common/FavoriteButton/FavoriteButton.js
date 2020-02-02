import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

import localStorageService from '../../../services/localStorageService';
import './FavoriteButton.scss';

const FavoriteButton = props => {
    const { addToFavorites, removeFavorite, location } = props;
    const [isFav, setIsFav] = useState(localStorageService.isLocationFavorite(location.Key));

    const onClick = () => {
        if (removeFavorite && localStorageService.isLocationFavorite(location.Key)) {
            removeFavorite(location)
        } else if (addToFavorites) {
            addToFavorites(location);
        }

        setIsFav(!isFav);
    };

    const getClassName = () => {
        return `fav-icon heart ${localStorageService.isLocationFavorite(location.Key) ? '' : 'outline'} icon`;
    };

    const render = () => <Icon className={`fav-button ${getClassName()}`} onClick={onClick}></Icon>;

    return render();
};

export default FavoriteButton
