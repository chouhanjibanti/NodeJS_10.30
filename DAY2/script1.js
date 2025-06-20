// fs modules
// write , read , append , copy , delete

// const fs = require("fs");

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

// ===================================================

// append file and copy file

// sync
// fs.appendFileSync("./contact.txt","i am very very very good boy\n")
// console.log("data add successfully")

// async
// fs.appendFile("./jay.txt","i am very very very good boy\n",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("content successfully append");
//     }
// })

// ===================================================================

// copy file and unlink/delete
// mkdir

//  copy file :-

// sync

// fs.copyFileSync("./contact.txt","./copy.txt")
// console.log("data copied");

// Async

// fs.copyFile("./kritanshu.txt", "./raja.txt", (err)=>{
//     if(err)
//         console.log(err);
//     else
//       console.log("file copied successfully");
// })

// unlink :-

// fs.unlinkSync("./jay.txt")
// console.log("file deleted");

// fs.unlink("./copy.txt",(err)=>{
//         if(err)
//         console.log(err);
//     else
//       console.log("file deleted successfully");
// })

// stats :- by using this we can check the stats

// console.log(fs.statSync("./kritanshu.txt"));

// mkdir :- we can create the directory / folder

// sync
// fs.mkdirSync("my-app1/a/b/c/d",{recursive :true});
// console.log("mkdir success");


// ====================================

//  file and path

const fs = require("fs"); // module
const path = require("path");// module

// creating the folder
const dirPath = path.join(__dirname, "exampledir/a/b");

fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("crated successfully");
  }
});
