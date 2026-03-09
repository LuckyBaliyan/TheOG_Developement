/*
Start the server 
*/

const app = require("./src/app");

const mongo = require("mongoose");

//The connection string is just for testing not of a working workflow or not working 
// in production
function connectDb(){
    mongo.connect(
        "mongodb+srv://baliyanlucky85_db_user:D2i7PvIoSWhGUwKb@cluster0.qn1x0gg.mongodb.net/db-1"
    ).then(()=>{
        console.log("Connected to db!");
    })
}

connectDb();

app.listen(3000,()=>{
    console.log("Server is running!");
})