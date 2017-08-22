var http = require("http"),
    fs = require('fs');

http.createServer(function(req,res){
	fs.write(html);
})