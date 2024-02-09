export default function theme(themeBtn) {
    const d = document;
    const $themeBtn = d.querySelector(themeBtn),
        $selectors = d.querySelectorAll('[dark-theme]');

    let counter = 1;
    if (localStorage.getItem('dark') == 'true') counter++;

    d.addEventListener('click', (e) => {
        if (e.target.matches(themeBtn)) {
            if (counter % 2 == 0) {
                localStorage.setItem('dark', 'false');
                $themeBtn.innerText = '🌙';
                $selectors.forEach((ele) => ele.classList.toggle('dark-theme'));
            } else {
                localStorage.setItem('dark', 'true');
                d.querySelector(themeBtn).innerText = '☀️';
                $selectors.forEach((ele) => ele.classList.toggle('dark-theme'));
            }
            counter++;
        }
    });
}
