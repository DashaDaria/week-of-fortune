const http = require("http");
const fs = require("fs");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.stringify(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
