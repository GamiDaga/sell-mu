
//var app = require('app');  // Módulo para controlar el ciclo de vida de la aplicación.
//var BrowserWindow = require('browser-window');  // Módulo para crear uan ventana de navegador.
const electron = require('electron');  
const app = electron.app; 
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');


//require('./io/io.js');


// require('jsdom').env('', function(err,window)){
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}
// }

//var  jsdom = require('jsdom');

//var $ = require('jquery')(window);
//$.material.init();

// Mantener una referencia global al objeto window, si no lo haces, esta ventana
// se cerrará automáticamente cuando el objeto JavaScript sea recolectado (garbage collected):
let mainWindow = null;	

// Salir de todas las ventanas cuando se cierren.
app.on('window-all-closed', function () {
  // En macOS es común que las aplicaciones y su barra de menú
  // se mantengan activas hasta que el usuario cierre la aplicación
  // explícitamente utilizando Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

// Este método será llamado cuando Electron haya finalizado la inicialización
// y esté listo para crear ventanas de navegador.
app.on('ready', function() {
  // Crear la ventana.
  mainWindow = new BrowserWindow({width: 1024, height: 600});
 
  // cargar el index.html de nuestra aplicación.
  mainWindow.loadURL(url.format({
  	pathname: path.join(__dirname, './view/index.html'),
  	protocol: 'file',
  	slashes: true
  }));

  // Desplegar devtools.
  mainWindow.openDevTools();

  // Evento emitido cuando se cierra la ventana.
  mainWindow.on('closed', function () {
    // Elimina8r la referencia del objeto window.
    // En el caso de soportar multiples ventanas, es usual almacenar
    // los objetos window en un array, este es el momento en el que debes eliminar el elemento correspondiente.
    mainWindow = null;
  })
})

exports.openWindow = () => {
	let newWindow = new BrowserWindow({width: 400, height: 200});
	//window.open('./page2.html');
	newWindow.loadURL(url.format({
  	pathname: path.join(__dirname, './view/page2.html'),
  	protocol: 'file',
  	slashes: true
  }));
}
