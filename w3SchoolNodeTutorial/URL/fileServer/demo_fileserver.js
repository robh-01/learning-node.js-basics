import http from "http";
import fs from "fs";

http
  .createServer((req, res) => {
    let fileName = "." + req.url;
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 not found");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(3000);
