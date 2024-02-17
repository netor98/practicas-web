const d = document;
import { hamburgerPanel } from '/2-personal-page/js/hamburguer.js';
import { inputTel } from './inputTel.js';
import { inputRange } from './inputRange.js';
import { inputSearch } from './inputSearch.js';

d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerPanel();
    inputRange();

    d.addEventListener('click', (e) => {
        if (e.target.matches('#tel')) {
            e.preventDefault();
            inputTel();
        }

        if (e.target.matches('#range')) {
            e.preventDefault();
            inputRange();
        }

        if (e.target.matches('#search')) {
            e.preventDefault();
            inputSearch();
        }
    });
});
