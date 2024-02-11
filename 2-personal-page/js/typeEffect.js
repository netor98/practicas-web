const words = [
    'Mi información personal',
    'Mi formación académica',
    'Mi Situación laboral',
    'Mis Actividades extraescolares',
];

const d = document;
const textElement = d.querySelector('h2 span');

let wordsIndex = 0;
let charIndex = 0;
let isDeleting = false;
export const typeEffect = () => {
    const currentWord = words[wordsIndex];
    const currentChar = currentWord.substring(0, charIndex);

    textElement.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 60);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 80);
    } else {
        isDeleting = !isDeleting;
        wordsIndex = !isDeleting ? (wordsIndex + 1) % words.length : wordsIndex;
        setTimeout(typeEffect, 1000);
    }
};
