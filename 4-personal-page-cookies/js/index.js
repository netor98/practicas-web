const d = document;
import {
    backgrounds,
    optionsRadious,
    optionsYesOrNo,
    optionsBorder,
    sizeImg,
    optionsFontSize,
    saveStyles,
    restablecerStyles,
    applyRules,
} from './events.js';
import { hamburgerPanel } from './hamburguer.js';
import { slider } from './slider.js';
import { typeEffect } from './typeEffect.js';

const $sizeImg = d.querySelectorAll('.size-img button');
const $contornoImg = d.querySelectorAll('.color-contorno button');
const $redondeadoImg = d.querySelectorAll('.redondeado button');
const $shadowImg = d.querySelectorAll('.shadow button');
const $fontSize = d.querySelectorAll('.font-size button');
const $redondeadoEnlaces = d.querySelectorAll('.redondeado-enlances button');
const $borderImg = d.querySelectorAll('.border-size button');

d.addEventListener('DOMContentLoaded', (e) => {
    optionsYesOrNo();
    optionsRadious();
    optionsBorder();
    optionsFontSize();
    sizeImg();
    saveStyles();
    applyRules();
    restablecerStyles();
    d.addEventListener('click', (e) => {
        if (e.target.matches('.settings')) {
            d.querySelector('.settings-panel').classList.toggle('is-active');
        }

        if (e.target.matches('.border-size button')) {
            $borderImg.forEach((ele) => {
                ele.classList.remove('btn-is-active');
            });
            e.target.classList.add('btn-is-active');
        }

        if (e.target.matches('.size-img button')) {
            $sizeImg.forEach((ele) => {
                ele.classList.remove('btn-is-active');
            });
            e.target.classList.add('btn-is-active');
        }

        if (e.target.matches('.color-contorno button')) {
            $contornoImg.forEach((ele) => {
                ele.classList.remove('btn-is-active');
            });
            e.target.classList.add('btn-is-active');
        }

        if (e.target.matches('.redondeado button')) {
            $redondeadoImg.forEach((ele) => {
                ele.classList.remove('btn-is-active');
            });
            e.target.classList.add('btn-is-active');
        }
        if (e.target.matches('.shadow button')) {
            $shadowImg.forEach((ele) => {
                ele.classList.remove('btn-is-active');
            });
            e.target.classList.add('btn-is-active');
        }

        if (e.target.matches('.font-size button')) {
            $fontSize.forEach((ele) => {
                ele.classList.remove('btn-is-active');
            });
            e.target.classList.add('btn-is-active');
        }

        if (e.target.matches('.redondeado-enlances button')) {
            $redondeadoEnlaces.forEach((ele) => {
                ele.classList.remove('btn-is-active');
            });
            e.target.classList.add('btn-is-active');
        }
    });
    backgrounds();
    hamburgerPanel();
    typeEffect();
    slider();
});
