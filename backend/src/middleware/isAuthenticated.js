import jwt from "jsonwebtoken"
import { secretKey } from "../services/constant.js";

export const isAuthenticated = async(req , res , next)=>{
    try {
        let tokenString = req.headers.authorization;
        let tokenArray = tokenString.split(" ");
        let token = tokenArray[1];
        let user = await jwt.verify(token , secretKey)
        req._id = user._id;
        next();
    } catch (error) {
        res.status(400).json({
            success : false,
            message:error.message
        })
    }
}