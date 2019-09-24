// This code tells the computer to write "Hello world" if anyone (e.g. a web browser) tries to access your computer on port 8080.

var http = require('http'); // including the http module, so now we can use http module to create a server:

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(8080);

// After running in CMD "node myfirst.js" our computer will work as a server, and if anyonetries to access our computer on port 8080, they will get a "Hello world" message in return. We can open a web browser and type http://localhest:8080