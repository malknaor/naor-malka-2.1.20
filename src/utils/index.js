export const convertFahrenheitToCelcius = value => {
    return Math.floor((value * 9/5) + 32);
};

export const convertCelciusToFahrenheit = value => {
    return Math.floor((value - 32) * 5/9);
};

export const debounce = function (func, wait, immediate) {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;

        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) {
            func.apply(context, args);
        }
    };
};