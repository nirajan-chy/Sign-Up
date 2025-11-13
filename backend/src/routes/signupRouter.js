import { Router } from "express";
import { Register } from "../controller/signupcontroller.js";

export const signupRouter = Router();
signupRouter.post("/register", Register);
