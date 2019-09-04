// This code tells the computer to write the time if anyone (e.g. a web browser) tries to access your computer on port 8080.

var dt = require('./myfirstmodule'); // including the module we created. "./" means that the module is located in the same folder as the app.js file.
var http = require('http'); // including the http module, so now we can use http module to create a server:

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The date and time are currently: ' + dt.myDateTime());
    res.end();
}).listen(8080);

// After running in CMD "node myfirst.js" our computer will work as a server, and if anyonetries to access our computer on port 8080, they will get the time message in return. We can open a web browser and type http://localhest:8080