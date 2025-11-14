import { Router } from "express";
import { login, Register, updatePassword, verifyEmail } from "../controller/signupcontroller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

export const signupRouter = Router();
signupRouter.post("/register", Register);
signupRouter.post("/verify-email",verifyEmail)
signupRouter.post("/login",login)
signupRouter.patch("/updatePassword",isAuthenticated,updatePassword)
