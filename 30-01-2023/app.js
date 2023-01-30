const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/landing-page' || req.url === '/') res.end('home');
  else if (req.url === '/students') res.end('students');
  else if (req.url === '/courses') res.end('courses');
  else {
    res.writeHead(404);
    res.end('page not found');
  }
});

server.listen(3000);
