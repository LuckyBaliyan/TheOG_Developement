import { Router } from "express";
import { registerUser, registerUser2 } from "../controller/auth.controller.js";
import { registerValidator } from "../validators/auth.validators.js";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/register2", registerValidator, registerUser2);

export default authRouter;