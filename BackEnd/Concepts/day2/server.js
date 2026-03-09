const express = require("express");

const server = express();

server.get("/",(req,res)=>{
    res.send("Hello World!");
})

//before cant get /about on get req on localhost:3000/about 

//after

server.get("/about",(req,res)=>{
    res.send("welcome About Page!");
})

server.listen(3000,()=>{
    console.log("Surver is Running on Port 3000");
});
