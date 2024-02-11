const d = document;
import { hamburgerPanel } from './hamburguer.js';
import { slider } from './slider.js';
import { typeEffect } from './typeEffect.js';
d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerPanel();
    typeEffect();
    slider();
});
