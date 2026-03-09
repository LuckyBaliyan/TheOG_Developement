const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();
app.use(express.json());


app.post("/notes", async (req,res)=>{
    const {title, description} = req.body;

    const note = await noteModel.create({
        title,description
    });

    res.status(201).json({
        message:"Note Created Sucessfully",
        note
    })
})

app.get("/",(req,res)=>{
    res.send("Hello Server!");
});

module.exports = app;