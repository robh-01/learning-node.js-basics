//moved this file to root directory because didn't want the hassle of setting up npm scripts in the traversy media folder
// he also added support for css but as my folder structure is messed up so i will try it on another project
import http from "http";
import path from "path";
import fs from "fs/promises";

const server = http.createServer((req, res) => {
  //this is not very efficient as for every page we add we have to do if else.
  // console.log(req.url);

  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(
  //       import.meta.dirname,
  //       "Traversy Media Crash Course/public/index.html"
  //     ),
  //     "utf-8"
  //   )
  //     .then((data) => {
  //       res.writeHead(200, { "content-type": "text/html" });
  //       res.write(data);
  //       res.end();
  //     })
  //     .catch((err) => {
  //       res.writeHead(500, { "content-type": "text/html" });
  //       res.write(
  //         "There was some error on loading the webpage. Sorry for your inconvenience"
  //       );
  //       res.end();
  //     });
  // } else if (req.url === "/about") {
  //   fs.readFile("./Traversy Media Crash Course/public/about.html", "utf-8")
  //     .then((data) => {
  //       res.writeHead(200, { "content-type": "text/html" });
  //       res.write(data);
  //       res.end();
  //     })
  //     .catch((err) => {
  //       res.writeHead(500, { "content-type": "text/html" });
  //       res.write(
  //         "There was some error on loading the about us webpage. Sorry for your inconvenience"
  //       );
  //       res.end();
  //     });
  // } else if (req.url === "/api/users") {
  //   const users = [
  //     { name: "John Doe", age: 30 },
  //     { name: "Hari Smith", age: 28 },
  //   ];
  //   res.writeHead(200, { "content-type": "application/json" });
  //   res.write(JSON.stringify(users));
  //   res.end();
  // } else {
  //   res.writeHead(404, { "content-type": "text/html" });
  //   res.write("404 not found. Such page is not available");
  //   res.end();
  // }

  //build file path
  let filepath = path.join(
    "./Traversy Media Crash Course/public",
    req.url === "/" ? "index.html" : req.url
  );
  // console.log(filepath);

  //extension of file
  let extname = path.extname(filepath);

  //initial content type
  let contentType = "text/html";

  //check extension and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //read file
  fs.readFile(filepath, "utf-8")
    .then((content) => {
      //success
      res.writeHead(200, { "content-type": contentType });
      res.write(content);
      res.end();
    })
    .catch((err) => {
      if ((err.code = "ENOENT")) {
        //file not found
        fs.readFile(
          path.join("./Traversy Media Crash Course/public", "404.html"),
          "utf-8"
        ).then((content) => {
          res.writeHead(404, { "content-type": "text/html" });
          res.write(content);
          res.end();
        });
      } else {
        // some server error
        res.writeHead(500);
        res.write(`Server error: ${err.code}`);
        res.end();
      }
    });
});

// process.env.PORT is somethings related to hosting(later)
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
