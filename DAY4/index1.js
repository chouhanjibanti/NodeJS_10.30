const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req,res)=>{
   const log1 =  `${Date.now()}: ${req.method}: ${req.url} New Req coming .........\n`
     const myUrl = url.parse(req.url , true)  // query String 
     console.log(myUrl);


     fs.appendFile("log10.txt",log1 , (err,data) =>{
        switch (myUrl.pathname) {
            case "/":
            if(req.method === 'GET')
            res.end("my Homepage")
            break;
            case "/about":
               const userName = myUrl.query.name;
               res.end(`hyyy ,${userName}`)
               break;
            case "/contact":
                res.end("welcome to contact page")
                break;
            case "/signup":
                if(req.method === 'GET'){
                    res.end("this is a signup page ")
                }else if(req.method === 'POST'){
                     res.end("success")
                }
                break;
            default:
                res.end("404 not found")
        }
     } )
})

myServer.listen(7000,()=> console.log("server started on PORT 7000"));


// http://localhost:8000/about?name= jay

// POSTMAN -> tool api test
// insomnia -> tool api test


// GET  -> data get/ fetch / retrieve 
// POST -> insert / save 
// PUT -> update ->  entire update
// PATCH -> update -> partially data update
// DELETE -> delete


// register -> name , email , mobile , password
// update -> mobile , email  patch 

// update ->  name , email , mobile , password
// patch -> mobile -> 2345678   email -> wbfheb@gmail.com    name = null , password -> null
