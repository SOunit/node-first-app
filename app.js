/**
 * row code behined framework, express.js
 */

// import core modules in node style = require('module name');
const http = require('http');

// export routes code to outer file
const routes = require('./routes');

// old syntax
// function rqListener(req, res) {}
// http.createServer(rqListener);

// old syntax
// http.createServer(function (req, res) {});

console.log(routes.sampleText);

// new syntax
const server = http.createServer(routes.handler);

server.listen(3000);
