import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

import localStorage from '../../../services/localStorageService';

const FavoriteButton = ({ location }) => {
    const [isFav, setIsFav] = useState(localStorage.isLocationFavorite(location.Key));

    const onClick = () => {
        localStorage.isLocationFavorite(location.Key) ?
            localStorage.removeFromFavorites(location.Key)
            :
            localStorage.addToFavorites(location);

            setIsFav(!isFav);
    };

    const getClassName = () => {
        return `fav-icon heart ${isFav? '' : 'outline'} icon`;
    };

    return (
        <Icon className={getClassName()} onClick={onClick}></Icon>
    );
};

export default FavoriteButton
