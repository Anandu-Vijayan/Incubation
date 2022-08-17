const asynchandler = require('express-async-handler')
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs')
const registerUser = asynchandler (async (req,res)=>{

    const {firstName,lastName,email,password} = req.body;
 

    const userExists=await User.findOne({email});
    
    if(userExists){
        res.status(400)
        throw new Error('User Already Exists ')
    }

    const user = await User.create({
        firstName,lastName,email,password
    })
    
    if(user){
        res.status(201).json({
            _id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            isAdmin:user.isAdmin,
            logedin:user.true,
            email:user.email,
            token:generateToken(user._id),

        })
    }else{
        res.status(400)
        throw new Error("Error Occured!")

    }

    
})
const authUser = asynchandler (async (req,res)=>{
    const {email,password} = req.body;
  console.log(req.body);
    const user =await User.findOne({email});

console.log(user);
 

    if(user && (await user.matchPassword(password))){
        console.log("haiiiii");
        res.json({
            _id:user._id,
            firstName:user.firstName,
            lastname:user.lastName,
            email:user.email,
            isAdmin:user.isAdmin,
            logedin:user.true,
            token:generateToken(user._id)

        })
    }else{
        res.status(400)
        throw new Error("Inavalid Email or Password!")

    }


   
    
})

module.exports = {registerUser,authUser}