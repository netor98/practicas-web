export default function hamburgerMenu(panelbtn, panel, seccion) {
    const d = document;

    d.addEventListener('click', (e) => {
        if (e.target.matches(panelbtn) || e.target.matches(`${panelbtn} *`)) {
            d.querySelector(panel).classList.toggle('is-active');
            d.querySelector(panelbtn).classList.toggle('is-active');
            d.querySelector(panelbtn).classList.toggle('hamburger--3dx');
        }

        if (e.target.matches(seccion)) {
            d.querySelector(panel).classList.toggle('is-active');
            d.querySelector(panelbtn).classList.toggle('is-active');
            d.querySelector(panelbtn).classList.toggle('hamburger--3dx');
        }
    });
}
