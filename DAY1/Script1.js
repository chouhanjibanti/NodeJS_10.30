// function demo(){
//     console.log("hy debugshala");
// }
// demo()

const fs = require("fs")

// write , read , copy , append , unlink , mkdir
// Sync

// fs.writeFileSync("./mock.txt","Debugshala")
// console.log("file write successfully");

// Async

fs.writeFile("demo.txt","indore",(err)=>{console.log(err);})
console.log("file write successfully");
