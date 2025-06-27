// npm init -y   // netstat -an | findstr 27017
// npm install express mongoose

const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const app = express();
const PORT = 6000;

app.use(express.json())

// mongodb connection
mongoose
  .connect("mongodb://127.0.0.1:27017/myapp10")
  .then(() => console.log("DB Connected successfully"))
  .catch((err) => console.log("Mongo Error", err));

// we will create the schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    Gender: {
      type: String,
    },
  },
  { timestamps: true }
);

// Model create
const User = mongoose.model("user", userSchema);

// middleware1
app.use(express.urlencoded({ extended: false }));

// middleware2
app.use((req, res, next) => {
  console.log("hello from middleware 1......");
  next();
});

// middleware3
app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n ${Date.now()}: ${req.method} :${req.path} \n`,
    (err, data) => {
      next();
    }
  );
});

// REST API and SOAP
app.post("/api/users", async (req, res) => {
    const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return res.status(400).json({ msg: "All fields are required..." });
  }
  const result =await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });
  return res.status(201).json({ msg: "successfully saved" });
});

// get method
// app.get("/api/users",async (req,res)=>{
//     const allDbUsers = await User.find({})
//     return res.json(allDbUsers)
// })

// get the data based on the id 
app.route("/api/users/:id").get(async (req,res)=>{
      const user =await User.findById(req.params.id);//2
      if(!user) return res.status(404).json({error:"user not found...."})
        return res.json(user);
}).patch(async (req,res)=>{
   await User.findByIdAndUpdate(req.params.id,{lastName:"jain"})
    return res.json({status:"success"})
}).delete(async (req,res)=>{
    await User.findByIdAndDelete(req.params.id)
        return res.json({status:"Deleted successfully....."})


})



// listen on port
app.listen(PORT, () => console.log(`server started on ${PORT}`));
