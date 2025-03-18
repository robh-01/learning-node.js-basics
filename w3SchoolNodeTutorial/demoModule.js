import http from "http";
import myDateTime from "./myFirstModule.js";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("The date with the time currently are: " + myDateTime());
  res.end();
});

server.listen(8080);
