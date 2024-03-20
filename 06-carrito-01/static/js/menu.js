const d = document;
const menu = () => {
	const $carrito = d.querySelector('.carrito');
	const $div = d.querySelector('.carrito-div');
	const $contacto = d.querySelector('.usuario');
	const $settings = d.querySelector('.settings');

	const $flecha = d.querySelector('.flecha');

	$carrito.addEventListener('click', (e) => {
		$div.classList.add('active');
	});

	$flecha.addEventListener('click', (e) => {
		$div.classList.remove('active');
	});

	$contacto.addEventListener('click', (e) => {
		window.location = '/Contacto/index.html';
	});

	$settings.addEventListener('click', (e) => {
		window.location = '/configuracion/index.html';
	});
};

const nombre = () => {
	const $titulo = d.getElementById('titulo');
	let valor = getCookie('conectado');
	$titulo.textContent = `Bienvenido, ${valor}😊!`;
};

const cargarEstilos = () => {
	let valor = getCookie('conectado');
	console.log(valor);
	let cookies = getCookiesByPrefix(`${valor}-`);
	let claves = Object.keys(cookies);
	console.log(cookies, claves);
	for (let i = 0; i < claves.length; i++) {
		let clave = claves[i];
		if (clave.includes('theme')) {
			if (cookies[clave] == 'dark') {
				d.querySelector('body').style.background = '#000';
				d.querySelector('body').style.color = '#fff';
			}
			if (cookies[clave] == 'green') {
				d.querySelector('body').style.background = '#33c46b';
				d.querySelector('body').style.color = '#fff';
			}
			if (cookies[clave] == 'def') {
				d.querySelector('body').style.background = '';
				d.querySelector('body').style.color = '';
			}
		}
		if (clave.includes('font')) {
			if (cookies[clave] == 'small') {
				d.querySelectorAll('p').forEach(
					(ele) => (ele.style.fontSize = '5px'),
				);
				d.querySelectorAll('h3').forEach(
					(ele) => (ele.style.fontSize = '10px'),
				);
				d.querySelectorAll('h2').forEach(
					(ele) => (ele.style.fontSize = '12px'),
				);
				d.querySelectorAll('h1').forEach(
					(ele) => (ele.style.fontSize = '15px'),
				);
			}

			if (cookies[clave] == 'def') {
				d.querySelectorAll('p').forEach((ele) => (ele.style.fontSize = ''));
				d.querySelectorAll('h3').forEach((ele) => (ele.style.fontSize = ''));
				d.querySelectorAll('h2').forEach((ele) => (ele.style.fontSize = ''));
				d.querySelectorAll('h1').forEach((ele) => (ele.style.fontSize = ''));
			}

			if (cookies[clave] == 'big') {
				d.querySelectorAll('p').forEach(
					(ele) => (ele.style.fontSize = '20px'),
				);
				d.querySelectorAll('h3').forEach(
					(ele) => (ele.style.fontSize = '35px'),
				);
				d.querySelectorAll('h2').forEach(
					(ele) => (ele.style.fontSize = '38px'),
				);
				d.querySelectorAll('h1').forEach(
					(ele) => (ele.style.fontSize = '45px'),
				);
			}
		} else {
			if (cookies[clave] == 'small') {
				d.querySelectorAll('img').forEach(
					(ele) => (ele.style.width = '35px'),
				);
			}

			if (cookies[clave] == 'def') {
				d.querySelectorAll('img').forEach((ele) => (ele.style.width = ''));
			}

			if (cookies[clave] == 'big') {
				d.querySelectorAll('img').forEach(
					(ele) => (ele.style.width = '100px'),
				);
			}
		}
	}
};

d.addEventListener('DOMContentLoaded', (e) => {
	menu();
	nombre();
	cargarEstilos();
});

function getCookie(name) {
	let nameEQ = name + '=';
	let ca = document.cookie.split(';'); // Divide todas las cookies en un array
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') {
			// Elimina los espacios en blanco iniciales
			c = c.substring(1);
		}
		if (c.indexOf(nameEQ) === 0) {
			// Comprueba si la cookie deseada está al inicio de la cadena
			return c.substring(nameEQ.length); // Extrae y devuelve el valor de la cookie
		}
	}
	return null; // Si no se encuentra la cookie, devuelve null
}

function getCookiesByPrefix(prefix) {
	const cookies = document.cookie.split(';');
	const filteredCookies = {};

	cookies.forEach((cookie) => {
		const [name, value] = cookie.trim().split('=');
		if (name.startsWith(prefix)) {
			filteredCookies[name] = value;
		}
	});

	return filteredCookies;
}
