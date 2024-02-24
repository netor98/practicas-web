const d = document;
export const hamburgerPanel = () => {
    const btn_hamburguer = d.querySelector('.panel-btn');
    console.log(btn_hamburguer);
    d.addEventListener('click', (e) => {
        if (e.target.matches('.panel-btn') || e.target.matches(`.panel-btn *`)) {
            btn_hamburguer.classList.toggle('hamburger--3dx');
            btn_hamburguer.classList.toggle('is-active');
            d.querySelector('.panel').classList.toggle('is-active');
        }

        if (e.target.matches('.menu a')) {
            btn_hamburguer.classList.toggle('hamburger--3dx');
            btn_hamburguer.classList.toggle('is-active');
            d.querySelector('.panel').classList.toggle('is-active');
        }
    });
};
