import showPopDelete from './showPopDelete.js';
const deleteUsers = () => {
	const d = document;
	const $btnDelete = d.getElementById('delete');

	$btnDelete.addEventListener('click', (e) => {
		let popUp = showPopDelete();
		popUp();
	});
};

export default deleteUsers;
