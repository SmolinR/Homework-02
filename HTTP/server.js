const http = require('http');

const PORT = 3000;

const client = http.get(`http://localhost:${PORT}`, (res) => {
  console.log('Connected to the server');
  res.on('data', (chunk) => {
    console.log(chunk.toString());
  });
  res.on('end', () => {
    console.log('Disconnected from server');
  });
});
client.end();
