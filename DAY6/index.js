const express = require("express");

const fs = require("fs");

const users = require("./MOCK_DATA.json");

// app init
const app = express();
const PORT = 7000;

// middleware // built in
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// second middleware
app.use((req, res, next) => {
  console.log("hello from middleware1");
  next();
});

// third middleware
app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n ${Date.now()} : ${req.method}: ${req.path}\n`,
    (err, data) => {
      next();
    }
  );
});

// Routes
// get/post /patch /delete
// app.get("/api/users", (req, res) => {
//   return res.json(users);
// });

// post
// app.post("/api/users", (req, res) => {
//   const body = req.body;
//   if (
//     !body ||
//     !body.first_name ||
//     !body.last_name ||
//     !body.email ||
//     !body.gender ||
//     !body.job_title
//   ) {
//     return res.status(400).json({ msg: "All fields are req.." });
//   }
//   users.push({ ...body, id: users.length + 1 });
//   fs.writeFile(
//     `${__dirname}/MOCK_DATA.json`,
//     JSON.stringify(users),
//     (err, data) => {
//       return res.json({ status: "success", id: users.length });
//     }
//   );
// });



// post

// app.post("/api/users", (req, res) => {
//   const body = req.body;
//   users.push({ ...body, id: users.length + 1 });
//   fs.writeFile(
//     `${__dirname}/MOCK_DATA.json`,
//     JSON.stringify(users),
//     (err, data) => {
//       return res.json({ status: "success", id: users.length });
//     }
//   );
// });

// get the data based on  id / patch / delete
// app.get("/api/users/:id",(req,res)=>{
//       const id  = parseInt(req.params.id )//1002
//       const user = users.find((user)=>{
//         return user.id === id;// 1002 === 1002
//       });
//       return res.json(user)
// })

// patch / delete / get // using route
app.route("/api/users/:id").get((req,res)=>{
          const id  = parseInt(req.params.id )//1002
          const user = users.find((user)=>{
        return user.id === id;// 1002 === 1002
      });
      return res.json(user)
})
.patch((req,res)=>{
    return res.json({status:"pending"})
})
.delete((req,res)=>{
    return res.json({status:"pending"})
})

app.listen(PORT, () => console.log(`Server started on http://localhost:7000`));

// rest and spread operator
// rest ...  -> function (arr)
// spread ...   -> Array of data copy
