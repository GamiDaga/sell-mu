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
var blood_alarma = true; //traer de la pag
var alarma = true; //traer de la pag
var margen = 10; //traer de la pag

if (blood_alarma) {
   aviso(hora,margen);
}
setInterval(function(){
   if (blood_alarma) {
      alarma = true; //traer de la pag
      hora = new Date();
      console.log('actualizo la hora');
      var audio = new Audio('./music/castle.mp3');
      if (hora.getSeconds() == 0) {
         if (aviso(hora,margen)) {
            audio.play();
         }
      }

   }
},1000);
