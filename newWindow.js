'use strict';

const electron = require('electron');  
const app = electron.app;  
const BrowserWindow = electron.BrowserWindow;

function newWindow() {
	window.open();
	require('./page2.html');
}