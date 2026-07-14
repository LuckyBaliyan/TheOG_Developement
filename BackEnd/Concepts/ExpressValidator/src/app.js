import express from "express";
import authRouter from "./routes/app.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);

//must be used after all other middlewares
app.use(errorHandler);

export default app;