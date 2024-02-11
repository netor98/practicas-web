export default function hamburgerMenu(panelbtn, panel, seccion) {
    const d = document;

    d.addEventListener('click', (e) => {
        // When the user click the hambuger button the panel will be activated o desactivated
        if (e.target.matches(panelbtn) || e.target.matches(`${panelbtn} *`)) {
            d.querySelector(panel).classList.toggle('is-active');
            d.querySelector(panelbtn).classList.toggle('is-active'); // The button will change to open or close
            d.querySelector(panelbtn).classList.toggle('hamburger--3dx');
        }

        // If the click it's on a section the panel will not be displayed
        if (e.target.matches(seccion)) {
            d.querySelector(panel).classList.toggle('is-active');
            d.querySelector(panelbtn).classList.toggle('is-active');
            d.querySelector(panelbtn).classList.toggle('hamburger--3dx');
        }
    });
}
