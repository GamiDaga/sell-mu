function aviso(hora,margen) {
   var hora_actual = hora.getHours();
   var minutos_actual = hora.getMinutes();
   var segundos_actual =hora.getSeconds();
   console.log('testeo si faltan ' + margen);
   switch (hora_actual) {
      case 23:
         if(alarma && (hora_actual == 23 && minutos_actual == (60 - margen))){
            console.log('en ' + margen + ' minutos es el blood (recuerda que abre 5 minutos antes)');
            return true;
         }
      break;

      case 3:
         if(alarma && (hora_actual == 3 && minutos_actual == (60 - margen))){
            console.log('en ' + margen + ' minutos es el blood (recuerda que abre 5 minutos antes)');
            return true;
         }
      break;

      case 7:
         if(alarma && (hora_actual == 7 && minutos_actual == (60 - margen))){
            console.log('en ' + margen + ' minutos es el blood (recuerda que abre 5 minutos antes)');
            return true;
         }
      break;

      case 11:
         if(alarma && (hora_actual == 11 && minutos_actual == (60 - margen))){
            console.log('en ' + margen + ' minutos es el blood (recuerda que abre 5 minutos antes)');
            return true;
         }
      break;

      case 15:
         if(alarma && (hora_actual == 15 && minutos_actual == (60 - margen))){
            console.log('en ' + margen + ' minutos es el blood (recuerda que abre 5 minutos antes)');
            return true;
         }
      break;
      case 19:
         if(alarma && (hora_actual == 19 && minutos_actual == (60 - margen))){
            console.log('en ' + margen + ' minutos es el blood (recuerda que abre 5 minutos antes)');
            return true;
         }
      break;
      default:

         return false;
   }
}


var hora = new Date();
var margen = 10; //traer de la pag
var blood_alarma = document.getElementById('blood_alarma').checked = true; //traer de la pag
// console.log(blood_alarma);

var alarma = true; //traer de la pag
var margen = 10; //traer de la pag

document.getElementById('stop-alarm').addEventListener('click', function (e) {
   document.getElementById('music-alarm-blood').pause();
   document.getElementById('stop-alarm').style.display = 'none';
});

if (blood_alarma) {
   if (aviso(hora,margen)) {
      document.getElementById('music-alarm-blood').play();
      document.getElementById('stop-alarm').style.display = 'inline-block';
      }
   }

margen = 10; //traer de la pag
setInterval(function(){
   var blood_alarma = document.getElementById('blood_alarma').checked; //traer de la pag
   if (blood_alarma) {
      alarma = true; //traer de la pag
      hora = new Date();
      console.log('actualizo la hora');
      if (hora.getSeconds() == 0) {
         if (aviso(hora,margen)) {
            document.getElementById('music-alarm-blood').play();
            document.getElementById('stop-alarm').style.display = 'inline-block';
         }
      }

   }
},1000);



// render de horarios
var despl = document.querySelectorAll( '.desplegables' );
   for (var i = 0; i < despl.length; i++) {
      var despl_actual = despl[i];
      despl[i].querySelector('.desplegable-header').addEventListener('click', despl_actual =>{
         var menus = despl_actual.target.nextElementSibling;
         if (menus.style.display == 'none') {
            menus.style = 'display: inline-block';
         }else if (menus.style.display == 'inline-block') {
            menus.style = 'display: none';
         }
      });
   }

// render de comandos

var fs=require('fs');


fs.readFile('./data/pathCommand.txt',function(error,datos){
    if (error) {
        console.log(error);
    }
    else {
        document.getElementById('comm-path').value = datos.toString();
    }
});

document.getElementById('comm-path-save').addEventListener('click',function () {
   path = document.getElementById('comm-path').value;
   fs.writeFile('./data/pathCommand.txt',path,function(error){
      if (error){
         alert(error);
      }else{
         fs.readFile('./data/pathCommand.txt',function(error,datos){
            if (error) {
               console.log(error);
            }else {
               document.getElementById('comm-path').value = datos.toString();
            }
         });
         alert('El directorio fue guardado exitosamente');
      }
   });
});

   fs.readFile('./data/pathCommand.txt',function(error,datos){
      if (error) {
         console.log(error);
      }
      else {
          var ddd = datos.toString();
          ddd += '/Data/Macro.txt';
          console.log('ddd es ' + ddd);
          fs.readFile(ddd,function(error,comandos){
             if (error) {
                console.log(error);
             }else{
                var strcmd = comandos.toString();
                var arrcmd = strcmd.split('\n');
                var destino = document.getElementsByName('commAlt');
                for (var i = 0; i < arrcmd.length - 1; i++) {
                   console.log(destino[i]);
                   destino[i].value = arrcmd[i];
                }
             }
          });
      }
   });
   // console.log(s);

document.getElementById('comm-codes-save').addEventListener('click',function(){
      fs.readFile('./data/pathCommand.txt',function (error,datos) {

         if (error) {
            console.log(error);
         }else {
         var nodos = document.getElementById('listAlt').childNodes;
         var child = document.getElementById('listAlt').firstElementChild;
         console.log(child);
         var cadena_comandos = '';
         console.log(nodos.length);
         while (child.nextElementSibling) {
            // console.log(child.lastElementChild);
            cadena_comandos += child.lastElementChild.value;
            cadena_comandos += '\n'
            // console.log(child.lastElementChild.value);
            child = child.nextElementSibling;
         }
         // console.log(child.lastElementChild);
         cadena_comandos += child.lastElementChild.value;
         cadena_comandos += '\n'
         // console.log(child.lastElementChild.value);

         console.log(cadena_comandos);
         // console.log(leer('./data/pathCommand.txt'));
         var directorio_a_guardar = datos.toString();
         directorio_a_guardar += '/Data/Macro.txt';
         console.log(directorio_a_guardar);

         fs.writeFile(directorio_a_guardar,cadena_comandos,function(error){
               if (error){
                  alert(error);
            }else{
               fs.readFile('./data/pathCommand.txt',function(error,datos){
                  if (error) {
                     console.log(error);
                  }
                  else {
                      var ddd = datos.toString();
                      ddd += '/Data/Macro.txt';
                      console.log('ddd es ' + ddd);
                      fs.readFile(ddd,function(error,comandos){
                         if (error) {
                            console.log(error);
                         }else{
                            var strcmd = comandos.toString();
                            var arrcmd = strcmd.split('\n');
                            var destino = document.getElementsByName('commAlt');
                            for (var i = 0; i < arrcmd.length - 1; i++) {
                               console.log(destino[i]);
                               destino[i].value = arrcmd[i];
                            }
                         }
                      });
                  }
               });
               alert('El los comandos fueron guardados exitos');
            }
         });
      }
   });
});
















document.getElementById('settings-open').addEventListener('click',function(){
   var ventana = document.getElementById('miVentana');
   ventana.style.marginTop = '100px';
   ventana.style.left = ((document.body.clientWidth-350) / 2) +  'px';
   ventana.style.display = 'block';
});

document.getElementById('settings-close').addEventListener('click',function(){
   var ventana = document.getElementById('miVentana');
   ventana.style.display = 'none';
});
