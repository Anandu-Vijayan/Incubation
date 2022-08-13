const jwt = require('jsonwebtoken')

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWR_SECRET,{
        expiresIn:"100d"
    } )
}

module.exports=generateToken;