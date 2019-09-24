//HTTP Module

//Node.js has a built-in module called HTTP, which allows Node.js to 
//transfer data over the Hyper Text Transfer Protocol (HTTP).
//To include the HTTP module, use the require() method:
var http = require('http'); 


//The HTTP module can create an HTTP server that listens to server ports
//and gives a response back to the client.
//Use the createServer() method to create an HTTP server:
http.createServer(function(req, res) {
    res.write('hello world!'); //write a response to client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
//The function passed into the http.createServer() method, 
//will be executed when someone tries to access the computer on port 8080.


//Add an HTTP Header:
//If the response from the HTTP server is supposed to be displayed as HTML,
//you should include an http header with the correct content type:
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //The first argument of the 
    //res.writeHead() is status code 200 that means all is OK, second argument is the
    //object containing the response header. 
    res.write('hello world!'); //write a response to client
    res.end(); //end the response
}).listen(8080);


//Read the Query String
//The function passed into the http.createServer() has a req argument that 
//represents the request from the client, as an object (http.IncomingMessage object).
//This object has a property called "url" which holds the part of the url 
//that comes after the domain name:
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
// Now if we open the adress http://localhost:8080/summer the result will be '/summer'


//Split the Query String
//There are built-in modules to easily split the query string into readable parts, such as the URL module.
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
//Now using the address http://localhost:8080/?year=2017&month=July we should see the result 2017 July