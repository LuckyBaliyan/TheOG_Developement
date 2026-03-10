/*Starting server */

//require for enviornment variables file dotenv is a package installed via npm
require("dotenv").config();

const app = require("./src/app");
const connectDb = require("./src/config/database");

connectDb();

app.listen(3000,()=>{
    console.log("Server is Running on port 3000");
});

