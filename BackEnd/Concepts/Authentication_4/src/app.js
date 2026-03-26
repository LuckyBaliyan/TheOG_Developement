
const express = require("express");
const authRouter = require("./routes/auth.routes");

const app = express();
app.use(express.json()); //middleware to pass data in req.body

//now we have to hit this api/auth/register to call
app.use("/api/auth/register",authRouter);

module.exports = app;