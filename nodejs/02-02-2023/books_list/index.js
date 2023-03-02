const http = require('http');
const { readFileSync } = require('fs');
const url = require('url');

const server = http
  .createServer((req, res) => {
    let page = url.parse(req.url).pathname;
    console.log('server running...');
    if (page === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      let home = readFileSync('index.html');
      res.end(home);
    } else if (page === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      let about = readFileSync('about.html');
      res.end(about);
    } else if (page === '/api/books') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      let books = readFileSync('books.json');
      res.end(books);
    } else {
      res.writeHead(404);
      res.end('Sorry, page not found...');
    }
  })
  .listen(8080);
