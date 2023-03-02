const http = require('http');
const { readFileSync } = require('fs');

const contactsPage = readFileSync('./contacts.html');

const PORT = 3001;
const article = 'Articles Page';
const comments = 'Comments Page';
const users = 'Users Page';

const server = http
  .createServer((req, res) => {
    console.log(`the server is active on the port ${PORT}`);

    if (req.url === '/articles' || req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(
        `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>${article}</title>
            </head>
            <body>
              <h2>This is the articles page</h2>
              <a href="/comments">comments</a><br>
              <a href="/users">users</a><br>
              <a href="/contacts">contacts</a>
            </body>
          </html>`
      );
      res.end();
    } else if (req.url === '/comments') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(
        `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${comments}</title>
          </head>
          <body>
            <h2>This is the comments page</h2>
            <a href="/">articles</a><br>
            <a href="/users">users</a><br>
            <a href="/contacts">contacts</a>
          </body>
        </html>`
      );
      res.end();
    } else if (req.url === '/users') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(
        `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${users}</title>
          </head>
          <body>
            <h2>This is the users page</h2>
            <a href="/">articles</a><br>
            <a href="/comments">comments</a><br>
            <a href="/contacts">contacts</a>
          </body>
        </html>`
      );
      res.end();
    } else if (req.url === '/contacts') {
      res.writeHead(200);
      res.end(contactsPage);
    } else {
      // 404 - resource not found
      res.writeHead(404);
      res.end('page not found');
    }
  })
  .listen(PORT);
