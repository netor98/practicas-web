const d = document;

const showPopUp = (data) => {
	let popNode = d.getElementById('popup');

	let $closeBtn = d.createElement('button');
	let $overlay = d.querySelector('.overlay');
	let $list = d.createElement('ul');
	let $title = d.createElement('h2');
	let $content = d.querySelector('.popup-content');
	let $controls = d.createElement('div');

	$content.innerHTML = '';

	$closeBtn.classList.add('close-btn');
	$closeBtn.textContent = 'Cerrar';
	$controls.append($closeBtn);
	$controls.classList.add('controls');

	$title.textContent = 'Usuarios Registrados';
	$content.insertAdjacentElement('afterbegin', $title);
	$list.setAttribute('id', 'listUsers');
	$list.innerHTML = '';

	for (let cookie in data) {
		if (typeof data[cookie] === 'undefined') {
			let $noData = d.createElement('li');
			$noData.textContent = 'No hay usuarios';
			$list.append($noData);
			break;
		}
		let $listItem = d.createElement('li');
		$listItem.textContent = `${cookie}: ${data[cookie]}`;
		$list.append($listItem);
	}
	const openPop = () => {
		popNode.classList.add('active');
	};

	const closePop = () => {
		popNode.classList.remove('active');
	};
	$content.append($list);
	$content.append($controls);

	$overlay.addEventListener('click', closePop);
	$closeBtn.addEventListener('click', closePop);
	return openPop;
};
export default showPopUp;
