'use strict';

const electron = require('electron');  
const app = electron.app;  
const BrowserWindow = electron.BrowserWindow;

function newWindow() {
	window.open('./page2.html');
	//require('./page2.html');
}