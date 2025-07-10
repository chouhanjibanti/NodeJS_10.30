const express = require('express');
const http = require("http")

const socketIo = require('socket.io');
const PORT = 8000;
const app = express();

// http server  and pass the express app
const server = http.createServer(app)

// set up the socket io on the server
const io = socketIo(server)

// Handle connection event
//  http://localhost:9000
io.on("connection",(socket)=>{
    console.log("user Connected");

    // handle custom message from client
    socket.on("message",(msg)=>{
        console.log("Received Msg :",msg);

        // broadcast message to all client
        io.emit("message" , msg)
    })
    // 
    socket.on("disconnect",()=>{
        console.log("A user Disconnected....");
    })
})
    app.use(express.static("public"))

server.listen(PORT,()=>{
    console.log(`server listening on http://localhost:${PORT}`);
})


