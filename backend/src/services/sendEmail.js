import nodemailer from "nodemailer";
let transportInfo ={
    host : "smtp.gmail.com",
    port : 587,
    secure : false,
    auth:{
        user: "nirajanchaudhary00001@gmail.com",
    pass: "m z d h a g v g u m n l a r g x",
    }
};
export const sendEmail = async (mailInfo)=>{
    try {
        let transporter = nodemailer.createTransport(transportInfo);
        let info = await transporter.sendMail(mailInfo);
    } catch (error) {
        console.log("error has occured on mail" , error.message);
        
    }
}