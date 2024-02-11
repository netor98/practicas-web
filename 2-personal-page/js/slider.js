const images = [];
images[0] = 'imgs/prueba.jpg';
images[1] = 'imgs/new.png';
const d = document;
const sliderImg = d.getElementById('img-slide');

let i = 0;

export const slider = () => {
    sliderImg.src = images[i];
    if (i >= images.length - 1) i = 0;
    else i++;

    setTimeout(slider, 2000);
};
