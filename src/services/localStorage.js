const LocalStorageService = (({ localStorage }) => {
    const keys = {
        favorites: 'favorites',
        isMetric: 'isMetric',
        isDarkMode: 'isDarkMode'
    };

    const _getFavorites = () => {
        return JSON.parse(localStorage.getItem(keys.favorites));
    };

    const _addToFavorites = location => {
        if (location) {
            favorites.push(location);
            localStorage.setItem(keys.favorites, JSON.stringify(favorites));
        }
    };
    
    const _removeFromFavorites = locationToRemove => {
        if (locationToRemove) {
            favorites = favorites.filter(location => location.Key !== locationToRemove);
            localStorage.setItem(keys.favorites, JSON.stringify(favorites));
        }
    };

    const _isLocationFavorite = loacationKey => {
        return favorites.find(location => location.Key === loacationKey);
    };

    const _setIsMetric = isMetricNew => {
        if (isMetricNew) {
            localStorage.setItem(keys.isMetric, isMetricNew);
        }
    };
    
    const _getIsMetric = () => {
        return JSON.parse(localStorage.getItem(keys.isMetric));
    };
    
    const _setIsDarkMode = isDarkModeNew => {
        if (isDarkModeNew) {
            localStorage.setItem(keys.isDarkMode, isDarkModeNew);
        }
    };
    
    const _getIsDarkMode = () => {
        return JSON.parse(localStorage.getItem(keys.isDarkMode));
    };

    let favorites = _getFavorites();

    if (!favorites) {
        favorites = [];
        localStorage.setItem(keys.favorites, JSON.stringify(favorites));
        localStorage.setItem(keys.isMetric, 'false');
        localStorage.setItem(keys.isDarkMode, 'false');
    };

    return {
        getFavorites: _getFavorites,
        addToFavorites: _addToFavorites,
        removeFromFavorites: _removeFromFavorites,
        isLocationFavorite: _isLocationFavorite,
        setIsMetric: _setIsMetric,
        getIsMetric: _getIsMetric,
        setIsDarkMode: _setIsDarkMode,
        getIsDarkMode: _getIsDarkMode
    };
})(window);

export default LocalStorageService;