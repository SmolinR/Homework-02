const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.method === 'GET') {
    res.write('Get method!\r\n');
    res.end();
    req.on('end', () => {
      console.log('Get disconnected');
    });
  } else if (req.method === 'PUT') {
    res.write('Put method!\r\n');
    res.end();
    req.on('end', () => {
      console.log('Put disconnected');
    });
  } else if (req.method === 'PATCH') {
    res.write('Patch method!\r\n');
    res.end();
    req.on('end', () => {
      console.log('Patch disconnected');
    });
  }
});
server.on('connection', () => {
  console.log('Client connected');
});

server.listen(PORT, () => {
  console.log('Server has started');
});
