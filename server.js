const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api/messages' && req.method === 'GET') {
    const messages = [
      { 'id': 1, 'user': 'John Doe', 'message': 'Hello, world!' },
      { 'id': 2, 'user': 'Jane Doe', 'message': 'Hi, universe!' },
      { 'id': 3, 'user': 'Max', 'message': 'Hi, universe!' },
      { 'id':4 , 'user': 'Lee', 'message': 'Hi, universe!' },
      { 'id':5 , 'user': 'Ray', 'message': 'Hi, universe!' },
      { 'id':6 , 'user': 'Bruce', 'message': 'Hi, universe!' },
    ];

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(messages));
  } else {
    res.writeHead(404);
    res.end();
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
