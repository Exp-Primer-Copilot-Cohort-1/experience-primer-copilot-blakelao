// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// Create web server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    var comment = qs.parse(q.query).comment;
    if (filename == './comment') {
        fs.appendFile('comment.txt', comment + '\n', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    fs.readFile('comment.txt', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
console.log('Server running at http://');
