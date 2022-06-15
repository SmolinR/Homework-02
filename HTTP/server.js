const http = require('http');

const PORT = 3000;

const optionsGet = {
  hostname: 'localhost',
  port: PORT,
  path: '/',
  method: 'GET',
};

const GET = http.request(optionsGet, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (data) => {
    console.log(data.toString());
  });
});

GET.on('error', (error) => {
  console.error(error);
});

GET.end();

const optionsPut = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
};

const PUT = http.request(optionsPut, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (data) => {
    console.log(data.toString());
  });
});

PUT.on('error', (error) => {
  console.error(error);
});
PUT.end();
