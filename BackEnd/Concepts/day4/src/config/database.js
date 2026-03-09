const mongo = require("mongoose");

function createDb(){
    mongo.connect(
        "mongodb+srv://baliyanlucky85_db_user:D2i7PvIoSWhGUwKb@cluster0.qn1x0gg.mongodb.net/db-1"
    ).then(()=>{
        console.log("Connect to Db!");
        
    })
}

module.exports = createDb;