const d = document;
const mostrarDatos = () => {
	const $nombre = d.getElementById('name');
	const $email = d.getElementById('email');
	const $mensaje = d.getElementById('mensaje');
	const $btnEnviar = d.getElementById('enviar');
	const $btnRese = d.getElementById('reset');

	$btnEnviar.addEventListener('click', (e) => {
		alert(
			`Nombre: ${$nombre.value}\nCorreo: ${$email.value}\nMensaje: ${$mensaje.value}`,
		);
	});

	$btnRese.addEventListener('click', (e) => {
		$nombre.value = '';
		$email.value = '';
		$mensaje.value = '';
	});
};

d.addEventListener('DOMContentLoaded', (e) => {
	mostrarDatos();
});
