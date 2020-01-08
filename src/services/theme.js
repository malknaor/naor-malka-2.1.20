const themeChanger = (() => {
    let currentTheme = 'light';
    
    const lightTheme = {
        "--color-theme": "orangered",
        "--color-theme-secondary": "rgb(204, 75, 29)",
        "--color-solid": "black",
        "--color-surface": "rgb(230, 230, 230)",
        "--color-secondary-surface": "rgb(240, 240, 240)",
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
        "--color-surface": "#121212",
        "--color-secondary-surface": "#212121",
        "--color-primary": "#313131",
        "--color-secondary": "#414141",
        "--color-card": "rgb(222, 235, 235)",
        "--box-shadow": "0 4px 8px 0 rgba(149, 149, 149, 0.3)",
        "--box-shadow-hover": "0 4px 8px 0 rgba(149, 149, 149, 0.4)"
    };

    const changeTheme = () => {
        const theme = currentTheme === 'light' ? darkTheme : lightTheme;
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';

        Object.entries(theme).forEach(current => document.documentElement.style.setProperty(current[0], current[1]));
    }

    return changeTheme;
})();

export default themeChanger;