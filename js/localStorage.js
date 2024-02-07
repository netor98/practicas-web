export default function keysStorage(selectos) {
    const d = document;
    window.addEventListener('DOMContentLoaded', (e) => {
        if (localStorage.getItem('dark') === 'true') {
            d.querySelector('.theme-btn').innerText = '☀️';
            const $selectors = d.querySelectorAll(selectos);
            $selectors.forEach((ele) => ele.classList.toggle('dark-theme'));
        }
    });
}
