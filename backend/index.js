import express from "express";
import connectDB from "./src/connectDataBase/connectDB.js";
import { signupRouter } from "./src/routes/signupRouter.js";

const app = express();
const port = 3000;
app.use(express.json());
connectDB();
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

app.use("/Signup",signupRouter)
