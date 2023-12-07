const http = require("node:http");

// const hostname = "localhost";
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "application/json");
  res.end('{"mensaje": "Hola Mundo!!" }');
});

server.listen(port, hostname, () => {
  console.log(`Server corriendo en http://${hostname}:${port}/`);
});
