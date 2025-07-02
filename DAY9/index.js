const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 8000;


// Set up storage for uploaded files
const storage = multer.diskStorage({
   destination : function(req,file,cb) {
    return cb(null , "./uploads")
   },
   filename:function(req,file,cb){
    return cb(null, `${Date.now()} - ${file.originalname}`)
   }
})

// 
const upload = multer({storage : storage})


app.set("view engine","ejs")
app.set("views",path.join(__dirname , "views"))

// / middleware // parsing form data 
app.use(express.urlencoded({extended : false}))

// get methods
app.get("/",(req,res)=>{
    return res.render("homepage")
})


// post
// http://localhost:8000/upload
app.post("/upload", upload.single("profileImage"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);

    return res.send("file uploaded successfully...")
})


// listen on port
app.listen(PORT,()=> console.log(`server started on the port ,http://localhost:PORT`))

