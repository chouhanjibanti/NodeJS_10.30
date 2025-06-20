// const http = require("http")
// const PORT = 8000;
// const myServer = http.createServer((req,res)=>{
//     console.log("new Req coming .......");
//     console.log(req);
//     res.end("Hello from server............")
// })

// myServer.listen(PORT,()=> console.log(`Server Started on port ${PORT}`));

// ===================================

const http = require("http");
const fs = require("fs");

const myServer1 = http.createServer((req, res) => {
  const log1 = `${Date.now()} : ${req.url} New Request comming ..........\n`;
  fs.appendFile("log.txt", log1, (error, data) => {
    switch (
      req.url // /  //  /about   // /contact-us  200 201   404  500
    ) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("welcome to About page");
        break;
      case "/contact-us":
        res.end("welcome to contact page");
        break;
      default:
        res.end("404 not found");
    }
  });
});

myServer1.listen(7000, () => console.log("server1 started..."));
// http://localhost:7000/
// http://localhost:7000/about
// http://localhost:7000/contact-us
// http://localhost:7000/login
