const d = document;

const showPopDelete = () => {
	let popNode = d.getElementById('popup');
	let $closeBtn = d.createElement('button');
	let $confirmBtn = d.createElement('button');
	let $overlay = d.querySelector('.overlay');
	let $title = d.createElement('h2');
	let $content = d.querySelector('.popup-content');
	let $controls = d.createElement('div');
	let $info = d.createElement('p');

	$content.innerHTML = '';

	$closeBtn.classList.add('close-btn');
	$closeBtn.textContent = 'Cerrar';

	$confirmBtn.classList.add('submit-btn');
	$confirmBtn.textContent = 'Confirmar';
	$confirmBtn.setAttribute('id', 'deleteCookies');

	$controls.append($closeBtn);
	$controls.append($confirmBtn);

	$controls.classList.add('controls');

	$info.textContent = 'Deseas eliminar a los usuarios?';

	$title.textContent = 'Eliminar cookies';
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
	$closeBtn.addEventListener('click', closePop);
	$confirmBtn.addEventListener('click', () => {
		deleteCookies();
		closePop();
	});
	return openPop;
};

const deleteCookies = () => {
	const cookies = document.cookie;
	const cookieArray = cookies.split(';');

	cookieArray.forEach((cookie) => {
		const [key, value] = cookie.trim().split('=');
		document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
	});
};

export default showPopDelete;
