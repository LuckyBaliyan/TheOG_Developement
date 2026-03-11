const mongo = require("mongoose");

const url = process.env.MONGO_URI;

function connectDb(){
    mongo.connect(url).then(()=>{console.log("Connected DB!")});
}

module.exports = connectDb;