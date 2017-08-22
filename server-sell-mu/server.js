var http = require('http');
var fs = require('fs');

var server = http.createServer(function(requ,res){

	fs.readFile('./sv_index.html',function(err,html) {
		console.log('llego 1 peticion');
		console.log(html);
		res.write(html+"");
		res.end('fin request');
	});
}).listen(8080);