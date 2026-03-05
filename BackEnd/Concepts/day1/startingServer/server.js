const express = require("express");

const server = express(); //server is created with this call but not started yet
//created a server instance (obj) with this 

server.get('/',(req,res)=>{
    res.send("Hello HomePage!");
});

server.get("/about",function(req,res){
    res.send("About Page!");
});

server.listen(3000);// server ko start karta hai 