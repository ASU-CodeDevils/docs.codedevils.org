const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

/**
 * Returns the theme obtained from local storage. If the theme is invalid, then
 * the theme is defaulted to light.
 *
 * @returns {string} The theme stored in local storage.
 */
function getValidThemeFromStorage() {
    let theme = localStorage.getItem('docs-theme') || DARK_THEME;
    return (theme === LIGHT_THEME || theme === DARK_THEME) ? theme : DARK_THEME;
}

/**
 * Checks the theme that should be loaded. If the theme that should be loaded is the dark one,
 * then the theme is switched.
 */
function bgOnLoad() {
    let theme = getValidThemeFromStorage();
    let currentTheme = $('head link#theme').attr('href');
    let storedTheme = 'static/css/' + theme + '.min.css';
    if(currentTheme !== storedTheme) {
        $('head link#theme').attr('href', 'static/css/' + theme + '.min.css');
    }
}

/**
 * Handles the change of theme. If the theme in local storage is not a valid theme, then
 * the theme is defaulted to light.
 */
function fabOnClick() {
    let theme = getValidThemeFromStorage();
    let newTheme = (theme === LIGHT_THEME) ? DARK_THEME : LIGHT_THEME;
    $('head link#theme').attr('href', 'static/css/' + newTheme + '.min.css');
    localStorage.setItem('docs-theme', newTheme);
}
