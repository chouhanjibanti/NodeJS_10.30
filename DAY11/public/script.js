// connect to websocket server
const socket = io();

// handle sending message

document.getElementById("sendBtn").addEventListener("click",()=>{
    const message =document.getElementById("messageInput").value;
    socket.emit("message", message)
})

// handling incoming message

socket.on("message" , (msg)=>{
    console.log("client",msg);
   const messageDiv = document.getElementById("messages")
   const messageElement  =document.createElement("p")
   messageElement.textContent = msg;
   messageDiv.appendChild(messageElement);
})
