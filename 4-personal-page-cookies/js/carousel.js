const d = document;

const $nextBtn = d.querySelector('.next'),
    $prevBtn = d.querySelector('.prev'),
    $slides = d.querySelectorAll('.slider-slide');

d.addEventListener('DOMContentLoaded', (e) => {
    slider();
    console.log($nextBtn);
});

const slider = () => {
    let i = 0;
    d.addEventListener('click', (e) => {
        if (e.target == $nextBtn) {
            e.preventDefault();
            $slides[i].classList.remove('active');
            i++;
            if (i > $slides.length - 1) i = 0;

            $slides[i].classList.add('active');
        }
        if (e.target == $prevBtn) {
            e.preventDefault();
            $slides[i].classList.remove('active');
            i--;
            if (i < 0) i = $slides.length - 1;

            $slides[i].classList.add('active');
        }
    });
};
