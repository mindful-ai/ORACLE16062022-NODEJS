var http = require('http');

http.createServer(function(req, res){
    console.log('Request --> ' +     req.rawHeaders);
    console.log('Response --> ' + res.statusMessage);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1>')
    res.write('<a href="www.google.com">Click Me!</a>')
    res.end('Done!')

}).listen(8080);