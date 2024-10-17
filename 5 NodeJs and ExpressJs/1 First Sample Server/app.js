const http = require('http');

console.log('I was here');

const requestHandler = (req, res) => {
  console.log('Request Received', req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  // res.write('<!DOCTYPE html>');
  // res.write('<html lang="en">');
  // res.write('<head>');
  // res.write('<title>Document</title>');
  // res.write('</head>');
  // res.write('<body>');
  // res.write('<h1>Welcome to First Server</h1>');
  // res.write('</body>');
  // res.write('</html>');
  res.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Document</title>
      </head>
      <body>
        <h1>Welcome to First Server</h1>
      </body>
      </html>
    `);
  res.end();
}

const server = http.createServer(requestHandler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${3001}`);
});