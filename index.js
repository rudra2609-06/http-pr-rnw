import { createServer } from "node:http";
import fs from "node:fs";

const requestListener = (req, res) => {
  let filename = "";
  console.log(req.url);
  switch (req.url) {
    case "/":
      filename = "./index.html";
      break;

    case "/blog.html":
      filename = "./blog.html";
      break;

    case "/contact.html":
      filename = "./contact.html";
      break;

    case "/about.html":
      filename = "./about.html";
      break;

    default:
      filename = "./404.html";
  }

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.end(err);
    } else {
      res.end(data);
    }
  });
};

const server = createServer(requestListener);

server.listen(8087, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server started at 8087");
  }
});
