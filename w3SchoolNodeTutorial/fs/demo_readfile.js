import http from "http";
import fs from "fs";

http
  .createServer((req, res) => {
    fs.readFile("./demofile1.html", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(3000);
