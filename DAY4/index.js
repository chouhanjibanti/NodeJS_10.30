const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log1 = `${Date.now()} : ${req.url} New Request coming ..........\n`;
  const myUrl = url.parse(req.url, true); // login
  console.log(myUrl);

  fs.appendFile("log1.txt", log1, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("This is my homepage");
        break;
      case "/about":
        const userName = myUrl.query.myName;
        res.end(`hi ,${userName}`);
        break;
      case "/contact-us":
        res.end("my contact page");
        break;
      default:
        res.end("404 not found");
    }
  });
});
myServer.listen(8000, () => console.log("server1 started..."));

//  queryString
// https://m.youtube.com/results?search_query=code+with+harry&sp=mAEA
// httsp:localhost:8000?myName=raja

// https://m.youtube.com/results?sp=mAEA&search_query=code+with+harry
// queryString 
// http://localhost:8000/about?myName= jayendra

// https://yt3.ggpht.com/LUKuwjgD94mMoCHhee-_g4ImU0LieSzSJIs6rRJc6rbboxWYI_tzK4S52qNfuJcpMsNIKBGg=s68-c-k-c0x00ffffff-no-rj
// https://www.youtube.com/s/_/ytmainappweb/_/ss/k=ytmainappweb.kevlar_base.d6EWExafUcM.L.W1.O/am=AAAAaEw/d=0/br=1/rs=AGKMywEKXGCc4Fs0kyJZ_q08lT2SYD_pNw