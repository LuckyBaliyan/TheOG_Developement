const mongo = require("mongoose");

const uri = process.env.MONGO_URI;

function connectDb(){
    mongo.connect(uri).then(()=>{console.log("Connected DB!")});
}

module.exports = connectDb;