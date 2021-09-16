/* eslint-disable no-console */
const https = require('https');
const fs = require('fs');
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');

const key = fs.readFileSync(__dirname + '/key.pem', 'ascii');
const  cert = fs.readFileSync(__dirname + '/cert.pem', 'ascii');

if (!key) {
  throw Error("Unable to read certificate key file");
}

if (!cert){
  throw Error("Unable to read certificate cert key file");
}
console.log(key);
console.log(cert);

// const server = https.createServer({key, cert}, app).listen(port);
const server = app.listen(port);

// Call app.setup to initialize all services and SocketIO
// app.setup(server);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);
 