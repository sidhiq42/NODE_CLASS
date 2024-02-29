const http = require("http");
const url = require("url");
const fs= require('fs');

//Server
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/product") {
    res.end("WELCOME TO PRODUCT SECTION 👍");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dummy_json/product.json`, "utf-8" ,(err,data)=>{
      const product = JSON.parse(data)
      res.writeHead(200,{"Content-Type": "application/json"});
      res.end(data)
    })
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
})

const port = 8080;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});