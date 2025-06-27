// folder create 
// npm init -y 
// npm install express
// file create index.js

const express = require("express");

const app = express(); //  we will create the express app , intialize app
const PORT = 8000;

// middleware  -> it is built in middleware it will parse incoming form data 
// app.use() -> for the globally access 
app.use(express.urlencoded({extended:true}))


app.get("/", (req, res) => {
  return res.send("Homepage");
});

app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});
app.listen(PORT, () => console.log(`server started on port ${PORT} `));


// user[name]=raja&[email]=raja@gmail.com
// app.use(express.urlencoded({extended:false}))




