var port = 8998;
var express = require('express');
var server = express();
var path = require('path');

server.use(express.static(path.join(__dirname, '/')));
server.listen(port);

console.log('Listening on localhost:' + port + '...');
