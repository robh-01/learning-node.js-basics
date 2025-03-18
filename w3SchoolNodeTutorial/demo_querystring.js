import http from "http";

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    //use the url constructor to parse the request URL
    const q = new URL(req.url, `http://${req.headers.host}`);
    const year = q.searchParams.get("year");
    const month = q.searchParams.get("month");

    const txt = `${month} ${year}`;
    res.end(txt);
  })
  .listen(8080);
