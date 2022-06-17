var http = require('http');
var url = require("url");

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var resptxt = "You have requested for -> " + q.year + " " + q.month;
    res.write('<h1>Hello World!</h1>')
    res.write('<a href="www.google.com">Click Me!</a><br>')
    res.end(resptxt);

}).listen(8080);