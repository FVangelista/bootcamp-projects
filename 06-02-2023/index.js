const express = require('express');
const books = require('./books');
const autho = require('./auth');

const app = express();
const PORT = 5500;

app.get('/json', (req, res) => {
  res.json(books);
});

app.get('/api/private', autho, (req, res) => {
  const newBooks = books.filter((book) => book.id < 5 && book.id > 1);
  console.log(newBooks);
  res.json(newBooks);
});

app.get('/', (req, res) => {
  res.send('<h2>Home</h2><a href="/json">public api</a>');
});

app.listen(PORT, () => {
  console.log(`server running at the port: ${PORT}`);
});
