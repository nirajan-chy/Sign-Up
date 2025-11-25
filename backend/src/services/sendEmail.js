import nodemailer from "nodemailer";
let transportInfo ={
    host : "smtp.gmail.com",
    port : 587,
    secure : false,
    auth:{
        user: "gmail",
    pass: "app_pass",
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
