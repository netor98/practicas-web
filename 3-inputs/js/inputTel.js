const d = document;

export const inputTel = () => {
    const $container = d.getElementById('container');
    $container.innerHTML = '';

    const $label = d.createElement('label');
    const $input = d.createElement('input');
    const $btnCheck = d.createElement('button');

    $input.addEventListener('input', (e) => {
        if (/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(e.target.value)) {
            $btnCheck.disabled = false;
        } else {
            $btnCheck.disabled = true;
        }
    });

    $btnCheck.classList.add('btn');
    $btnCheck.textContent = 'Enivar';
    $btnCheck.disabled = true;

    $btnCheck.addEventListener('click', (e) => {
        alert('El formato del número es correcto!');
    });

    $label.textContent = 'Input tel: ';
    $input.setAttribute('type', 'tel');
    $input.setAttribute('placeholder', 'Formato xxx-xxx-xxxx');
    $input.setAttribute('pattern', '');

    $container.appendChild($label);
    $container.appendChild($input);
    $container.appendChild($btnCheck);
};
