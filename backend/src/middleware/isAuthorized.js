import { Signup } from "../model/model";

export const isAuthorized = (roles)=>{
    return async(req , res , next)=>{
        try {
            let _id = req._id;
            let result = await Signup.findById(_id);
            let tokenRole = result.role;
            if(roles.includes(tokenrole)){
                next()
            }else{
                res.status(403).json({
                    success:false,
                    message:"User not authorized",
                })
            }
        } catch (error) {
             res.status(403).json({
                    success:false,
                    message:"User not authorized",
                })
        }
    }
}