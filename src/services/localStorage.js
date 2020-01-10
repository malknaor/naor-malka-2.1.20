const LocalStorageService = (({ localStorage }) => {
    const keys = {
        favorites: 'favorites',
        isMetric: 'isMetric',
        isDarkMode: 'isDarkMode'
    };
    let favorites = localStorage.getItem(keys.favorites);

    if (!favorites) {
        favorites = [];
        localStorage.setItem(keys.favorites, JSON.stringify(favorites));
        localStorage.setItem(keys.isMetric, 'false');
        localStorage.setItem(keys.isDarkMode, 'false');
    }

    const _getFavorites = () => {
        return JSON.parse(localStorage.getItem(keys.favorites));
    }

    const _addToFavorites = location => {
        if (location) {
            favorites.push(location);
        }
    }

    const _removeFromFavorites = locationToRemove => {
        if (locationToRemove) {
            favorites = favorites.filter(location => location.Key === locationToRemove.Key);
            localStorage.setItem(keys.favorites, JSON.stringify(favorites));
        }
    }

    const _setIsMetric = isMetricNew => {
        if (isMetricNew) {
            localStorage.setItem(keys.isMetric, isMetricNew);
        }
    }
    
    const _getIsMetric = () => {
        return JSON.parse(localStorage.getItem(keys.isMetric));
    }
    
    const _setIsDarkMode = isDarkModeNew => {
        if (isDarkModeNew) {
            localStorage.setItem(keys.isDarkMode, isDarkModeNew);
        }
    }
    
    const _getIsDarkMode = () => {
        return JSON.parse(localStorage.getItem(keys.isDarkMode));
    }

    return {
        getFavorites: _getFavorites,
        addToFavorites: _addToFavorites,
        removeFromFavorites: _removeFromFavorites,
        setIsMetric: _setIsMetric,
        getIsMetric: _getIsMetric,
        setIsDarkMode: _setIsDarkMode,
        getIsDarkMode: _getIsDarkMode
    }
})(window);

export default LocalStorageService;