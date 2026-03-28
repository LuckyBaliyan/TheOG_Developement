const express = require("express");
const userModel = require("../models/user.model");
const jwt  = require("jsonwebtoken");
const crypto = require("crypto");

const authRouter = express.Router();

/*
* /api/auth/register is the complete path now for express to use for calling this api
*/

//creating api for registration
authRouter.post("/register",async (req,res)=>{
    const {name, email, password} = req.body;

    const isUserAlreadyExsist = await userModel.findOne({email});

    if(isUserAlreadyExsist){
        return res.status(400).json({
            message:"user with same email already exsists!"
        })
    }

    const hashPass = crypto.createHash("md5").update(password).digest("hex");

    const user = await userModel.create({name, email, password:hashPass});

    const token = jwt.sign(
        {
        id:user._id,
        email:user.email
        },
        process.env.JWT_SECRET, 
        {expiresIn: "1h"}
    )

    res.cookie("jwt_token",token); //stores in key-value pair at client-side

    res.status(201).json({
        message:"registered sucessfully!",
        user,
        token
    });

})

/**
 * /api/auth/protected
*/

authRouter.post("/protected",(req,res)=>{
    const token = req.cookies;
    console.log(req.cookies);

    res.status(200).json({
        message:"sucess from protected api",
        token
    })
});

/**
 * Login Api:-  /api/auth/login
*/

authRouter.post("/login",async (req, res)=>{
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        return res.status(404).json({
            message:"user Not found at this email"
        })
    }

    const hashPass = crypto.createHash("md5").update(password).digest("hex");

    const isPass = user.password === hashPass;
    
    if(!isPass){
        return res.status(404).json({
            message:"Entered Password is incorrect not matching!"
        })
    }

    //if user found make a new token again on each sucessfull login always 
    const token = jwt.sign(
        {
        id:user._id,
        email:user.email
        },
        process.env.JWT_SECRET
    );

    res.cookie("jwt_token", token); 
    // we are just sending cookies as response nothing with storing at client side that will
    // be handled at clientSide i.e React-part

    return res.status(200).json({
        message:"Sucessfully logged In!",
        user:user,
        Usertoken:token
    });

})

/**
 * Api to verify user 
 */

authRouter.get('/get-me', async (req, res)=>{
    const token = req.cookies.jwt_token;

    //to verify the token is created by our server or not 
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);

    res.json({
        name:user.name,
        email:user.email
    });
    
})

module.exports = authRouter;