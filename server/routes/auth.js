import express from "express";
import { googleAuth, signIn, signUp } from "../controllers/auth.js";
const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.post("/google", googleAuth)

export default authRouter;
