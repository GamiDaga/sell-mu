const remote = require('electron').remote
const main = remote.require('./main.js')
const BrowserWindow = remote.BrowserWindow;
// const $ = require('jquery');

const mysql = require('mysql');
const connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : 'root',
	database : 'phpteam'
});

connection.connect(function(err) {
	if (err) {
		console.log(err.code);
		console.log(err.fatal);
	}
})

const query = 'SELECT * FROM usuarios';

connection.query(query, function(err, rows, fields) {
	if (err) {
		console.log('error en la consulta');
		console.log(err);
		return
	}
	let result = rows;
})

connection.end(function(){});

let button = document.createElement('button');
	button.textContent = 'Abrir Ventana';
	document.body.appendChild(button);

button.addEventListener('click', () => {
	main.openWindow()
});
