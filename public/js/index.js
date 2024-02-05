import theme from './change-theme.js';
import hamburgerMenu from './hamburguer.js';
import keysStorage from './localStorage.js';
import scrollSpy from './scrollSpy.js';
const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', 'aside nav a');
    theme('.theme-btn');
    keysStorage('[dark-theme]');
    scrollSpy();
});
