import showPopRegister from './showPopRegister.js';
import showPopError from './showPopError.js';

const registerUser = () => {
	const d = document;
	const $form = d.getElementById('form');
	const $inputName = d.getElementById('name');
	const $inputPassword = d.getElementById('password');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();
		let name = $inputName.value;
		let pass = $inputPassword.value;
		if (!validateUser(name)) {
			saveCookie(name, pass, 365);
			let popUp = showPopRegister();
			popUp();
		} else {
			let popUp = showPopError();
			popUp();
		}
	});
};

const validateUser = (user) => {
	const cookies = document.cookie;
	const cookieArray = cookies.split(';');

	const cookieData = {};

	cookieArray.forEach((cookie) => {
		const [key, value] = cookie.trim().split('=');
		cookieData[key] = value;
	});
	if (cookieData[user]) return true;

	return false;
};

const saveCookie = (user, password, days) => {
	let expires = '';
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	document.cookie = user + '=' + (password || '') + expires + '; path=/';
};

export default registerUser;
