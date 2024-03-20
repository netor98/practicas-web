const d = document;
let conf = {};

const botones = () => {
	const $default = d.getElementById('default');
	const $oscuro = d.getElementById('oscuro');
	const $verde = d.getElementById('verde');
	const $letraChic = d.getElementById('letra-chicha');
	const $letraDef = d.getElementById('letra-default');
	const $letraGra = d.getElementById('letra-grande');

	const $imgCh = d.getElementById('img-ch');
	const $imgDef = d.getElementById('img-def');
	const $imgGra = d.getElementById('img-gra');

	const $save = d.getElementById('save');
	const $delete = d.getElementById('delete');

	$imgCh.addEventListener('click', (e) => {
		d.querySelectorAll('img').forEach((ele) => (ele.style.width = '35px'));
		conf['img'] = 'small';
	});

	$imgDef.addEventListener('click', (e) => {
		d.querySelectorAll('img').forEach((ele) => (ele.style.width = ''));
		conf['img'] = 'def';
	});

	$imgGra.addEventListener('click', (e) => {
		d.querySelectorAll('img').forEach((ele) => (ele.style.width = '100px'));
		conf['img'] = 'big';
	});

	$letraChic.addEventListener('click', (e) => {
		d.querySelectorAll('p').forEach((ele) => (ele.style.fontSize = '5px'));
		d.querySelectorAll('h3').forEach((ele) => (ele.style.fontSize = '10px'));
		d.querySelectorAll('h2').forEach((ele) => (ele.style.fontSize = '12px'));
		d.querySelectorAll('h1').forEach((ele) => (ele.style.fontSize = '15px'));
		conf['font'] = 'small';
	});

	$letraDef.addEventListener('click', (e) => {
		d.querySelectorAll('p').forEach((ele) => (ele.style.fontSize = ''));
		d.querySelectorAll('h3').forEach((ele) => (ele.style.fontSize = ''));
		d.querySelectorAll('h2').forEach((ele) => (ele.style.fontSize = ''));
		d.querySelectorAll('h1').forEach((ele) => (ele.style.fontSize = ''));
		conf['font'] = 'def';
	});

	$letraGra.addEventListener('click', (e) => {
		d.querySelectorAll('p').forEach((ele) => (ele.style.fontSize = '20px'));
		d.querySelectorAll('h3').forEach((ele) => (ele.style.fontSize = '35px'));
		d.querySelectorAll('h2').forEach((ele) => (ele.style.fontSize = '38px'));
		d.querySelectorAll('h1').forEach((ele) => (ele.style.fontSize = '45px'));
		conf['font'] = 'big';
	});

	$oscuro.addEventListener('click', (e) => {
		d.querySelector('body').style.background = '#000';
		d.querySelector('body').style.color = '#fff';

		conf['theme'] = 'dark';
	});

	$verde.addEventListener('click', (e) => {
		d.querySelector('body').style.background = '#33c46b';
		d.querySelector('body').style.color = '#fff';
		conf['theme'] = 'green';
	});

	$default.addEventListener('click', (e) => {
		d.querySelector('body').style.background = '';
		conf['theme'] = 'def';
	});

	$save.addEventListener('click', (e) => {
		let nombre = getCookie('conectado');
		let claves = Object.keys(conf);
		for (let i = 0; i < claves.length; i++) {
			let clave = claves[i];
			saveCookie(`${nombre}-${clave}`, conf[clave], 365);
		}
		alert('Cookies guardadas');
	});

	$delete.addEventListener('click', (e) => {
		let nombre = getCookie('conectado');
		deleteCookiesByPrefix(`${nombre}-`);
		alert('Cookies borradas');
	});
};

d.addEventListener('DOMContentLoaded', (e) => {
	botones();
});

const saveCookie = (user, value, days) => {
	let expires = '';
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	document.cookie = user + '=' + (value || '') + expires + '; path=/';
};

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

function deleteCookiesByPrefix(prefix) {
	// Divide el string de todas las cookies y las convierte en un array
	var cookies = document.cookie.split(';');

	// Itera sobre todas las cookies
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		// Encuentra la posición del igual, que separa el nombre del valor
		var eqPos = cookie.indexOf('=');
		// Extrae el nombre de la cookie
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		// Elimina el espacio en blanco al inicio del nombre si existe
		name = name.trim();

		// Verifica si el nombre de la cookie comienza con el prefijo
		if (name.startsWith(prefix)) {
			// Elimina la cookie
			document.cookie =
				name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
		}
	}
}
