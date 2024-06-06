const http = require('http');

const routes = require('./routes')

const server = http.createServer((req, res) => {
  console.log(`Request method: ${req.method} | Endpoint: ${req.url}`)


  const route = routes.find((routeObj) => (
    routeObj.endpoint === req.url && routeObj.method === req.method
  ));

  if (route) {
    route.handler(req, res);
  } else {
    if(req.url === '/users' && req.method === 'GET' ) {
      UserController.listUsers(req, res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/htlm' });
      res.end(`Cannot ${req.method} ${req.url}`); 
    } 
  }


});

server.listen(3000, () => console.log('listening on port 3000 in localhost:3000'));