import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

import localStorageService from '../../../services/localStorageService';

const FavoriteButton = props => {
    const { addToFavorites, removeFromFavorites, location } = props;
    const [isFav, setIsFav] = useState(localStorageService.isLocationFavorite(location.Key));

    const onClick = () => {
        localStorageService.isLocationFavorite(location.Key) ?
            removeFromFavorites(location)
            :
            addToFavorites(location);

            setIsFav(!isFav);
    };

    const getClassName = () => {
        return `fav-icon heart ${localStorageService.isLocationFavorite(location.Key)? '' : 'outline'} icon`;
    };

    const render = () => <Icon className={getClassName()} onClick={onClick}></Icon>;
    

    return render();
};

export default FavoriteButton
