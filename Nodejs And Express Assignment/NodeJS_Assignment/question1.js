const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/pain" });

  res.end("Server, I m listing on port 3000 good luck");
});

server.listen(3000);
