import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Signup } from "../model/model.js";
import { secretKey } from "../services/constant.js";
import { sendEmail } from "../services/sendEmail.js";
export const Register = async (req, res, next) => {
  try {
    let data = req.body; // getting data from frontend

    //hash password

    let password = data.password;
    let hashedPassword = await bcrypt.hash(password, 10);
    data = {
      ...data,
      password: hashedPassword,
      isVerifiedEmail: false,
      role: "user",
    };
    let user = await Signup.create(data);
    let infoObj = {
      _id: user._id,
    };

    let expiryInfo = {
      expiresIn: "1h",
    };
    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    await sendEmail({
      to: data.email,
      subject: "Account Registration successfully",
      html: `
      <h1>Account Registered </h1>
      <p>Your account has been registered. Click below to verify:</p>
<a href="http://localhost:3000/verify-email?token=${token}">Verify Email</a>

      `,
    });
    res.status(201).json({
      success: true,
      message: "user registerd successfully",
      result: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res, next) => {
  //extract token
  let tokenString = req.headers.authorization;
  let tokenArray = tokenString.split(" ");
  let token = tokenArray[1];
  //  verify token
  let infoObj = await jwt.verify(token, secretKey);
  let userId = infoObj._id;
  let user = await Signup.findByIdAndUpdate(
    userId,
    {
        isVerifiedEmail:true,
    },
    {
        new : true 
    }
  );
  res.status(201).json({
    success: true,
    message:"Email verified successfully",
    data : user,
  })
};