import localStorage from '../services/localStorage';

const themeChanger = (() => {
    let currentTheme = 'light';
    
    const lightTheme = {
        "--color-theme": "orangered",
        "--color-theme-secondary": "rgb(204, 75, 29)",
        "--color-solid": "black",
        "--color-surface": "rgb(200, 200, 200)",
        "--color-secondary-surface": "rgb(215, 215, 215)",
        "--color-third-surface": "rgb(230, 230, 230)",
        "--color-fourth-surface": "rgb(245, 245, 245)",
        "--color-primary": "teal",
        "--color-secondary": "rgb(0, 184, 184)",
        "--color-card": "rgb(222, 235, 235)",
        "--box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.3)",
        "--box-shadow-hover": "0 4px 8px 0 rgba(0, 0, 0, 0.4)"
    };
    
    const darkTheme = {
        "--color-theme": "rgb(255, 252, 119)",
        "--color-theme-secondary": "rgb(216, 216, 36)",
        "--color-solid": "white",
        "--color-surface": "#000000",
        "--color-secondary-surface": "#212121",
        "--color-third-surface": "#303030",
        "--color-fourth-surface": "#424242",
        "--color-primary": "#313131",
        "--color-secondary": "#414141",
        "--color-card": "rgb(222, 235, 235)",
        "--box-shadow": "0 4px 8px 0 rgba(149, 149, 149, 0.3)",
        "--box-shadow-hover": "0 4px 8px 0 rgba(149, 149, 149, 0.4)"
    };

    const changeTheme = () => {
        const theme = currentTheme === 'light' ? darkTheme : lightTheme;
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';

        Object.entries(theme).forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
    }

    if (localStorage.getIsDarkMode) {
        changeTheme();
    }

    return changeTheme;
})();

export default themeChanger;