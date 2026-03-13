/* Create and config the server */

const express = require("express");
const app = express();
const notesModel = require("./models/notes.model");
const cors = require("cors");
const path = require("path");


app.use(cors());
app.use(express.json());//middleware from express
app.use(express.static("./public")); //use to handle the file path on wildcard api

// create a Note
app.post("/api/notes",async (req,res)=>{
    console.log(req.body); 
    //will get undefined when sended from postman in JSON format

    //but why undefined because by default the express alone is't enought to persist 
    //JSON format data so we need to use a middleware by express
    //server.use(express.json());

   /* notes.push(req.body);
    console.log(notes);
    //res.send("note Created!!");
    */
    const {title,description} = req.body;

    const note = await notesModel.create({
        title,description
    });

    res.status(201).json({
        message:"Note created Sucessfully!",
        note
    });

});

//get all the current notes
app.get("/api/notes",async (req,res)=>{
    //res.send(notes);

    const notes2 = await notesModel.find();


    res.status(200).json({
        notes:notes2
    });

})

//delete note 
app.delete("/api/notes/:id",async (req,res)=>{
    const id = req.params.id;
    await notesModel.findByIdAndDelete(id);
    
    //delete notes[req.params.index];
    //res.send("Note Deleted!");
    res.status(200).json({
        message:"Note Deleted Sucessfully!",
    })

});

//PATCH Notes/:id
//req.body = {description:"simple modified description"}
app.patch("/api/notes/:id",async (req,res)=>{
    //notes[req.params.index].description = req.body.description;
    
    const id = req.params.id;
    const {description} = req.body;

    await notesModel.findByIdAndUpdate(id,{description});

    res.status(200).json({
        message:"Note Updated!"
    });

});


app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"));
});

module.exports = app;

