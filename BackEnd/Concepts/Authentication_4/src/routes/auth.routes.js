const express = require("express");
const userModel = require("../models/user.model");

const authRouter = express.Router();

/*
* /api/auth/register is the complete path now for express to use for calling this api
*/

//creating api for registration
authRouter.post("/",async (req,res)=>{
    const {name, email, password} = req.body;

    const isUserAlreadyExsist = await userModel.findOne({email});

    if(isUserAlreadyExsist){
        return res.status(400).json({
            message:"user with same email already exsists!"
        })
    }

    const user = await userModel.create({name, email, password});

    res.status(201).json({
        message:"registered sucessfully!",
        user
    });

})

module.exports = authRouter;