// import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.js';
import router from './routes/user.routes.js';
import express from 'express';
import cors from 'cors';
const app = express();

const PORT = 7000 || 9000

app.use(cors({
    origin : "http://localhost:5173",
    credentials :true
}));

app.use(express.json())

app.use("/api",router);

app.listen(PORT , ()=>{
    console.log(`server is fun on port no http://localhost:${PORT}`);
})