const d = document;

export const inputRange = () => {
    const $container = d.getElementById('container');
    $container.innerHTML = '';

    const $label = d.createElement('label');
    const $input = d.createElement('input');
    const $paragraph = d.createElement('p');
    const $span = d.createElement('span');

    $span.classList.add('span');

    $input.addEventListener('input', (e) => {
        $span.textContent = e.target.value;
    });

    $paragraph.textContent = 'Volumen: ';
    $label.textContent = 'Input Range: ';
    $input.setAttribute('type', 'range');
    $input.setAttribute('min', '0');
    $input.setAttribute('max', '100');
    $input.setAttribute('value', '10');
    $input.setAttribute('step', '5');

    $container.appendChild($label);
    $container.appendChild($input);
    $container.appendChild($paragraph);
    $container.appendChild($span);
};
