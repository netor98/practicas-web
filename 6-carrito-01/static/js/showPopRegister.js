const d = document;

const showPopRegister = () => {
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

	$info.textContent = 'Usuario registrado!';

	$title.textContent = 'Registrar Usuario';
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
		location.reload();
	});

	return openPop;
};

export default showPopRegister;
