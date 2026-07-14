// added type module to package.json to now use import statements
import app from "./src/app.js";

app.listen(3000, ()=>{
    console.log("Server is running on port 3000!");
})