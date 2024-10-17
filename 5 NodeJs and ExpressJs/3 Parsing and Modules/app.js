// Core Module
const http = require('http');

// Local Module
const {handler} = require('./RequestHandler');

const server = http.createServer(handler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${3001}`);
});