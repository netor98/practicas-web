const d = document;
import deleteUsers from './deleteUsers.js';
import showUsers from './showUsers.js';
import registerUser from './validation.js';

d.addEventListener('DOMContentLoaded', (e) => {
	registerUser();
	showUsers();
	deleteUsers();
});
