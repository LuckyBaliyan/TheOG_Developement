const app = require("./src/app");

const createDb = require("./src/config/database");

createDb();

app.listen(3000,()=>{
    console.log("Server is Running!");
});