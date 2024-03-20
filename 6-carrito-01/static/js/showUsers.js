import showPopUp from './showPopUp.js';
const d = document;
let data = {};
const showUsers = () => {
	const $btnShow = d.getElementById('list');

	$btnShow.addEventListener('click', (e) => {
		validateUser();
		let popUp = showPopUp(data);
		popUp();
	});
};

const validateUser = () => {
	const cookies = document.cookie;
	const cookieArray = cookies.split(';');

	const cookieData = {};

	cookieArray.forEach((cookie) => {
		const [key, value] = cookie.trim().split('=');
		if (
			!key.includes('conectado') &&
			!key.includes('theme') &&
			!key.includes('img') &&
			!key.includes('font')
		)
			cookieData[key] = value;
	});
	data = cookieData;
};

export default showUsers;
