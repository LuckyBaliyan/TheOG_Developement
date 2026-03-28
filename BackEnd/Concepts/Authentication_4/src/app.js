
const express = require("express");
const authRouter = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");


const app = express();
app.use(express.json()); //middleware to pass data in req.body
app.use(cookieParser()); 

//now we have to hit this api/auth/register to call
app.use("/api/auth",authRouter);
app.use("/api/auth",authRouter);
app.use("/api/auth",authRouter);
app.use("/api/auth",authRouter);

module.exports = app;