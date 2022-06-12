const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello world!\r\n');
  res.end();
  req.on('end', () => {
    console.log('Client disconnected');
  });
});
server.on('connection', () => {
  console.log('Client connected');
});

server.listen(PORT, () => {
  console.log('Server has started');
});
