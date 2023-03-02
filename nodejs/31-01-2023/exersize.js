const http = require('http');
const os = require('os');

const fs = require('fs');
const productsPage = fs.readFileSync('./products.html');
const clientPage = fs.readFileSync('./client.html');

let user = os.userInfo();
let platform = os.platform();
let data = new Date();

let message = `<!doctype html><html>
<head>

</head>
<body>
<p>User: <b>${user.username}</b> </p>
<p>Starts the app on the <b>${data.getDate()}/ ${data.getMonth()}/ ${data.getFullYear()}</b>
by using the platform: <b>${platform}</b>
</p>
<a href="./products">products</a> <a href="./client">client</a>
</body>

</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(message);
    return;
  }
  if (req.url === '/products') {
    res.end(productsPage);
    return;
  }
  if (req.url === '/client') {
    res.end(clientPage);
    return;
  }
  res.writeHead(404);
  res.end('page not found, try again later.');
});

server.listen(3000);
