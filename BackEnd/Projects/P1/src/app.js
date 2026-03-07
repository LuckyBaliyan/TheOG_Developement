/* Create and config the server */

const express = require("express");
const app = express();


app.use(express.json());//middleware from express

const notes = [];

// create a Note
app.post("/notes",(req,res)=>{
    console.log(req.body); 
    //will get undefined when sended from postman in JSON format

    //but why undefined because by default the express alone is't enought to persist 
    //JSON format data so we need to use a middleware by express
    //server.use(express.json());

    notes.push(req.body);
    console.log(notes);
    //res.send("note Created!!");

    res.status(201).json({
        message:"Note created Sucessfully!"
    });

});

//get all the current notes
app.get("/notes",(req,res)=>{
    //res.send(notes);

    res.status(200).json({
        notes:notes
    });

})

//delete note 
app.delete("/notes/:index",(req,res)=>{
    console.log(req.params.index);
    delete notes[req.params.index];

    //res.send("Note Deleted!");
    res.status(204).json({
        message:"Note Deleted Sucessfully!"
    })

});

//PATCH Notes/:index
//req.body = {description:"simple modified description"}
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description;

    //res.send("Note Updated Sucessfully!");

    res.status(200).json({
        message:"Note Updated!",
        updtaedNote:notes[req.params.index],
    })

});

module.exports = app;

