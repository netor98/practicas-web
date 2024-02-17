const d = document;

export const inputSearch = () => {
    const $container = d.getElementById('container');
    $container.innerHTML = '';

    const $label = d.createElement('label');
    const $input = d.createElement('input');
    const $btnCheck = d.createElement('button');
    const $breakLIne = d.createElement('div');
    const $containerElements = d.createElement('div');

    fillContainer($containerElements);

    $breakLIne.classList.add('flex-item');
    $btnCheck.classList.add('btn');
    $containerElements.classList.add('container', 'boxes');

    $btnCheck.textContent = 'Buscar';
    $btnCheck.addEventListener('click', (e) => {
        const $namesBoxes = [];
        $boxes.forEach((ele) => {
            $namesBoxes.push(ele.textContent.toLowerCase());
        });

        for (let i = 0; i < $namesBoxes.length; i++) {
            if (!$namesBoxes[i].includes($input.value.toLowerCase())) {
                $boxes[i].classList.remove('box');
                $boxes[i].classList.add('hide-box');
            } else {
                $boxes[i].classList.add('box');
                $boxes[i].classList.remove('hide-box');
            }
        }
    });

    $label.textContent = 'Input search: ';
    $input.setAttribute('type', 'search');

    $container.appendChild($label);
    $container.appendChild($input);
    $container.appendChild($btnCheck);
    $container.appendChild($breakLIne);
    $container.appendChild($containerElements);
    const $boxes = d.querySelectorAll('.box');
};

const fillContainer = (container) => {
    for (let i = 0; i < 5; i++) {
        let box = document.createElement('div');
        box.classList.add('box');

        switch (i) {
            case 0:
                box.style.backgroundColor = 'red';
                box.textContent = 'Rojo';
                break;
            case 1:
                box.style.backgroundColor = 'blue';
                box.textContent = 'Azul';

                break;
            case 2:
                box.style.backgroundColor = 'green';
                box.textContent = 'Verde';

                break;
            case 3:
                box.style.backgroundColor = 'yellow';
                box.textContent = 'Amarillo';

                break;
            case 4:
                box.style.backgroundColor = 'orange';
                box.textContent = 'Naranja';

                break;
            default:
                box.style.backgroundColor = 'black';
                box.textContent = 'Negro';
        }

        container.appendChild(box);
    }
};
