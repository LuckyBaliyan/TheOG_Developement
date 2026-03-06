
const express = require("express");

const server = express();
server.use(express.json()); //middleware from express

const notes = [];

server.post("/notes",(req,res)=>{
    console.log(req.body); 
    //will get undefined when sended from postman in JSON format

    //but why undefined because by default the express alone is't enought to persist 
    //JSON format data so we need to use a middleware by express
    //server.use(express.json());

    notes.push(req.body);
    console.log(notes);
    res.send("note Created!!");
});

//get all the current notes
server.get("/notes",(req,res)=>{
    res.send(notes);
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000!");   
})