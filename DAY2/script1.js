// fs modules
// write , read , append , copy , delete

const fs = require("fs");

// sync
// fs.writeFileSync("kritanshu.txt", "i am bad boy")
// console.log("file created successfully");

// async
// fs.writeFile("jay.txt","i am very bad boy", (err)=>{console.log(err);})
// console.log("file created successfully");
// =================================================================

// read file -> utf8 unicode transformation format
// 0 and 1

// sync
// you can create the file and inside this you can use audio , video , text

// const result =fs.readFileSync("./contact.txt","utf-8")
// console.log(result);

// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("my error is : ", err);
//   } else {
//     console.log(result);
//     console.log("read success");
//   }
// });

// append file and copy file

// sync 
// fs.appendFileSync("./contact.txt","i am very very very good boy\n")
// console.log("data add successfully")

// async
fs.appendFile("./jay.txt","i am very very very good boy\n",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("content successfully append");
    }
})

// copy file and unlink/delete
// mkdir


