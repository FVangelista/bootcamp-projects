const express = require('express');

const app = express();
const PORT = 8800;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api', (req, res) => {
  res.sendFile(__dirname + '/public/apis.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/json', (req, res) => {
  res.sendFile(__dirname + '/api.json');
});

app.get('*', (req, res) => {
  res.send('404 | page not found');
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
