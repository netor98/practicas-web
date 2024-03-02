const d = document;
const $password = d.getElementById('password');
const $iconShowPass = d.querySelector('.toggle-password');
const $btnSend = d.getElementById('send');
const $btnClear = d.getElementById('clear');
let $inputs = d.querySelectorAll('input');
$inputs = Array.from($inputs);
$inputs.pop();

let error = false;

const regExp = [
    /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
    /^(?:100|[1-9]?\d)$/,
    /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z0-9]{2,}$/,
    /^[A-Za-z\d]{5,}$/,
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*()#?&])[A-Za-z\d@$!%*()#?&]{8,}$/,
];

d.addEventListener('DOMContentLoaded', (e) => {
    d.addEventListener('click', (e) => {
        if ($iconShowPass == e.target) {
            toggleIcon();
        }
        if (e.target == $btnSend) {
            checkInputs();
            error = false;
        }

        if (e.target == $btnClear) {
            clearInputs();
        }
    });
});

const toggleIcon = () => {
    if ($password.type === 'password') {
        $iconShowPass.classList.remove('fa-eye');
        $iconShowPass.classList.add('fa-eye-slash');
        $password.setAttribute('type', 'text');
    } else {
        $iconShowPass.classList.add('fa-eye');
        $iconShowPass.classList.remove('fa-eye-slash');
        $password.setAttribute('type', 'password');
    }
};

const checkInputs = () => {
    $inputs.forEach((ele, index) => {
        if (!regExp[index].test(ele.value)) {
            ele.parentNode.lastElementChild.style.display = 'block';
            error = true;
        } else {
            ele.parentNode.lastElementChild.style.display = 'none';
        }
    });
    const $confirmPass = d.getElementById('confirmPass');
    if ($confirmPass.value != $password.value || $confirmPass.value.length == 0) {
        $confirmPass.parentNode.lastElementChild.style.display = 'block';
        error = true;
    } else {
        $confirmPass.parentNode.lastElementChild.style.display = 'none';
    }

    if (!error) showInputs();
};

const clearInputs = () => {
    $inputs.forEach((ele) => {
        ele.value = '';
    });
    const $confirmPass = d.getElementById('confirmPass');
    $confirmPass.value = '';
    const $error = d.querySelectorAll('.error-div');
    $error.forEach((ele) => {
        ele.style.display = 'none';
    });
};

const showInputs = () => {
    let passwordEncriptada = cifradoCesar($password.value, 3);
    let message = `Nombre: ${$inputs[0].value}\nEdad: ${$inputs[1].value}\nEmail: ${$inputs[2].value}\nUsuario: ${$inputs[3].value}\nContraseña: ${$inputs[4].value}\nContraseña Encriptada: ${passwordEncriptada}`;
    alert(message);
};

const cifradoCesar = (texto, desplazamiento) => {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        const esMayuscula = letra === letra.toUpperCase();
        let index = alfabeto.indexOf(letra.toUpperCase());

        if (index === -1) {
            // Si el carácter no es una letra, lo dejamos sin modificar
            resultado += letra;
        } else {
            // Calcular el nuevo índice
            index = (index + desplazamiento) % alfabeto.length;
            if (index < 0) index += alfabeto.length; // Asegurar el índice positivo para desplazamientos negativos

            // Agregar la letra desplazada al resultado
            resultado += esMayuscula ? alfabeto[index] : alfabeto[index].toLowerCase();
        }
    }

    return resultado;
};
