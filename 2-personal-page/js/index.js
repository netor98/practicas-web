const d = document;
import { hamburgerPanel } from './hamburguer.js';
import { slider } from './slider.js';
import { typeEffect } from './typeEffect.js';
d.addEventListener('DOMContentLoaded', (e) => {
    d.cookie = 'sizeImages=50px; expires=Sun, 1 January 2030 12:00:00 UTC; path=/';
    hamburgerPanel();
    typeEffect();
    slider();
});
