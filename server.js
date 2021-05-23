const http = require('http');
const expressApp = require('./backend/app');

const port = process.env.PORT || 3000;

expressApp.set('port', port);
const server = http.createServer(expressApp);

server.listen(port);
