'use strict';

const electron = require('electron');  
const app = electron.app;  
const BrowserWindow = electron.BrowserWindow;

function newWindow() {
	window.open('https://web.whatsapp.com/');
	//require('./page2.html');
}