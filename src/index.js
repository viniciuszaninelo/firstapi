const http = require('http');
const UserController = require('./controllers/UserController')

const server = http.createServer((req, res) => {
  console.log(`Request method: ${req.method} | Endpoint: ${req.url}`)

  if(req.url === '/users' && req.method === 'GET' ) {
    UserController.listUsers(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/htlm' });
    res.end(`Cannot ${req.method} ${req.url}`); 
  }
});

server.listen(3000, () => console.log('listening on port 3000 in localhost:3000'));