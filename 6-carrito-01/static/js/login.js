const d = document;

const login = () => {
	const $form = d.getElementById('formLogin');
	const $inputPass = d.getElementById('password');
	const $inputUser = d.getElementById('user');

	console.log($form);
	$form.addEventListener('submit', (e) => {
		e.preventDefault();
		let pass = $inputPass.value;
		let user = $inputUser.value;
		if (validateUser({ user, pass })) {
			window.location.href = '/6-carrito-01/menu_inicial/index.html';
			saveCookie(user, 365);
		} else {
			let popUp = showPopLogin();
			popUp();
		}
	});
};

d.addEventListener('DOMContentLoaded', (e) => {
	login();
});

const validateUser = ({ user, pass }) => {
	const cookies = document.cookie;
	const cookieArray = cookies.split(';');

	const cookieData = {};

	cookieArray.forEach((cookie) => {
		const [key, value] = cookie.trim().split('=');
		cookieData[key] = value;
	});
	return cookieData[user] == pass;
};

const showPopLogin = () => {
	let popNode = d.getElementById('popup');
	let $closeBtn = d.createElement('button');
	let $overlay = d.querySelector('.overlay');
	let $title = d.createElement('h2');
	let $content = d.querySelector('.popup-content');
	let $controls = d.createElement('div');
	let $info = d.createElement('p');

	$content.innerHTML = '';

	$closeBtn.classList.add('close-btn');
	$closeBtn.textContent = 'Cerrar';

	$controls.append($closeBtn);

	$controls.classList.add('controls');

	$title.textContent = 'Error!';
	$info.textContent = 'Usuario o contraseña erronea:(';

	$content.insertAdjacentElement('afterbegin', $title);

	const openPop = () => {
		popNode.classList.add('active');
	};

	const closePop = () => {
		popNode.classList.remove('active');
	};
	$content.append($info);
	$content.append($controls);

	$overlay.addEventListener('click', closePop);
	$closeBtn.addEventListener('click', () => {
		closePop();
	});

	return openPop;
};

const saveCookie = (user, days) => {
	let expires = '';
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	document.cookie = 'conectado' + '=' + (user || '') + expires + '; path=/';
};
