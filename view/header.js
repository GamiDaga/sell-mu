var puntero_nav_secciones = document.getElementById('secciones');

puntero_nav_secciones.innerHTML = '<li><a href="https://github.com/electron-userland/electron-builder/wiki/Options#LinuxBuildOptions-category" title="">Mu Cronicas</a></li><li><a href="http://www.google.com/">google</a></li><li><a class="modal-trigger" id="settings-open" href="#modal1"><i class="material-icons">settings</i></a></li>';



var vista_actual = document.getElementById('view-index');

var puntero_nav_pestanias = document.getElementById('pestanias');

var inicio = document.createElement('li');
	inicio.className = 'tab';
var a_inicio = document.createElement('a');
	a_inicio.appendChild(document.createTextNode("Inicio"));
	a_inicio.addEventListener('click', function () {
			vista_actual.style = 'display: none'
			vista_actual = document.getElementById('view-index');
			vista_actual.style = 'display: block';
		});

	inicio.appendChild(a_inicio);
puntero_nav_pestanias.appendChild(inicio);

var comandos = document.createElement('li');
	comandos.setAttribute('class','tab');
var a_comandos = document.createElement('a');
	a_comandos.appendChild(document.createTextNode("Comandos"));
	a_comandos.addEventListener('click', function () {
			vista_actual.style = 'display: none'
			vista_actual = document.getElementById('view-comandos');
			vista_actual.style = 'display: block';
			// console.log(vista_actual.style);
		});

	comandos.appendChild(a_comandos);
puntero_nav_pestanias.appendChild(comandos);

var horarios = document.createElement('li');
	horarios.setAttribute('class','tab');
var a_horarios = document.createElement('a');
	a_horarios.appendChild(document.createTextNode('Horarios'));
	a_horarios.addEventListener('click', function () {
			vista_actual.style = 'display: none'
			vista_actual = document.getElementById('view-horarios');
			vista_actual.style = 'display: block';
		});

	horarios.appendChild(a_horarios);
puntero_nav_pestanias.appendChild(horarios);

function actualizar_hora() {
	var fecha = new Date();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();

	var p_hora = document.getElementById('hora');
	var p_minutos = document.getElementById('minutos');
	var p_segundos = document.getElementById('segundos');
	if (hora < 10) {
		p_hora.textContent ='0' + hora;
	}else {
		p_hora.textContent = hora;
	}if (minutos < 10) {
		p_minutos.textContent ='0' + minutos;
	}else {
		p_minutos.textContent = minutos;
	}if (segundos < 10) {
		p_segundos.textContent ='0' + segundos;

	}else {
		p_segundos.textContent = segundos;
	}

}

setInterval(actualizar_hora,1000);
