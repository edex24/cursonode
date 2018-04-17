/*var http= require ("http"),
	fs  = require ("fs");

var html=fs.readFileSync("./index.html");

http.createServer(function(req,res){
	res.write(html);
	res.end();
}).listen(8080);*/

/*var http= require ("http"),
	fs  = require ("fs");

fs.readFile("./index.html",function (err,html){

	http.createServer(function(req,res){
	res.write(html);
	res.end();
	}).listen(8080);
});*/

var http= require ("http"),
	fs  = require ("fs");

fs.readFile("./index.html",function (err,html){

	http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/json"});	
	res.write(JSON.stringify({nombre:"David",username:"edex24"}));
	res.end();
	}).listen(8080);
});

	