import mongoose from "mongoose";

import signupSchema from "../schema/signupSchema.js";


export const Signup = mongoose.model("Signup", signupSchema)
