const http      = require('http');
const app       = require('./App');
const Common    = require('./Common');

const server = http.createServer(app);

server.listen(Common.SERSER_PORT);