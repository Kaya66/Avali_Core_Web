// server.mjs
import { createServer } from 'node:http';
import { SQLrequest } from './SqlParser.mjs';
//import { SqlConnector } from './SqlConnector.mjs';

let request = new SQLrequest();
SQLrequest.request("Noun", 4);


//Create simple http server on port 3000
const server = createServer ( (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// run with `node server.mjs`
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

