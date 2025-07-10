const dotenv = require('dotenv');

dotenv.config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 9000

const dbConfig  = require('./config/dbConfig');

const router = require("./routes/user.routes")

app.use(express.json())

app.use("/api",router);

app.listen(PORT , ()=>{
    console.log(`server is fun on port no http://localhost:${PORT}`);
})