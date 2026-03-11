//Create a Schema for the notes
const mongo = require("mongoose");

const noteSchema = new mongo.Schema({
    title:String,
    description: String,
});

const notesModel = mongo.model("notes",noteSchema);

module.exports = notesModel;