export default function scrollSpy() {
    const d = document;
    const $sections = d.querySelectorAll('.section[data-scroll-spy]');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((ele) => {
                const id = ele.target.getAttribute('id');

                if (ele.isIntersecting) {
                    d.querySelector(`a[data-scroll-spy][href="#${id}`).classList.add('active');
                } else {
                    d.querySelector(`a[data-scroll-spy][href="#${id}`).classList.remove('active');
                }
            });
        },
        {
            //root
            rootMargin: '-300px',
        }
    );

    $sections.forEach((ele) => observer.observe(ele));
    console.log($sections);
}
