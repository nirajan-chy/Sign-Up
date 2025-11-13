import mongoose from "mongoose"

const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/signup");
    console.log("Database connected successfully");
    
}

export default connectDB