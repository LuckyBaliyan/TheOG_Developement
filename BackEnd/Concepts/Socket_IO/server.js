import app from "./src/app.js";
import { createServer } from "http";
import { Server } from "socket.io";

//save your http server app as its name http obviuosly
const httpServer = createServer(app);

//use io to use your generic httServer as a raw form of ur app
const io = new Server(httpServer, {/* options */});

io.on("connection", (socket)=>{
    //trigger the event on (on)
    console.log("new Connection created!");
    
    //when a singlr user fired and event with message name from client side it will run
    //and the data he sends also came 
    socket.on("message",(msg)=>{
        console.log("user fired message event!");
        console.log("DATA:", msg);
        io.emit("abc");
    });

});


//start your httpserver app.listen will start the generic one 
httpServer.listen(3000, ()=>{
    console.log("Server is Running on port 3000!");
});